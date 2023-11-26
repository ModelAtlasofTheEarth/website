import { Link, graphql } from "gatsby"
import { get, kebabCase } from "lodash"
import React from "react"

import Layout from "../../components/Layout"
import PageHead from "../../components/Head"

export const Head = () => <PageHead title="Authors"/>

class AuthorsPage extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges

    const authors = []
    const post_counts = {}
    for (const post of posts) {
      for (const author of post.node.frontmatter.authors) {
        const full_name = author.name + " " + author.family_name
        let post_count = 1
        if (get(post_counts, full_name)) {
          post_count = post_count + post_counts[full_name]
        }
        post_counts[full_name] = post_count

        const author_obj = {
          full_name: full_name,
          name: author.name,
          family_name: author.family_name,
        }
        let exists = false
        for (const i of authors) {
          if (i.full_name == full_name) {
            exists = true
            break
          }
        }
        if (!exists) {
          authors.push(author_obj)
        }
      }
    }
    authors.sort((a, b) => a.family_name.localeCompare(b.family_name))

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
                    authors.map((author) => (
                      <li key={author.full_name}>
                        <Link to={`/authors/${kebabCase(author.full_name)}`}>
                          {author.family_name}, {author.name} ({post_counts[author.full_name]})
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
}

export default AuthorsPage

export const authorsPageQuery = graphql`
  query AuthorsQuery {
    allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {authors: {elemMatch: {name: {ne: null}}}}}
    ) {
      edges {
        node {
          frontmatter {
            authors {
              name
              family_name
            }
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
