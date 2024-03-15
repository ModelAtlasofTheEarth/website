import { graphql } from "gatsby"
import { kebabCase } from "lodash"
import PropTypes from "prop-types"
import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

import Animation from "../components/Animation"
import {
  BadgeAuthor,
  BadgeDoi,
  TagsList,
} from "../components/Badges"
import Citation from "../components/Citation"
import Content, { HTMLContent } from "../components/Content"
import PageHead from "../components/Head"
import Layout from "../components/Layout"
import { getAuthorSlug } from "../components/ModelList"
import PreviewCompatibleImage from "../components/PreviewCompatibleImage"
import ReadMore from "../components/ReadMore"

import Markdown from "react-markdown"
import remarkMath from "remark-math"
import rehypeMathjax from "rehype-mathjax/svg"

const ModelTemplate = ({
  abstract,
  animations,
  authors,
  compute_tags,
  content,
  contentComponent,
  contributor,
  dataset,
  date,
  doi,
  graphic_abstract,
  landing_image,
  licence,
  model_files,
  model_setup,
  model_setup_info,
  publication,
  research_tags,
  title,
  slug,
}) => {
  const PostContent = contentComponent || Content
  const dataset_url = (
    (!dataset.url && dataset.doi)
    ? "https://doi.org/" + dataset.doi
    : dataset.url
  )
  const all_tags = research_tags.concat(compute_tags)
  const contributor_full_name = contributor.name + " " + contributor.family_name
  const author_full_names = authors.map((author) => (
    author.name + " " + author.family_name
  ))
  const animations_found = (
    animations &&
    animations.length > 0 &&
    animations[0].src?.publicURL
  )
  let licence_content = null
  if (licence.licence_file?.fields?.content) {
    licence_content = licence.licence_file.fields.content
    licence_content = licence_content.split("\n\n").map(p => (
      <p>{p}</p>
    ))
  }

  return (
    <section className="section">
      <div className="container content model-page">
        <div className="model-page-header">
          <h1>
            {title}
          </h1>
          {
            animations_found &&
            <Animation
              src={animations[0].src.publicURL}
              alt={animations[0].caption || "Animation | " + title}
            />
          }
          {
            (!animations_found) &&
            <div className="animation-container">
              <PreviewCompatibleImage
                imageInfo={{
                  image: landing_image.src,
                  alt: landing_image.caption || title,
                }}
              />
            </div>
          }
          <p className="model-page-header">
            <b>Authors:</b>{" "}
            {
              authors.map((author) => {
                const authorSlug = getAuthorSlug(author)
                return (
                  <BadgeAuthor
                    author={author}
                    style={{ fontSize: "20px" }}
                    key={authorSlug}
                  />
                )
              })
            }
          </p>
          <p className="model-page-header">
            <b>Uploaded by:</b>{" "}{contributor_full_name}
          </p>
          <p className="model-page-header">
            <b>Upload date:</b>{" "}{date}
          </p>
          <p>
            <BadgeDoi
              doi={
                doi || "Pending"
              }
              style={{
                marginBottom: "10px",
                fontSize: "0.9em"
              }}
            />
          </p>
        </div>

        <Tabs className="model-page">
          <TabList>
            <Tab key="overview">Overview</Tab>
            <Tab key="model-setup">
              Model setup
            </Tab>
            <Tab key="model-files">
              Model code
            </Tab>
            <Tab key="model-outputs">
              Output data
            </Tab>
          </TabList>

          <TabPanel key="overview">
            <section id="abstract" className="model-page">
              <h2>Abstract</h2>
              <p>{abstract}</p>
            </section>

            {
              publication.html &&
              <section id="publication" className="model-page">
                <h2>Publication</h2>
                {
                  publication.doi &&
                  <BadgeDoi
                    doi={publication.doi}
                    style={{marginBottom: "10px"}}
                  />
                }
                <Citation html={publication.html}/>
              </section>
            }

            <section id="tags" className="model-page">
              <h2>Tags</h2>
              <p><TagsList tags={all_tags}/></p>
            </section>

            {graphic_abstract &&
              <section id="graphic-abstract" className="model-page">
                <h2>Graphic abstract</h2>
                <PreviewCompatibleImage
                  imageInfo={{
                  image: graphic_abstract.src,
                  alt: (
                    graphic_abstract.caption ||
                    "Graphic abstract | " + title
                  ),
                  }}
                />
                {
                  graphic_abstract.caption &&
                  <p>{graphic_abstract.caption}</p>
                }
              </section>
            }

            <section id="licence" className="model-page">
              <h2>Licence</h2>
              <a href={licence.licence_url}>
              <PreviewCompatibleImage
                imageInfo={{
                  image: licence.licence_image,
                  alt: licence.description || licence.name
                }}
                style={{ maxWidth: "100px" }}
              />
              </a>
              <p>
                <a href={licence.licence_url}>{licence.name}</a>
                {
                  licence.description &&
                  `: ${licence.description}`
                }
              </p>
              {
                licence_content &&
                <ReadMore
                  openHeader="Hide licence"
                  closedHeader="Show licence"
                >
                  <div className="licence-content">{licence_content}</div>
                </ReadMore>
              }
            </section>
          </TabPanel>
          <TabPanel key="model-setup">
            {
              model_setup?.src &&
              <div>
                <h2>Model setup</h2>
                <PreviewCompatibleImage
                  imageInfo={{
                    image: model_setup.src,
                    alt: (
                      model_setup.caption ||
                      "Model setup | " + title
                    ),
                  }}
                />
                {
                  model_setup.caption &&
                  <p>{model_setup.caption}</p>
                }
              </div>

            }
            {
              model_setup_info?.summary &&
              <div>
                <h3>Notes on model setup</h3>
                <p>
                  <Markdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[[rehypeMathjax, { svg: { scale: 1.0 } }]]}
                  >
                    {model_setup_info.summary}
                  </Markdown>
                </p>
              </div>
            }
          </TabPanel>
          <TabPanel key="model-files">

         <h2>Model code</h2>
         <p>
         Model code will be added to the <strong>{slug}</strong> model, hosted as part of the M@TE collection on  <a href="https://geonetwork.nci.org.au"> NCI GeoNetwork</a>  (from early 2024)
         </p>
            {
              model_files?.url &&
              <p>
                A preliminary version of the model code can be downloaded accessed <a href={model_files.url}> here</a>
              </p>
            }

            {/*
            {
              model_files?.notes &&
              <div>
                <h3>Notes on model files</h3>
                <p>{model_files.notes}</p>
              </div>
            }
          */}

          </TabPanel>
          <TabPanel key="model-outputs">
            <h2>Dataset access</h2>
            <p>
              Output data will be added to the <strong>{slug}</strong> model, hosted as part of the M@TE collection on  <a href="https://geonetwork.nci.org.au"> NCI GeoNetwork</a>  (from early 2024)
            </p>

            {
              dataset?.url &&
              <p>
                A preliminary version of the model output data can be accessed <a href={dataset.url}> here</a>
              </p>
            }

            {/*
            {
              dataset?.doi &&
              <p>
              The output dataset for this model
              can be downloaded here:{" "}
              <a href={dataset_url}>{dataset_url}</a>
              </p>
            }





            {
              dataset.doi &&
              <p>
                <BadgeDoi doi={dataset.doi}/>
              </p>
            }
            <p>
              The output dataset for this model
              can be downloaded here:{" "}
              <a href={dataset_url}>{dataset_url}</a>
            </p>
             */}
            {
              dataset.notes &&
              (
                <p>
                  <h3>Notes</h3>
                  <p>{dataset.notes}</p>
                </p>
              )
            }
            {/*
            {
              animations_found &&
              <>
                <h3 style={{paddingBottom: "30px"}}>Animations</h3>
                {
                  animations.map((animation, i) => (
                    <p>
                      <Animation
                        src={animation.src.publicURL}
                        alt={animation.caption || "Animation | " + title}
                        key={i}
                        controls
                      />
                      {
                        animation.caption &&
                        <p>{animation.caption}</p>
                      }
                    </p>
                  ))
                }
              </>
            }
            */}
          </TabPanel>
        </Tabs>

      </div>
      <PostContent
        content={content}
        className="container content model-page"
      />
    </section>
  )
}

ModelTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  date: PropTypes.string,
  abstract: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  uploader: PropTypes.string,
  email: PropTypes.string,
  dataset: PropTypes.objectOf(PropTypes.string),
  animations: PropTypes.arrayOf(PropTypes.object),
  input_files: PropTypes.objectOf(PropTypes.string),
  postprocessing_files: PropTypes.objectOf(PropTypes.string),
}

const ModelsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ModelTemplate
        abstract={post.frontmatter.abstract}
        animations={post.frontmatter.animations}
        authors={post.frontmatter.authors}
        compute_tags={post.frontmatter.compute_tags}
        content={post.html}
        contentComponent={HTMLContent}
        contributor={post.frontmatter.contributor}
        dataset={post.frontmatter.dataset}
        date={post.frontmatter.date}
        doi={post.frontmatter.doi}
        graphic_abstract={post.frontmatter.images.graphic_abstract}
        landing_image={post.frontmatter.images.landing_image}
        licence={post.frontmatter.licence}
        model_files={post.frontmatter.model_files}
        model_setup_info={post.frontmatter.model_setup_info}
        model_setup={post.frontmatter.images.model_setup}
        publication={post.childCitation}
        research_tags={post.frontmatter.research_tags}
        title={post.frontmatter.title}
        slug={post.frontmatter.slug}
      />
    </Layout>
  )
}

export default ModelsPage
export const Head = ({ data }) => (
  <PageHead title={data.markdownRemark.frontmatter.title}/>
)

export const pageQuery = graphql`
  query ModelByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      childCitation {
        html
        doi
      }
      frontmatter {
        abstract
        slug
        animations {
          caption
          src {
            publicURL
          }
        }
        authors {
          name
          family_name
          affiliation
          ORCID
        }
        compute_info {
          computer_name
          organisation
          url
        }
        compute_tags
        contributor {
          name
          family_name
          affiliation
        }
        dataset {
          url
          doi
          notes
        }
        date(formatString: "MMMM DD, YYYY")
        doi
        for_codes
        grants_funders {
          funder_name
          number_id
        }
        images {
          graphic_abstract {
            caption
            src {
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                  layout: CONSTRAINED
                )
              }
            }
          }
          landing_image {
            caption
            src {
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                  layout: CONSTRAINED
                )
              }
            }
          }
          model_setup {
            caption
            src {
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
        licence {
          description
          licence_file {
            fields {
              content
            }
          }
          licence_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          licence_url
          name
        }
        model_files {
          url
          notes
        }
        model_setup_info {
          url
          summary
        }
        research_tags
        software {
          name
          doi
          url_source
        }
        title
      }
    }
  }
`;
