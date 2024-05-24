import axios from "axios"
import { XMLParser } from "fast-xml-parser"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFolder,
  faFile,
} from "@fortawesome/free-solid-svg-icons"

class Catalog extends React.Component {
  state = {
    isLoading: true,
    data: null
  }

  componentDidMount() {
    const { url } = this.props
    const parseAsArray = [
      "catalog.dataset.catalogRef",
      "catalog.dataset.dataset"
    ]
    const parser = new XMLParser({
      allowBooleanAttributes: true,
      attributeNamePrefix: "@_",
      ignoreDeclaration: true,
      ignoreAttributes: false,
      isArray: (name, jpath, isLeafNode, isAttribute) => (
        parseAsArray.indexOf(jpath) !== -1
      )
    })
    axios.get(url + "/catalog.xml")
      .then((response) => {
        const data = parser.parse(response.data).catalog
        this.setState({
          isLoading: false,
          data: data
        })
      })
      .catch((error) => {
        console.log(`ERROR: Could not fetch catalog from ${url + "/catalog.xml"}`)
        console.log(error)
        this.setState({
          isLoading: false,
          data: null
        })
      })
  }

  render() {
    const {
      url,
      className = "catalog"
    } = this.props
    const { isLoading, data } = this.state
    if (isLoading) {
      return (
        <div className={className}>Loading...</div>
      )
    }
    if (!data) {
      return (
        <div className={className}>ERROR: Could not fetch NCI catalog.</div>
      )
    }
    const datasets = data.dataset?.catalogRef.concat(data.dataset?.dataset)
    return(
      <div className={className}>
        <ul>
          {
            datasets.map(i => <li>{renderItem(i, url)}</li>)
          }
        </ul>
      </div>
    )
  }
}

const renderItem = (data, url) => {
  const keys = Object.keys(data)
  if (keys.indexOf("@_xlink:href") !== -1) {
    return renderDirectory(data, url)
  }
  return renderFile(data, url)
}

const renderDirectory = (data, url) => {
  return <>
    <FontAwesomeIcon icon={faFolder} aria-hidden fixedWidth/>
    &nbsp;
    <a href={url + "/" + data["@_xlink:title"] + "/catalog.html"}>
      {data["@_xlink:title"] + "/"}
    </a>
  </>
}

const renderFile = (data, url) => {
  console.log(data)
  return <>
    <FontAwesomeIcon icon={faFile} aria-hidden fixedWidth/>
    &nbsp;
    <a href={url + "/catalog.html?dataset=" + data["@_ID"]}>
      {data["@_name"]}
    </a>
  </>
}

export default Catalog
