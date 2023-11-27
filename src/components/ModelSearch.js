import * as JsSearch from "js-search"
import React, { Component } from "react"

import ModelList from "./ModelList"

class ModelSearch extends Component {
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
    for (const model of models) {
      model.author_names = model.frontmatter.authors.map((author) => (
        author.name + " " + author.family_name
      ))
      model.software_names = model.frontmatter.software.map(i => i.name)
    }

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
      ? (dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex(["fields", "slug"]))
      : (dataToSearch.searchIndex = new JsSearch.UnorderedSearchIndex())

    if (indexByTitle) {
      dataToSearch.addIndex(["frontmatter", "title"])
    }
    if (indexByTags) {
      dataToSearch.addIndex(["frontmatter", "tags"])
      dataToSearch.addIndex(["frontmatter", "compute_tags"])
      dataToSearch.addIndex(["frontmatter", "research_tags"])
    }
    if (indexByUploader) {
      dataToSearch.addIndex(["frontmatter", "contributor", "name"])
      dataToSearch.addIndex(["frontmatter", "contributor", "family_name"])
    }
    if (indexByAuthors) {
      dataToSearch.addIndex("author_names")
    }
    if (indexByAbstract) {
      dataToSearch.addIndex(["frontmatter", "abstract"])
    }
    if (indexBySoftware) {
      dataToSearch.addIndex("software_names")
    }
    if (indexByContent) {
      dataToSearch.addIndex(["internal", "content"])
    }

    dataToSearch.addDocuments(models)
    this.setState({ search: dataToSearch, isLoading: false })
  }

  handleCheckbox = (e) => {
    const key = e.target.id
    const {
      indexByTitle,
      indexByAuthors,
      indexByTags,
      indexByAbstract,
      indexByUploader,
      indexBySoftware,
    } = this.state
    const num_true = [
      indexByTitle,
      indexByAuthors,
      indexByTags,
      indexByAbstract,
      indexByUploader,
      indexBySoftware,
    ].reduce((a, b) => (a + b), 0)

    if (Object.keys(this.state).includes(key)) {
      const new_value = !this.state[key]
      if (new_value === false && num_true <= 1) {
        return
      }

      const new_state = {}
      new_state[key] = new_value

      this.setState(new_state, this.rebuildIndex)
    }
  }

  getSearchKeys = () => {
    const {
      indexByTitle,
      indexByAuthors,
      indexByTags,
      indexByAbstract,
      indexByUploader,
      indexBySoftware,
    } = this.state
    const arr = []
    if (indexByTitle) {arr.push("title")}
    if (indexByAuthors) {arr.push("authors")}
    if (indexByTags) {arr.push("tags")}
    if (indexByAbstract) {arr.push("abstract")}
    if (indexByUploader) {arr.push("uploader")}
    if (indexBySoftware) {arr.push("software")}

    let output = "Searching by "
    if (arr.length === 1) {output = output + arr[0]}
    if (arr.length === 2) {output = output + `${arr[0]} and ${arr[1]}`}
    if (arr.length > 2) {
      output = output + arr.slice(0, arr.length - 1).join(", ")
      output = output + `, and ${arr[arr.length - 1]}`
    }
    return output + ":"
  }

  render() {
    const { searchResults, searchQuery } = this.state
    const { models } = this.props
    const queryResults = searchQuery === "" ? models : searchResults

    return (
      <section className="container models-search">
        <form className="models-search" onSubmit={this.handleSubmit}>
            <label htmlFor="Search">
              Search fields:
            </label>
            <div className="models-search">
              <label
                className="checkbox models-search"
                for="indexByTitle"
              >
                <input
                  id="indexByTitle"
                  name="searchindex"
                  type="checkbox"
                  checked={this.state.indexByTitle}
                  onChange={this.handleCheckbox}
                />
                Title
              </label>
              <label
                className="checkbox models-search"
                for="indexByAuthors"
              >
                <input
                  id="indexByAuthors"
                  name="searchindex"
                  type="checkbox"
                  checked={this.state.indexByAuthors}
                  onChange={this.handleCheckbox}
                />
                Authors
              </label>
              <label
                className="checkbox models-search"
                for="indexByTags"
              >
                <input
                  id="indexByTags"
                  name="searchindex"
                  type="checkbox"
                  checked={this.state.indexByTags}
                  onChange={this.handleCheckbox}
                />
                Tags
              </label>
              <label
                className="checkbox models-search"
                for="indexByAbstract"
              >
                <input
                  id="indexByAbstract"
                  name="searchindex"
                  type="checkbox"
                  checked={this.state.indexByAbstract}
                  onChange={this.handleCheckbox}
                />
                Abstract
              </label>
              <label
                className="checkbox models-search"
                for="indexByUploader"
              >
                <input
                  id="indexByUploader"
                  name="searchindex"
                  type="checkbox"
                  checked={this.state.indexByUploader}
                  onChange={this.handleCheckbox}
                />
                Uploader
              </label>
              <label
                className="checkbox models-search"
                for="indexBySoftware"
              >
                <input
                  id="indexBySoftware"
                  name="searchindex"
                  type="checkbox"
                  checked={this.state.indexBySoftware}
                  onChange={this.handleCheckbox}
                />
                Software
              </label>
            </div>
            <div className="control models-search has-icons-left">
              <input
                id="Search"
                className="input models-search is-rounded is-normal"
                value={searchQuery}
                onChange={this.searchData}
                placeholder={this.getSearchKeys()}
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

export default ModelSearch
