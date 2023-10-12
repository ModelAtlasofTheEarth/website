import React from "react"
import { Link } from "gatsby"
import { kebabCase } from "lodash"

const BadgeAuthor = ({ author, style }) => {
  return (
    <Link to={`/authors/${kebabCase(author)}`}>
      <span className="badge-author hover-shadow hover-opacity" style={style}>{author}</span>
    </Link>
  )
}

const BadgeDoi = ({ doi, style }) => {
  return (
    <Link to={`https://doi.org/${doi}`}>
      <span className="hover-shadow hover-opacity">
        <span className="badge-doi-left" style={style}>DOI</span>
        <span className="badge-doi-right" style={style}>{doi}</span>
      </span>
    </Link>
  )
}

const BadgeTag = ({ tag, style }) => {
  return (
    <Link to={`/tags/${kebabCase(tag)}`}>
      <span className="badge-tag hover-shadow hover-opacity" style={style}>{tag}</span>
    </Link>
  )
}

const TagsList = ({ tags, style }) => {
  const tags_sorted = [...tags].sort()
  return (
    tags_sorted.map((tag) =>
      <BadgeTag tag={tag} style={style}/>
    )
  )
}

export {
  BadgeAuthor,
  BadgeDoi,
  BadgeTag,
  TagsList,
}
