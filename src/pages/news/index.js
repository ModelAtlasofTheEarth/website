import React from 'react'

import PageHead from '../../components/Head'
import Layout from '../../components/Layout'
import NewsList from '../../components/NewsList'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        
          <h1
            className="has-text-weight-bold is-size-2 gp-title">
            News
          </h1>
         
        <section className="section">
          <div className="container">
            <div className="content">
              <NewsList />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
export const Head = () => <PageHead title="News"/>
