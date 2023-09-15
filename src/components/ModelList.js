import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { TagsList } from "./Badges"

const ModelList = ({ posts }) => (
  <div className="container models">
    {
      posts.map(({ node: post }) => (
        <ModelListItem
          slug={post.fields.slug}
          title={post.frontmatter.title}
          author={post.frontmatter.creator.name}
          date={post.frontmatter.date}
          tags={post.frontmatter.tags}
          landing_image={post.frontmatter.images.landing_image}
        />
      ))
    }
  </div>
)

const ModelListItem = ({
  slug,
  title,
  author,
  date,
  tags,
  landing_image,
}) => {
  const landing_gatsby_image = getImage(landing_image.src)
  return (
    <table className="models-entry">
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
          <p><b>Author:</b> {author}</p>
          <p><b>Uploaded:</b> {date}</p>
          <p><b>Tags:</b></p>
          <p><TagsList tags={tags}/></p>
        </th>
      </tr>
    </table>
  )
}

export default ModelList
export { ModelListItem }
