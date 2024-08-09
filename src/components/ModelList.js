import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { kebabCase } from "lodash"
import React, { useState, useEffect } from 'react'
import "./Carousel.css"

import {
  BadgeCreator,
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
            creator={post.frontmatter.submitter}
            date={post.frontmatter.date}
            tags={post.frontmatter.research_tags}
            compute_tags={post.frontmatter.compute_tags}
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
  post.frontmatter.submitter?.name &&
  post.frontmatter.date &&
  // post.frontmatter.tags &&
  post.frontmatter.images.landing_image
)

const ModelListItem = ({
  slug,
  title,
  creator,
  date,
  tags,
  compute_tags,
  software,
  landing_image,
}) => {
  const landing_gatsby_image = getImage(landing_image.src)
  const full_name = (
    creator.family_name
    ? creator.name + " " + creator.family_name
    : creator.name
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
            <BadgeCreator creator={creator}/>
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
            {tags && tags.length > 0 && (
              <>
                <p><TagsList tags={tags} style={{ backgroundColor: 'green', color: '#fff' }}/></p>
              </>
            )}
            {compute_tags && compute_tags.length > 0 && (
              <p><TagsList tags={compute_tags}/></p>
            )}
        </th>
      </tr>
    </table>
  )
}



const ModelCarouselItem = ({
  slug,
  title,
  creator,
  date,
  tags,
  software,
  landing_image,
}) => {
  const landing_gatsby_image = getImage(landing_image.src)
  const full_name = (
    creator.family_name
    ? creator.name + " " + creator.family_name
    : creator.name
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
            <BadgeCreator creator={creator}/>
            <p><Link to="#0">Uploaded:</Link> {date}</p>
            {
              software.name &&
              <p>
                <Link to="#0">Software:</Link>{" "}
                {software.name}
              </p>
            }
            <p><Link to="#0">Tags:</Link></p>
            <p><TagsList tags={tags} style={{ backgroundColor: 'green', color: '#fff' }}/></p>

          </div>
        </div>
      </div>
    </div>
  );
}

const personEqual = (person1, person2) => (
  getCreatorSlug(person1) === getCreatorSlug(person2)
)

const personSort = (person1, person2) => (
  person1.family_name.localeCompare(person2.family_name)
)

const getCreatorSlug = (creator) => {
  let orcid = creator.ORCID
  return kebabCase(orcid ?
                   cleanOrcid(orcid) :
                   `${creator.name} ${creator.family_name}`)
}

const cleanOrcid = (orcid) => {
  const orcid_split = orcid.toString().toLowerCase().split("/")
  if (orcid_split[orcid_split.length - 1] === "") {
    orcid_split.pop()
  }
  return orcid_split.pop()
}

const cleanDoi = (doi) => {
  const doi_split = doi.toString().toLowerCase().split("/")
  if (doi_split[doi_split.length - 1] === "") {
    doi_split.pop()
  }
  return doi_split.slice(doi_split.length - 2).join("/")
}

export default ModelList
export {
  ModelListItem,
  isValidModelListItem,
  ModelCarouselItem,
  personEqual,
  personSort,
  cleanDoi,
  cleanOrcid,
  getCreatorSlug,
}
