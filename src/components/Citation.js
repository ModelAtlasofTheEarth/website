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
      ? replaceDois({ html: html })
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

const cleanDOI = (doi) => {
  const doi_split = doi.split("/")
  const doi_parts = doi_split.slice(-2)
  return doi_parts.join("/")
}

const toCSL = (data) => (
  {
    id: cleanDOI(data.doi),
    type: "article-journal",
    DOI: cleanDOI(data.doi),
    issued: { raw: data.date },
    publisher: data.publisher,
    page: data.page,
    volume: data.volume,
    issue: data.issue,
    "container-title": data.journal,
    title: data.title,
    author: data.authors.map(author => ({
      "@type": author["@type"],
      "@id": author["@id"],
      given: author.name,
      family: author.family_name,
    })),
  }
)

// Taken from gatsby-source-publications
// https://github.com/bacor/gatsby-source-publications/blob/main/gatsby-node.mjs#L12
// Updated replaceDois function to handle complex DOIs
function replaceDois({ html, style = "apa", target = "_blank" }) {
  if (style === "apa") {
    const regex = /(https\:\/\/doi\.org\/([^<]+)(?:\<\/div\>)?)/gm;
    const match = html.match(regex);
    if (match) {
      const url = match[0].replace("</div>", "");
      const doi = url.replace("https://doi.org/", "");
      const anchor = `
        <a href="${url}" target="${target}">
          <span className="doi-label">DOI:</span>
          <span className="doi-value">${doi}</span>
        </a>`;
      return html.replace(match[0], anchor);
    }
  }
  return html;
}

export default Citation
export { getHtml, replaceDois, cleanData, cleanDOI, toCSL }
