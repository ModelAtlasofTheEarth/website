import React from "react"
import { Link, graphql } from "gatsby"
import PageHead from "../components/Head"
import Layout from "../components/Layout"
import ModelList from "../components/ModelList"

class AuthorRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const author = this.props.pageContext.author
    const full_name = `${author.name} ${author.family_name}`

    const author_posts = posts.filter((post) => {
      for (const post_author of post.node.frontmatter.authors) {
        const post_author_name = (
          post_author.name
          + " "
          + post_author.family_name
        )
        if (post_author_name === full_name) {
          return true
        }
      }
      return false
    })
    const totalCount = author_posts.length

    const authorHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with “${full_name}”`

    return (
      <Layout>
        <section className="section">
          <div className="container content">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: "6rem" }}
            >
              <h3 className="title is-size-4 is-bold-light">{authorHeader}</h3>
              <ModelList posts={author_posts}/>
              <p>
                <Link to="/authors/">Browse all authors</Link>
              </p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default AuthorRoute
export const Head = ({ pageContext }) => <PageHead title={pageContext.author}/>

export const authorPageQuery = graphql`
  query AuthorPage {
    allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {authors: {elemMatch: {name: {ne: null}}}}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            authors {
              name
              family_name
              ORCID
            }
            compute_tags
            contributor {
              name
              family_name
              ORCID
            }
            date(formatString: "MMMM DD, YYYY")
            images {
              landing_image {
                caption
                src {
                  childImageSharp {
                    gatsbyImageData(
                      quality: 100
                      layout: CONSTRAINED
                    )
                  }
                }
              }
            }
            research_tags
            software {
              name
            }
            title
          }
        }
      }
    }
  }
`
