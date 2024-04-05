import { Link, graphql } from "gatsby"
import { get, kebabCase } from "lodash"
import React from "react"

import PageHead from "../../components/Head"
import Layout from "../../components/Layout"
import {
  personEqual,
  personSort,
  getCreatorSlug,
} from "../../components/ModelList"

export const Head = () => <PageHead title="Creators"/>

class CreatorsPage extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges

    const creators = []
    const post_counts = {}
    for (const post of posts) {
      for (const creator of post.node.frontmatter.creators) {
        const full_name = `${creator.name} ${creator.family_name}`
        let post_count = 1
        if (get(post_counts, full_name)) {
          post_count = post_count + post_counts[full_name]
        }
        post_counts[full_name] = post_count

        const creator_obj = {
          full_name: full_name,
          name: creator.name,
          family_name: creator.family_name,
          ORCID: creator.ORCID,
        }
        let exists = false
        for (const i of creators) {
          if (personEqual(creator, i)) {
            exists = true
            break
          }
        }
        if (!exists) {
          creators.push(creator_obj)
        }
      }
    }
    creators.sort(personSort)

    return (
      <Layout>
        <section className="section">
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: "6rem" }}
              >
                <h1 className="title is-size-2 is-bold-light">Creators</h1>
                <ul className="creatorlist">
                  {
                    creators.map((creator) => {
                      const creatorSlug = getCreatorSlug(creator)
                      return (
                        <li key={creatorSlug}>
                          <Link to={`/creators/${creatorSlug}`}>
                            {creator.family_name}, {creator.name} ({post_counts[creator.full_name]})
                          </Link>
                        </li>
                      )
                    })
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

export default CreatorsPage

export const creatorsPageQuery = graphql`
  query CreatorsQuery {
    allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {creators: {elemMatch: {name: {ne: null}}}}}
    ) {
      edges {
        node {
          frontmatter {
            creators {
              name
              family_name
              ORCID
            }
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
