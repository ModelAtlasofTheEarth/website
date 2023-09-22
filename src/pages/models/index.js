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
        <h2 className="has-text-weight-bold is-size-2 gp-title">
          Available Models
        </h2>
        <ModelList posts={posts}/>
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
                title
                uploader {
                  name
                }
                tags
                templateKey
                date(formatString: "MMMM DD, YYYY")
                images {
                  landing_image {
                    alt
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
