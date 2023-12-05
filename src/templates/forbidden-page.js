import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PageHead from '../components/Head'


const FPage = ({ data }) => {
  //const { markdownRemark: post } = data

  return (
    <Layout>
      <div style={{textAlign: 'center'}}>
        <h1><strong style={{textAlign: 'center', color: "red", fontSize: '5em'}}>Nothing to see there!!!</strong></h1>
      </div>
    </Layout>
  )
}

FPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default FPage

export const fPageQuery = graphql`
  query FPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
export const Head = () => <PageHead title="Forbidden Page"/>
