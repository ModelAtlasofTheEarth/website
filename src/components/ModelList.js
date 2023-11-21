import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

import {
  BadgeAuthor,
//   BadgeTag,
  TagsList,
} from "./Badges"

const ModelList = ({ posts }) => {
  let posts_list = []
  for (const post of posts) {
    posts_list = posts_list.concat(
      post?.node
      ? post.node
      : post
    )
  }
  return (
    <section className="container models">
      {
        posts_list.map((post) => (
          <ModelListItem
            slug={post.fields.slug}
            title={post.frontmatter.title}
            author={post.frontmatter.contributor}
            date={post.frontmatter.date}
            tags={post.frontmatter.research_tags.concat(post.frontmatter.compute_tags)}
            software={post.frontmatter.software}
            landing_image={post.frontmatter.images.landing_image}
            key={post.fields.slug}
          />
        ))
      }
    </section>
  )
}

const isValidModelListItem = (post) => (
  post.fields.slug &&
  post.frontmatter.title &&
  post.frontmatter.uploader?.name &&
  post.frontmatter.date &&
  post.frontmatter.tags &&
  post.frontmatter.images.landing_image
)

const ModelListItem = ({
  slug,
  title,
  author,
  date,
  tags,
  software,
  landing_image,
}) => {
  const landing_gatsby_image = getImage(landing_image.src)
  const full_name = (
    author.family_name
    ? author.name + " " + author.family_name
    : author.name
  )

  return (
    <table className="models-entry hover-shadow">
      <tr className="models-entry">
        <th className="models-image">
          <Link to={slug}>
            <GatsbyImage
              image={landing_gatsby_image}
              alt={
                landing_image.caption ||
                title
              }
            />
          </Link>
        </th>
        <th className="models-text">
          <Link className="models-text" to={slug}>
            <h3>{title}</h3>
          </Link>
          <p>
            <b>Uploaded by:</b>{" "}
            <BadgeAuthor author={full_name}/>
          </p>
          <p><b>Uploaded:</b> {date}</p>
          {
            software.name &&
            <p>
              <b>Software:</b>{" "}
              {software.name}
            </p>
          }
          <p><b>Tags:</b></p>
          <p><TagsList tags={tags}/></p>
        </th>
      </tr>
    </table>
  )
}

export default ModelList
export { ModelListItem, isValidModelListItem }
