import React from "react"
import { Link } from "gatsby"

import { getCreatorSlug, cleanDoi } from "./ModelList"

const BadgeCreator = ({ creator, style }) => {
  const fullName = `${creator.name} ${creator.family_name}`
  const creatorSlug = getCreatorSlug(creator)
  return (
    <Link to={`/creators/${creatorSlug}`}>
      <span className="badge-creator hover-shadow hover-opacity" style={style}>{fullName}</span>
    </Link>
  )
}

const BadgeDoi = ({ doi, style }) => {
  doi = cleanDoi(doi)
  return (
    <a href={`https://doi.org/${doi}`} target="_blank">
      <span className="hover-shadow hover-opacity">
        <span className="badge-doi-left" style={style}>DOI</span>
        <span className="badge-doi-right" style={style}>{doi}</span>
      </span>
    </a>
  )
}

const BadgeTag = ({ tag, style }) => {
  const slug = tag.toString().toLowerCase().split(/\s/).join("-")
  return (
    <Link to={`/tags/${slug}`}>
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
  BadgeCreator,
  BadgeDoi,
  BadgeTag,
  TagsList,
}
