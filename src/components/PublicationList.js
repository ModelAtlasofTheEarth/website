import React from "react"
import { Cite } from "@citation-js/core"
import "@citation-js/plugin-orcid"
import "@citation-js/plugin-csl"
import "@citation-js/plugin-bibtex"

class PublicationList extends React.Component {
  render() {
    const { sortFunc, title, maxPublications, publications } = this.props
    const style = "apa"
    let pubs = Cite(publications.data)
    if (sortFunc) {
      pubs.sort(sortFunc)
    }
    if (maxPublications) {
      pubs.data = pubs.data.slice(0, maxPublications)
    }
    const formatted = pubs.data.map(
      pub => {
        let html = new Cite(pub).format(
          "bibliography",
          {
            format: "html",
            template: style,
            lang: "en-US",
          }
        )
        html = replaceDois({ html, style })
        return {
          html: html,
          id: pub.id,
        }
      }
    )

    return (
      <section className="container orcid-list">
        <h3>{title? title: "Publications"}</h3>
        {
          formatted &&
          (
            <ul className="orcid-list">
              {
                formatted.map(
                  item => <PublicationListItem publication={item}/>
                )
              }
            </ul>
          )
        }
      </section>
    )
  }
}

class PublicationListItem extends React.Component {
  render () {
    const { publication } = this.props

    return (
      <li
        key={publication.id}
        dangerouslySetInnerHTML={{__html: publication.html}}
        className="orcid-list"
      />
    )
  }
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

export default PublicationList
export { PublicationListItem }
