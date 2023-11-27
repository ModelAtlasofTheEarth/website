import React from "react"
import Layout from "../../components/Layout"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import PageHead from "../../components/Head"
import ModelList from "../../components/ModelList"

class ModelsPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <div className="models">
          <h2>Available Models</h2>
          <ModelList posts={posts}/>
        </div>
      </Layout>
    )
  }
}

ModelsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

const fn = () => (
  <StaticQuery
    query={graphql`
      query modelsQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { templateKey: { eq: "model" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
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
                software {
                  name
                }
                research_tags
                compute_tags
                templateKey
                title
                contributor {
                  family_name
                  name
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ModelsPage data={data} count={count} />}
  />
)

export default fn
export const Head = () => <PageHead title="Models"/>
