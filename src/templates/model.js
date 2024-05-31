import Cite from "citation-js"
import "@citation-js/plugin-csl"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import '../styles/customStyles.css'; // Adjust the path as needed
import Animation from "../components/Animation"
import {
  BadgeCreator,
  BadgeDoi,
  TagsList,
} from "../components/Badges"
import Citation, {
  cleanDOI,
  toCSL,
  replaceDois,
} from "../components/Citation"
import Content, { HTMLContent } from "../components/Content"
import PageHead from "../components/Head"
import Layout from "../components/Layout"
import { getCreatorSlug, cleanDoi } from "../components/ModelList"
import PreviewCompatibleImage from "../components/PreviewCompatibleImage"
import ReadMore from "../components/ReadMore"

import Markdown from "react-markdown"
import remarkMath from "remark-math"
import rehypeMathjax from "rehype-mathjax/svg"


const ModelTemplate = ({
  abstract,
  animation,
  compute_info,
  compute_tags,
  content,
  contentComponent,
  creators,
  creditText,
  dataset,
  date,
  doi,
  graphic_abstract,
  landing_image,
  licence,
  metadataFile,
  model_files,
  model_setup,
  model_setup_info,
  publication,
  research_tags,
  title,
  slug,
  description,
  submitter,
  software,
}) => {
  const PostContent = contentComponent || Content
  const dataset_url = (
    (!dataset.url && doi)
    ? "https://doi.org/" + cleanDoi(doi)
    : dataset.url
  )
  const all_tags = (research_tags || []).concat(compute_tags || []);
  const submitter_full_name = submitter.name + " " + submitter.family_name
  const creator_full_names = creators.map((creator) => (
    creator.name + " " + creator.family_name
  ))
  let licence_content = null
  if (licence.licence_file?.fields?.content) {
    licence_content = licence.licence_file.fields.content
    licence_content = licence_content.split("\n\n").map(p => (
      <p>{p}</p>
    ))
  }

  let citation = (
    publication &&
    new Cite(toCSL(publication)).format("bibliography",
                                        {format: "html", style: "apa"})
  )

  return (
    <section className="section">
      <div className="container content model-page">
        <div className="model-page-header">
          <h1>
            {title}
          </h1>
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
          <p className="model-page-header">
            <b>Created by:</b>{" "}
            {
              creators.map((creator) => {
                const creatorSlug = getCreatorSlug(creator)
                return (
                  <BadgeCreator
                    creator={creator}
                    style={{ fontSize: "20px" }}
                    key={creatorSlug}
                  />
                )
              })
            }
          </p>
        </div>

        <Tabs className="model-page">
          <TabList>
            <Tab key="snapshot">Snapshot</Tab>
            <Tab key="overview">Science overview</Tab>
            <Tab key="model-setup">Software and setup</Tab>
            <Tab key="model-files">Code & data availability</Tab>
            <Tab key="metadata">Metadata</Tab>
          </TabList>


          <TabPanel key="snapshot">
            <section id="snapshot" className="model-page">


              <h2>Plain language summary</h2>
              <section id="description" className="model-page">
                <p>{description}</p>
              </section>
            </section>

            {/* Adding a horizontal line and extra spacing */}
            <hr style={{ margin: '20px 0' }} />

            {
              animation?.src?.publicURL &&
              <Animation
                src={animation.src.publicURL}
                alt={animation.caption || "Animation | " + title}
              />
            }
            {
              (!(animation?.src?.publicURL)) &&
              <div className="animation-container">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: landing_image.src,
                    alt: landing_image.caption || title,
                  }}
                />
              </div>
            }
            {
            animation.caption &&
            <p className="cool-caption">
              <Markdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[[rehypeMathjax, { svg: { scale: 1.0 } }]]}
              >
                {animation.caption}
              </Markdown>
            </p>
            }

            <p>
              Model submitted by <b>{submitter_full_name}</b> on <b>{date}</b>.
            </p>

          </TabPanel>

          <TabPanel key="overview">

          {research_tags && research_tags.length > 0 && (
            <>
              <h2>Tags</h2>
              <p><TagsList tags={research_tags} style={{ backgroundColor: 'green', color: '#fff' }}/></p>
            </>
          )}

            {
              citation &&
              <section id="publication" className="model-page">
                <h2>Associated publication</h2>
                {
                  publication.doi &&
                  <BadgeDoi
                    doi={publication.doi}
                    style={{marginBottom: "10px"}}
                  />
                }
                <Citation html={citation}/>
              </section>
            }

            <section id="abstract" className="model-page">
              <h2>Abstract</h2>
              <p>{abstract}</p>
            </section>

            {graphic_abstract.src &&
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
                  <p className="cool-caption">
                    <Markdown
                      remarkPlugins={[remarkMath]}
                      rehypePlugins={[[rehypeMathjax, { svg: { scale: 1.0 } }]]}
                    >
                      {graphic_abstract.caption}
                    </Markdown>
                  </p>
                }


              </section>
            }
            <p>
              Model submitted by <b>{submitter_full_name}</b> on <b>{date}</b>.
            </p>

          </TabPanel>



          <TabPanel key="model-setup">

          {compute_tags && compute_tags.length > 0 && (
            <>
              <h2>Tags</h2>
              <p><TagsList tags={compute_tags}/></p>
            </>
          )}

            {
              software.doi  &&
              <section id="publication" className="model-page">
              <h2>Software framework</h2>
              <p>This model was developed with <b>{software.name}</b></p>
              <p>PID for this release:
                {
                  <BadgeDoi
                    doi={software.doi}
                    style={{marginBottom: "10px"}}
                  />
                }
              </p>
                {software.url_source && (
          <p>
            Source code is hosted at{' '}
            <a href={software.url_source} target="_blank" rel="noopener noreferrer">
              <b>{software.url_source}</b>
            </a>
          </p>
        )}

        {
              compute_info.name  &&
              <section id="publication" className="model-page">
              <h2>Computation</h2>
              <p>Computation was performed on: <b>{compute_info.name}</b></p>
              {compute_info.doi && (


              <p>PID for this resource:
                {
                  <BadgeDoi
                    doi={compute_info.doi}
                    style={{marginBottom: "10px"}}
                  />
                }
              </p>
                     )}

              </section>
            }

              </section>
            }


            {
              model_setup?.src &&
              <>
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
                <p className="cool-caption">
                  <Markdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[[rehypeMathjax, { svg: { scale: 1.0 } }]]}
                  >
                  {model_setup_info.summary && typeof model_setup_info.summary === 'string'
                  ? `${model_setup.caption} ${model_setup_info.summary}`
                  : model_setup.caption}
                  </Markdown>
                </p>
                }


              </>

            }

          </TabPanel>





          <TabPanel key="model-files">

            <h2>Code and data availability</h2>


            <p>
              Model code and model output data are available as part of the
              <a href={'http://dx.doi.org/10.25914/yrzp-g882'} style={{ fontWeight: 'bold', color: '#007acc', backgroundColor: '#f0f8ff', padding: '5px 10px', borderRadius: '5px', textDecoration: 'none' }}>M@TE collection on NCI</a>

            </p>

            {
              model_files?.nci_file_path &&
              <p>
                Model code and model output data are publically available through{" "}
                <a href={model_files?.nci_file_path} style={{ fontWeight: 'bold', color: '#007acc', backgroundColor: '#f0f8ff', padding: '5px 10px', borderRadius: '5px', textDecoration: 'none' }}>this Thredds Server Link</a>
              </p>
            }


            <p>
            The catalogue record for this model can be accessed through the Model DOI near the top of the page.
            </p>


            <h2>Notes</h2>

            {
              model_files?.notes &&
              <>
                <h3>Model code & inputs: </h3>
                <p className="cool-caption">
                  <Markdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[[rehypeMathjax, { svg: { scale: 1.0 } }]]}
                  >
                    {model_files.notes}
                  </Markdown>
                </p>
              </>
            }

            {/* Adding a horizontal line and extra spacing */}
            <hr style={{ margin: '20px 0' }} />

            {
              dataset?.notes &&
              <>
              <h3>Model output data: </h3>
              <p className="cool-caption">
                <Markdown
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[[rehypeMathjax, { svg: { scale: 1.0 } }]]}
                >
                  {dataset.notes}
                </Markdown>
              </p>
              </>
            }



            {
            (model_files?.existing_identifier || dataset?.existing_identifier) && (
              <h2>Existing records</h2>
            )
            }


            {
              model_files?.existing_identifier &&
              <p>
                An existing version of the model code & inputs can be accessed{" "}
                <a href={model_files.existing_identifier} style={{ fontWeight: 'bold', color: '#007acc', backgroundColor: '#f0f8ff', padding: '5px 10px', borderRadius: '5px', textDecoration: 'none' }}>via this link</a>
              </p>
            }

            {
              dataset?.existing_identifier &&
              <p>
                An existing version of the model output data can be accessed{" "}
                <a href={dataset.existing_identifier} style={{ fontWeight: 'bold', color: '#007acc', backgroundColor: '#f0f8ff', padding: '5px 10px', borderRadius: '5px', textDecoration: 'none' }}>via this link</a>
              </p>
            }




          </TabPanel>

  <TabPanel key="metadata">


            {
              metadataFile?.publicURL &&
              <section id="metadata" className="model-page">
                <h2>Model metadata</h2>
                <p>
                  Download{" "}
                  <a href={metadataFile?.publicURL} download>
                    model metadata file
                  </a>
                  {" "}in{" "}
                  <a href="https://www.researchobject.org/ro-crate/">
                    RO-Crate format
                  </a>.
                </p>
                {
                  metadataFile?.fields?.content &&
                  <ReadMore
                    openHeader="Hide metadata"
                    closedHeader="Show metadata"
                  >
                    <div className="read-more-content">
                      <pre>
                        {
                          JSON.stringify(JSON.parse(metadataFile.fields.content),
                                         null,
                                         2)
                        }
                      </pre>
                    </div>
                  </ReadMore>
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
                  <div className="read-more-content">{licence_content}</div>
                </ReadMore>
              }
            </section>

            {
              creditText &&
              <section id="how-to-cite" className="model-page">
                <h2>Cite this model</h2>
                {
                  doi &&
                  <BadgeDoi doi={doi} style={{marginBottom: "10px"}}/>
                }
                <p dangerouslySetInnerHTML={{__html: replaceDois({html: creditText})}}></p>
              </section>
            }


            <p>
              Model submitted by <b>{submitter_full_name}</b> on <b>{date}</b>.
            </p>

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
  email: PropTypes.string,
  dataset: PropTypes.objectOf(PropTypes.string),
  animation: PropTypes.object,
  input_files: PropTypes.objectOf(PropTypes.string),
  postprocessing_files: PropTypes.objectOf(PropTypes.string),
}

const ModelsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ModelTemplate
        abstract={post.frontmatter.abstract}
        animation={post.frontmatter.animation}
        compute_info={post.frontmatter.compute_info}
        compute_tags={post.frontmatter.compute_tags}
        content={post.html}
        contentComponent={HTMLContent}
        creators={post.frontmatter.creators}
        creditText={post.frontmatter.creditText}
        dataset={post.frontmatter.dataset}
        date={post.frontmatter.date}
        description={post.frontmatter.description}
        doi={post.frontmatter.doi}
        graphic_abstract={post.frontmatter.images.graphic_abstract}
        landing_image={post.frontmatter.images.landing_image}
        licence={post.frontmatter.licence}
        metadataFile={post.frontmatter.metadataFile}
        model_files={post.frontmatter.model_files}
        model_setup_info={post.frontmatter.model_setup_info}
        model_setup={post.frontmatter.images.model_setup}
        publication={post.frontmatter.associated_publication}
        research_tags={post.frontmatter.research_tags}
        title={post.frontmatter.title}
        slug={post.frontmatter.slug}
        submitter={post.frontmatter.submitter}
        software={post.frontmatter.software}
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
      frontmatter {
        abstract
        slug
        doi
        description
        animation {
          caption
          src {
            publicURL
          }
        }
        associated_publication {
          authors {
            family_name
            name
          }
          date
          doi
          journal
          publisher
          title
        }
        compute_info {
          doi
          name
          organisation
          url
        }
        compute_tags
        creators {
          name
          family_name
          ORCID
        }
        creditText
        dataset {
          url
          notes
          existing_identifier
          nci_file_path
          include
        }
        date(formatString: "MMMM DD, YYYY")
        doi
        for_codes
        funding {
          name
          doi
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
        }
        metadataFile {
          fields {
            content
          }
          publicURL
        }
        model_files {
          url
          notes
          existing_identifier
          nci_file_path
          include
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
        submitter {
          name
          family_name
          ORCID
        }
        title
      }
    }
  }
`;
