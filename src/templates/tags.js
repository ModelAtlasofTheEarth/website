import React from "react";
import { Link, graphql } from "gatsby";

import PageHead from "../components/Head"
import Layout from "../components/Layout";
import { ModelListItem, isValidModelListItem } from "../components/ModelList"

class TagRoute extends React.Component {
  render() {
    const tag = this.props.pageContext.tag
    const all_posts = this.props.data.allMarkdownRemark.edges
    const matches = all_posts.filter(post => (
      post.node.frontmatter.tags?.includes(tag) ||
      post.node.frontmatter.compute_tags?.includes(tag) ||
      post.node.frontmatter.research_tags?.includes(tag)
    ))

    const postLinks = matches.map((post) => {
      const post_tags = []
      if (post.node.frontmatter.tags) {
        for (const tag of post.node.frontmatter.tags) {
          if (!post_tags.includes(tag)) {
            post_tags.push(tag)
          }
        }
      }
      if (post.node.frontmatter.compute_tags) {
        for (const tag of post.node.frontmatter.compute_tags) {
          if (!post_tags.includes(tag)) {
            post_tags.push(tag)
          }
        }
      }
      if (post.node.frontmatter.research_tags) {
        for (const tag of post.node.frontmatter.research_tags) {
          if (!post_tags.includes(tag)) {
            post_tags.push(tag)
          }
        }
      }
      post_tags.sort()

      return (
        isValidModelListItem(post.node) ?
        (
          <ModelListItem
            key={post.node.fields.slug}
            slug={post.node.fields.slug}
            title={post.node.frontmatter.title}
            author={post.node.frontmatter.submitter}
            date={post.node.frontmatter.date}
            tags={post_tags}
            landing_image={post.node.frontmatter.images.landing_image}
            software={post.node.frontmatter.software}
          />
        ) :
        (
          <li key={post.node.fields.slug}>
            <Link to={post.node.fields.slug}>
              <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
            </Link>
          </li>
        )
      )
    })
    const totalCount = matches.length
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
export const Head = ({ pageContext }) => {
  const tag = pageContext.tag
  const title = tag.charAt(0).toUpperCase() + tag.slice(1)
  return <PageHead title={title}/>
}

export const tagPageQuery = graphql`
  query TagPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { templateKey: { eq: "model" } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            compute_tags
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
            }
            tags
            title
          }
        }
      }
    }
  }
`;
