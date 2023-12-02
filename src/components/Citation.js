import { Cite } from "@citation-js/core"
import "@citation-js/plugin-csl"
import "@citation-js/plugin-doi"
import React from "react"

class Citation extends React.Component {
  render() {
    const {
      data,
      html,
    } = this.props
    const __html = (
      html
      ? html
      : getHtml(data)
    )
    return (
      <>
        {
          __html &&
          <span
            dangerouslySetInnerHTML={{
              __html
            }}
          />
        }
      </>
    )
  }
}

const getHtml = (data) => {
  if (!data) {
    return data
  }
  const cite = new Cite(cleanData(data))
  const bib = cite.format("bibliography", {format: "html", style: "apa"})
  return replaceDois({html: bib, style: "apa"})
}

const cleanData = (data) => {
  if (data.container_title) {
    data["container-title"] = data.container_title
  }
  if (data.issued?.date_parts) {
    data.issued["date-parts"] = data.issued.date_parts
  }
  return data
}

// Taken from gatsby-source-publications
// https://github.com/bacor/gatsby-source-publications/blob/main/gatsby-node.mjs#L12
function replaceDois({ html, style }) {
  if (style === "apa") {
    const regex = /(https\:\/\/doi\.org\/([^<]+)\<\/div\>)/gm;
    const match = html.match(regex);
    if (match) {
      const url = match[0].replace("</div>", "");
      const doi = url.replace("https://doi.org/", "");
      const anchor = `
        <a href="${url}">
          <span className="doi-label">DOI:</span>
          <span className="doi-value">${doi}</span>
        </a>`;
      return html.replace(match[0], anchor);
    }
  }
  return html;
}

const extractData = (data) => {
  if (!data) {
    return null
  }
  return {
    author: data.author,
    "container-title": data.journal,
    DOI: data.doi,
    issue: data.issue,
    issued: {
      "date-parts": [[data.year]]
    },
    title: data.title,
    type: "article-journal",
    volume: data.volume,
  }
}

export default Citation
export { extractData, getHtml, replaceDois, cleanData }
