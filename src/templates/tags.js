import React from "react";
import { Link, graphql } from "gatsby";
import PageHead from "../components/Head"
import Layout from "../components/Layout";
import { ModelListItem, isValidModelListItem } from "../components/ModelList"

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map((post) => (
        isValidModelListItem(post.node) ?
        (
          <ModelListItem
            key={post.node.fields.slug}
            slug={post.node.fields.slug}
            title={post.node.frontmatter.title}
            author={post.node.frontmatter.uploader.name}
            date={post.node.frontmatter.date}
            tags={post.node.frontmatter.tags}
            landing_image={post.node.frontmatter.images.landing_image}
          />
        ) :
        (
          <li key={post.node.fields.slug}>
          <Link to={post.node.fields.slug}>
            <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
          </Link>
          </li>
        )
    ))
    const tag = this.props.pageContext.tag;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with “${tag}”`;

    return (
      <Layout>
        <section className="section">
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: "6rem" }}
              >
                <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
                <ul className="taglist">{postLinks}</ul>
                <p>
                  <Link to="/tags/">Browse all tags</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default TagRoute;
export const Head = ({ pageContext }) => <PageHead title={pageContext.tag}/>

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            uploader {
              name
            }
            date(formatString: "MMMM DD, YYYY")
            tags
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
`;
