import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import PageHead from '../components/Head'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

const SimplePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
          <br></br>
          <h2 className="has-text-weight-bold is-size-4-mobile is-size-3-tablet is-size-2-widescreen" style={{textAlign:'center'}}>{title}</h2>
            <div style={{marginBottom:'15px'}}>
              <PageContent className="content box" content={content} />
            </div>
          </div>
        </div>
      </div>
  )
}

SimplePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const SimplePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SimplePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

SimplePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SimplePage

export const simplePageQuery = graphql`
  query SimplePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
export const Head = ({ data }) => (
  <PageHead title={data.markdownRemark.frontmatter.title}/>
)
