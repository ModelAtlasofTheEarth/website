import React from "react";
import {
  get,
  kebabCase,
  toLower,
  upperFirst,
  words,
} from "lodash";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import PageHead from "../../components/Head"

const TagsPage = ({
  data: {
    allMarkdownRemark: {edges},
    site: {
      siteMetadata: {title},
    },
  },
}) => {
  const tags = []
  const post_counts = {}
  for (const edge of edges) {
    const matter = edge.node?.frontmatter
    if (get(matter, "tags")) {
      for (const tag of matter.tags) {
        const tag_cleaned = words(tag, /\S+/g).map(i => (
          upperFirst(toLower(i))
        )).join(" ")
        if (get(post_counts, tag_cleaned)) {
          post_counts[tag_cleaned] = post_counts[tag_cleaned] + 1
        } else {
          post_counts[tag_cleaned] = 1
        }
        if (!tags.includes(tag_cleaned)) {
          tags.push(tag_cleaned)
        }
      }
    }
    if (get(matter, "compute_tags")) {
      for (const tag of matter.compute_tags) {
        const tag_cleaned = words(tag, /\S+/g).map(i => (
          upperFirst(toLower(i))
        )).join(" ")
        if (get(post_counts, tag_cleaned)) {
          post_counts[tag_cleaned] = post_counts[tag_cleaned] + 1
        } else {
          post_counts[tag_cleaned] = 1
        }
        if (!tags.includes(tag_cleaned)) {
          tags.push(tag_cleaned)
        }
      }
    }
    if (get(matter, "research_tags")) {
      for (const tag of matter.research_tags) {
        const tag_cleaned = words(tag, /\S+/g).map(i => (
          upperFirst(toLower(i))
        )).join(" ")
        if (get(post_counts, tag_cleaned)) {
          post_counts[tag_cleaned] = post_counts[tag_cleaned] + 1
        } else {
          post_counts[tag_cleaned] = 1
        }
        if (!tags.includes(tag_cleaned)) {
          tags.push(tag_cleaned)
        }
      }
    }
  }
  tags.sort()

  return (
    <Layout>
      <section className="section">
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: "6rem" }}
            >
              <h1 className="title is-size-2 is-bold-light">Tags</h1>
              <ul className="taglist">
                {tags.map((tag) => (
                  <li key={tag}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>
                      {tag} ({post_counts[tag]})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            compute_tags
            research_tags
            tags
          }
        }
      }
    }
  }
`;

export const Head = () => <PageHead title="Tags"/>
