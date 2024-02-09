import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { kebabCase } from "lodash"
import React, { useState, useEffect } from 'react'
import "./Carousel.css"

import {
  BadgeAuthor,
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
        posts_list.map((post) => {
          const research_tags = (post.frontmatter?.research_tags || post.research_tags)
          const compute_tags = (post.frontmatter?.compute_tags || post.compute_tags)
          const tags = research_tags.concat(compute_tags)
          return (
            <ModelListItem
              slug={post.fields?.slug || post.slug}
              title={post.frontmatter?.title || post.title}
              author={post.frontmatter?.contributor || post.contributor}
              date={post.frontmatter?.date || post.date}
              tags={tags}
              software={post.frontmatter?.software || post.software}
              landing_image={post.frontmatter?.images.landing_image || post.images.landing_image}
              key={post.fields?.slug || post.slug}
            />
          )
        })
      }
    </section>
  )
}

const isValidModelListItem = (post) => (
  post.fields.slug &&
  post.frontmatter.title &&
  post.frontmatter.contributor?.name &&
  post.frontmatter.date &&
  // post.frontmatter.tags &&
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
            <BadgeAuthor author={author}/>
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



const ModelCarouselItem = ({
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
    <div className="grid">
      <div className="item">
        <Link to={slug} aria-labelledby="carouselimage">
          <div className="carousel-image">
            <GatsbyImage
              image={landing_gatsby_image}
              alt={landing_image.caption || title}
            />
          </div>
        </Link>
        <div className="item__overlay">
          <h10 id="carouselimage" ariaHidden="true">
            <Link id="modeltitle" className="carousel-text" to={slug}>
              <h3>{title}</h3>
            </Link>
          </h10>
          <div className="item__body">
            <Link to="#0">Uploaded by:</Link>{" "}
            <BadgeAuthor author={author}/>
            <p><Link to="#0">Uploaded:</Link> {date}</p>
            {
              software.name &&
              <p>
                <Link to="#0">Software:</Link>{" "}
                {software.name}
              </p>
            }
            <p><Link to="#0">Tags:</Link></p>
            <p><TagsList tags={tags}/></p>
          </div>
        </div>
      </div>
    </div>
  );  
}

const authorEqual = (author1, author2) => {
  const useOrcid = author1.ORCID && author2.ORCID
  if (useOrcid) {
    return author1.ORCID == author2.ORCID
  }
  const name1 = `${author1.name} ${author1.full_name}`
  const name2 = `${author2.name} ${author2.full_name}`
  return name1 == name2
}

const authorSort = (author1, author2) => (
  author1.family_name.localeCompare(author2.family_name)
)

const getAuthorSlug = (author) => (
  kebabCase(
    author.ORCID ?
    author.ORCID :
    `${author.name} ${author.family_name}`
  )
)

export default ModelList
export {
  ModelListItem,
  isValidModelListItem,
  ModelCarouselItem,
  authorEqual,
  authorSort,
  getAuthorSlug,
}
