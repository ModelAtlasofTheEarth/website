import React from "react"
import { Link, graphql } from "gatsby"
import PageHead from "../components/Head"
import Layout from "../components/Layout"
import ModelList from "../components/ModelList"

class CreatorRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const creator = this.props.pageContext.creator
    const full_name = `${creator.name} ${creator.family_name}`

    const creator_posts = posts.filter((post) => {
      for (const post_creator of post.node.frontmatter.creators) {
        const post_creator_name = (
          post_creator.name
          + " "
          + post_creator.family_name
        )
        if (post_creator_name === full_name) {
          return true
        }
      }
      return false
    })
    const totalCount = creator_posts.length

    const creatorHeader = `${totalCount} post${
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
              <h3 className="title is-size-4 is-bold-light">{creatorHeader}</h3>
              <ModelList posts={creator_posts}/>
              <p>
                <Link to="/creators/">Browse all creators</Link>
              </p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default CreatorRoute
export const Head = ({ pageContext }) => <PageHead title={pageContext.creator}/>

export const creatorPageQuery = graphql`
  query CreatorPage {
    allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {creators: {elemMatch: {name: {ne: null}}}}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            compute_tags
            creators {
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
            submitter {
              name
              family_name
              ORCID
            }
            title
          }
        }
      }
    }
  }
`
