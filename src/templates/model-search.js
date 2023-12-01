import React from "react"

import PageHead from "../components/Head"
import Layout from "../components/Layout"
import ModelSearch from "../components/ModelSearch"

const SearchTemplate = props => {
  const { pageContext } = props
  const { modelData } = pageContext
  const { allModels, options } = modelData

  return (
    <Layout>
      <div className="models-search">
        <h2>Model Search</h2>
        <ModelSearch
          models={allModels}
          engine={options}
        />
      </div>
    </Layout>
  )
}

export default SearchTemplate
export const Head = () => <PageHead title="Model Search"/>
