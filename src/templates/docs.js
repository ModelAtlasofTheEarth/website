import { graphql } from "gatsby"
import React from "react"

import { HTMLContent } from "../components/Content"
import PageHead from "../components/Head"
import Layout from "../components/Layout"

class DocsPage extends React.Component {
  render() {
    const data = this.props.data.markdownRemark
    const {
      chapter = "",
      title = "",
    } = data.frontmatter
    const slug = data.fields.slug
    const content = data.html

    return (
      <Layout>
        <div className="container docs-page">
          <h1>{`${chapter}. ${title}`}</h1>
          <HTMLContent className="docs-page" content={content}/>
        </div>
      </Layout>
    )
  }
}

export const DocsPageQuery = graphql`
  query DocsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        chapter
        title
      }
      html
    }
  }
`

export default DocsPage
export const Head = ({ data }) => {
  const fm = data.markdownRemark.frontmatter
  const title = `${fm.chapter}. ${fm.title}`
  return <PageHead title={title}/>
}
