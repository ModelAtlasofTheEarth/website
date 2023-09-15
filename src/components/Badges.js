import React from "react"
import { Link } from "gatsby"
import { kebabCase } from "lodash"

const BadgeDoi = ({ doi }) => {
  return (
    <Link to={`https://doi.org/${doi}`}>
      <div>
        <span className="badge-doi-left">DOI</span>
        <span className="badge-doi-right">{doi}</span>
      </div>
    </Link>
  )
}

const BadgeTag = ({ tag }) => {
  return (
    <Link to={`/tags/${kebabCase(tag)}`}>
      <span className="badge-tag">{tag}</span>
    </Link>
  )
}

const TagsList = ({ tags }) => {
  return (
    tags.toSorted().map((tag) =>
      <BadgeTag tag={tag}/>
    )
  )
}

export { BadgeDoi, BadgeTag, TagsList }
