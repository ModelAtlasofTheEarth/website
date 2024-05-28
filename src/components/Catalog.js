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
    const dateFormat = new Intl.DateTimeFormat(navigator.language)
    return(
      <div className={className}>
        <table>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Size</th>
            <th>Last Modified</th>
          </tr>
          {
            datasets.map(i => renderItem(i, url, dateFormat))
          }
        </table>
      </div>
    )
  }
}

const renderItem = (data, url, dateFormat) => {
  const keys = Object.keys(data)
  if (keys.indexOf("@_xlink:href") !== -1) {
    return renderDirectory(data, url)
  }
  return renderFile(data, url, dateFormat)
}

const renderDirectory = (data, url) => {
  return <tr>
    <td>
      <FontAwesomeIcon icon={faFolder} aria-hidden fixedWidth/>
      &nbsp; Directory
    </td>
    <td>
      <a target="_blank" href={url + "/" + data["@_xlink:title"] + "/catalog.html"}>
        {data["@_xlink:title"] + "/"}
      </a>
    </td>
    <td>--</td>
    <td>--</td>
  </tr>
}

const renderFile = (data, url, dateFormat) => {
  const dataSize = (
    data?.dataSize
    ? `${data.dataSize["#text"]} ${data.dataSize["@_units"]}`
    : "--"
  )
  if (!dateFormat) {
    dateFormat = new Intl.DateTimeFormat(navigator.language)
  }
  const date = (
    data?.date
    ? dateFormat.format(Date.parse(data.date["#text"]))
    : "--"
  )

  return <tr>
    <td>
      <FontAwesomeIcon icon={faFile} aria-hidden fixedWidth/>
      &nbsp; File
    </td>
    <td>
      <a target="_blank" href={url + "/catalog.html?dataset=" + data["@_ID"]}>
        {data["@_name"]}{" "}
      </a>
    </td>
    <td>{dataSize}</td>
    <td>{date}</td>
  </tr>
}

export default Catalog
