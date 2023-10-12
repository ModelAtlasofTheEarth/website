import * as JsSearch from "js-search"
import React, { Component } from "react"
import * as _ from "lodash"

import ModelList from "./ModelList"

class ClientSearch extends Component {
  state = {
    isLoading: true,
    searchResults: [],
    search: null,
    isError: false,
    indexByTitle: false,
    indexByTags: false,
    indexByUploader: false,
    indexByAuthors: false,
    indexByAbstract: false,
    indexBySoftware: false,
    indexByContent: false,
    termFrequency: true,
    removeStopWords: false,
    searchQuery: "",
    selectedStrategy: "",
    selectedSanitizer: "",
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.search == null) {
      const { engine } = nextProps
      return {
        indexByTitle: engine.TitleIndex,
        indexByTags: engine.TagsIndex,
        indexByUploader: engine.UploaderIndex,
        indexByAuthors: engine.AuthorsIndex,
        indexByAbstract: engine.AbstractIndex,
        indexBySoftware: engine.SoftwareIndex,
        indexByContent: engine.ContentIndex,
        termFrequency: engine.SearchByTerm,
        selectedSanitizer: engine.searchSanitizer,
        selectedStrategy: engine.indexStrategy,
      }
    }
    return null
  }

  async componentDidMount() {
    this.rebuildIndex()
  }

  searchData = e => {
    const { search } = this.state
    const queryResult = search.search(e.target.value)
    this.setState({ searchQuery: e.target.value, searchResults: queryResult})
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  rebuildIndex = () => {
    const {
      indexByTitle,
      indexByTags,
      indexByUploader,
      indexByAuthors,
      indexByAbstract,
      indexBySoftware,
      indexByContent,
      termFrequency,
      removeStopWords,
      selectedStrategy,
      selectedSanitizer,
    } = this.state
    const { models } = this.props
    _.forEach(
      models,
      (model) => {
        model.author_names = model.frontmatter.authors.map((author) => author.name)
      }
    )

    const dataToSearch = new JsSearch.Search("id")
    if (removeStopWords) {
      dataToSearch.tokenizer = new JsSearch.StopWordsTokenizer(
        dataToSearch.tokenizer
      )
    }

    switch (selectedStrategy) {
      case "All":
        dataToSearch.indexStrategy = new JsSearch.AllSubstringsIndexStrategy()
        break
      case "Exact match":
        dataToSearch.indexStrategy = new JsSearch.ExactWordIndexStrategy()
        break
      case "Prefix match":
        dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
        break
      default:
    }

    selectedSanitizer === "Case Sensitive"
      ? (dataToSearch.sanitizer = new JsSearch.CaseSensitiveSanitizer())
      : (dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer())
    termFrequency === true
      ? (dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("isbn"))
      : (dataToSearch.searchIndex = new JsSearch.UnorderedSearchIndex())

    if (indexByTitle) {
      dataToSearch.addIndex(["frontmatter", "title"])
    }
    if (indexByTags) {
      dataToSearch.addIndex(["frontmatter", "tags"])
    }
    if (indexByUploader) {
      dataToSearch.addIndex(["frontmatter", "uploader", "name"])
    }
    if (indexByAuthors) {
      dataToSearch.addIndex("author_names")
    }
    if (indexByAbstract) {
      dataToSearch.addIndex(["frontmatter", "abstract"])
    }
    if (indexBySoftware) {
      dataToSearch.addIndex(["frontmatter", "software"])
    }
    if (indexByContent) {
      dataToSearch.addIndex(["internal", "content"])
    }

    dataToSearch.addDocuments(models)
    this.setState({ search: dataToSearch, isLoading: false })
  }

  render() {
    const { searchResults, searchQuery } = this.state
    const { models } = this.props
    const queryResults = searchQuery === "" ? models : searchResults

    return (
      <section className="container models-search">
        <form className="models-search" onSubmit={this.handleSubmit}>
            <label htmlFor="Search">
              Search title, authors, tags, and abstracts:{" "}
            </label>
            <div className="control models-search has-icons-left">
              <input
                id="Search"
                className="input models-search is-rounded is-normal"
                value={searchQuery}
                onChange={this.searchData}
                placeholder="Enter your search here"
                type="text"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-magnifying-glass"/>
              </span>
            </div>
        </form>

        <div>
          {queryResults.length}
          {" "} result{queryResults.length === 1 ? "" : "s"} found.
        </div>
        <ModelList posts={queryResults}/>
      </section>
    )
  }
}

export default ClientSearch
