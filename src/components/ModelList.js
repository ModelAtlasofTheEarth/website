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
            author={post.frontmatter.uploader.name}
            date={post.frontmatter.date}
            tags={post.frontmatter.tags}
            software={post.frontmatter.software}
            landing_image={post.frontmatter.images.landing_image}
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
  return (
    <table className="models-entry hover-shadow">
      <tr className="models-entry">
        <th className="models-image">
          <Link to={slug}>
            <GatsbyImage
              image={landing_gatsby_image}
              alt={
                landing_image.alt ||
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
            <BadgeAuthor author={author}/>
          </p>
          <p><b>Uploaded:</b> {date}</p>
          {
            software &&
            <p>
              <b>Software:</b>{" "}
              {software}
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
