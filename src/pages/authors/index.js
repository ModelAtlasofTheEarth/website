import React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../../components/Layout"
import PageHead from "../../components/Head"

export const Head = () => <PageHead title="Authors"/>

const AuthorsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => {
  return (
    <Layout>
      <section className="section">
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: "6rem" }}
            >
              <h1 className="title is-size-2 is-bold-light">Authors</h1>
              <ul className="authorlist">
                {
                  group.map((name) => (
                    <li key={name.fieldValue}>
                      <Link to={`/authors/${kebabCase(name.fieldValue)}`}>
                        {name.fieldValue} ({name.totalCount})
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AuthorsPage

export const authorsPageQuery = graphql`
  query AuthorsQuery {
    allMarkdownRemark {
      group(field: {frontmatter: {creator: {name: SELECT}}}) {
        fieldValue
        totalCount
      }
    }
  }
`
