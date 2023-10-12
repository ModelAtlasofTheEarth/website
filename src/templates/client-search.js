import React from "react"

import ClientSearch from "../components/ClientSearch"
import Layout from "../components/Layout"

const SearchTemplate = props => {
  const { pageContext } = props
  const { modelData } = pageContext
  const { allModels, options } = modelData

  return (
    <Layout>
      <div className="models-search">
        <h2>Model Search</h2>
        <ClientSearch
          models={allModels}
          engine={options}
        />
      </div>
    </Layout>
  )
}

export default SearchTemplate
