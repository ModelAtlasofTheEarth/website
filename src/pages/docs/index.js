import { graphql, Link } from "gatsby"
import React from "react"

import PageHead from "../../components/Head"
import Layout from "../../components/Layout"

class DocsIndexPage extends React.Component {
  render() {
    const data = this.props.data.allMarkdownRemark
    const posts = data.edges.map((edge) => edge.node)
    console.log("posts:")
    console.log(posts)
    return (
      <Layout>
        <div className="container docs-page">
          <h1>Documentation Index</h1>
          <ul>
            {posts.map((post) => <DocsChapter
                                  chapter={post.frontmatter.chapter}
                                  title={post.frontmatter.title}
                                  headings={post.headings}
                                  target={post.fields.slug}
                                  number={false}/>)}
          </ul>
        </div>
      </Layout>
    )
  }
}

class DocsChapter extends React.Component {
  render() {
    const { title, chapter, headings, target, number } = this.props
    return (
      <>
        <li><Link to={target}>{chapter}. {title}</Link></li>
        {headings.length > 0 && processHeadings(headings, { chapter, target, number })}
      </>
    )
  }
}

const processHeadings = (headings, options = {}) => {
  const {
    chapter = 1,
    indent = 10,
    target = "",
    number = false,
  } = options
  const out = []
  const counters = {}
  let previous_depth = 1
  for (const heading of headings) {
    const current_depth = heading.depth
    if (!Object.keys(counters).includes(current_depth.toString())) {
      counters[current_depth] = 1
    }
    if (current_depth < previous_depth) {
      counters[current_depth]++
      counters[previous_depth] = 1
    } else if (current_depth > previous_depth) {
      counters[current_depth] = 1
    } else {
      counters[current_depth]++
    }
    let s = ""
    if (number) {
      const o = []
      o.push(`${chapter}.`)
      for (let i = 2; i < current_depth + 1; i++) {
        o.push(`${counters[i].toString()}.`)
      }
      s = `${o.join("")} `
    }
    out.push(
      <li style={{marginLeft: `${(current_depth - 1) * indent}px`}}>
        <Link to={`${target}#${heading.id}`}>
          {`${s}${heading.value}`}
        </Link>
      </li>
    )
    previous_depth = current_depth
  }
  return out
}

export const DocsIndexPageQuery = graphql`
  query DocsIndexPage {
    allMarkdownRemark(
      filter: {frontmatter: {templateKey: {eq: "docs"}}}
      sort: {frontmatter: {chapter: ASC}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            chapter
            title
          }
          headings {
            depth
            id
            value
          }
          html
          id
        }
      }
    }
  }
`

export default DocsIndexPage
export const Head = () => <PageHead title="Documentation"/>
