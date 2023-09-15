import React from "react"
import { Link, graphql } from "gatsby"
import PageHead from "../components/Head"
import Layout from "../components/Layout"
import ModelList from "../components/ModelList"

class AuthorRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    // const postLinks = posts.map((post) => (
    //   <li key={post.node.fields.slug}>
    //     <Link to={post.node.fields.slug}>
    //       <h2 className="is-size-8">{post.node.frontmatter.title}</h2>
    //     </Link>
    //   </li>
    // ))
    const name = this.props.pageContext.author
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const authorHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with “${name}”`

    return (
      <Layout>
        <section className="section">
          <div className="container content">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: "6rem" }}
            >
              <h3 className="title is-size-4 is-bold-light">{authorHeader}</h3>
              {/* <ul className="authorlist">{postLinks}</ul> */}
              <ModelList posts={posts}/>
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
  query AuthorPage($author: String) {
    allMarkdownRemark(
      limit: 10
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {creator: {name: {eq: $author}}}}
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            creator {
              name
            }
            images {
              landing_image {
                src {
                  childImageSharp {
                    gatsbyImageData(
                      quality: 100
                      layout: CONSTRAINED
                    )
                  }
                }
                alt
              }
            }
            tags
          }
        }
      }
    }
  }
`
