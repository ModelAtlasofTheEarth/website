import React from "react"

import ModelSearch from "../components/ModelSearch"
import Layout from "../components/Layout"

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
