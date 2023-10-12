import { graphql } from "gatsby"
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
import Content, { HTMLContent } from "../components/Content"
import PageHead from "../components/Head"
import Layout from "../components/Layout"
import PreviewCompatibleImage from "../components/PreviewCompatibleImage"

const ModelTemplate = ({
  content,
  contentComponent,
  title,
  date,
  uploader,
  authors,
  email,
  abstract,
  graphic_abstract,
  model_setup,
  dataset,
  animations,
  input_files,
  postprocessing_files,
  tags,
}) => {
  const PostContent = contentComponent || Content
  const dataset_url = (
    (!dataset.url && dataset.doi)
    ? "https://doi.org/" + dataset.doi
    : dataset.url
  )

  return (
    <section className="section">
      <div className="container content model-page">
        <div className="model-page-header">
          {/* <h1
            className="title is-size-3 has-text-weight-bold is-bold-light"
          > */}
          <h1>
            {title}
          </h1>
          <p className="model-page-header" style={{ marginBottom: "15px" }}>
            <b>Authors:</b>{" "}
            {
              authors.map((author) => (
                <BadgeAuthor
                  author={author.name}
                  style={{ fontSize: "20px" }}
                />
              ))
            }
          </p>
          <p className="model-page-header" style={{ marginBottom: "15px" }}>
            <b>Uploaded by:</b> {uploader}{" "}
            (<a href={`mailto${email}`}>{email}</a>)
          </p>
          <p className="model-page-header" style={{ marginBottom: "15px" }}>
            <b>Upload date:</b> {date}
          </p>
        </div>

        <Tabs className="model-page">
          <TabList>
            <Tab>Abstract</Tab>
            <Tab disabled={!dataset_url}>
              Dataset
            </Tab>
            <Tab disabled={!input_files.url}>
              Input files
            </Tab>
            <Tab disabled={!postprocessing_files.url}>
              Post-processing files
            </Tab>
          </TabList>

          <TabPanel>
            <h2>Abstract</h2>
            <p>{abstract}</p>
            <h3>Tags</h3>
            <p><TagsList tags={tags}/></p>
            {graphic_abstract &&
              <div>
                <h3>Graphic abstract</h3>
                <PreviewCompatibleImage
                  imageInfo={{
                  image: graphic_abstract.src,
                  alt: (
                    graphic_abstract.alt ||
                    "Graphic abstract | " + title
                  ),
                  }}
                />
              </div>
            }
          </TabPanel>
          <TabPanel>
            <h2>Dataset access</h2>
            {
              dataset.doi &&
              <BadgeDoi doi={dataset.doi}/>
            }
            <p>
              The output dataset for this model
              can be downloaded here:{" "}
              <a href={dataset_url}>{dataset_url}</a>
            </p>
            {
              dataset.notes &&
              (
                <p>
                  <h3>Notes</h3>
                  <p>{dataset.notes}</p>
                </p>
              )
            }
            {
              animations &&
              <div>
                <h3>Animations</h3>
                {
                  animations.map((i) => (
                    <p>
                      <Animation
                        src={i.src.publicURL}
                        alt={i.alt || "Animation | " + title}
                        controls
                      />
                    </p>
                  ))
                }
              </div>
            }
          </TabPanel>
          <TabPanel>
            <h2>Input files</h2>
            <p>
              The input files for this model
              can be downloaded here:{" "}
              <a href={input_files.url}>{input_files.url}</a>
            </p>
            {
              input_files.notes &&
              <div>
                <h3>Notes</h3>
                <p>{input_files.notes}</p>
              </div>
            }
            {
              model_setup.src &&
              <div>
                <h3>Model setup</h3>
                <PreviewCompatibleImage
                  imageInfo={{
                    image: model_setup.src,
                    alt: (
                      model_setup.alt ||
                      "Model setup | " + title
                    ),
                  }}
                />
              </div>
            }
          </TabPanel>
          <TabPanel>
            <h2>Post-processing files</h2>
            <p>
              The post-processing files for this model
              can be downloaded here:{" "}
              <a href={postprocessing_files.url}>
                {postprocessing_files.url}
              </a>
            </p>
            {
              postprocessing_files.notes &&
              (
                <div>
                  <h3>Notes</h3>
                  <p>{postprocessing_files.notes}</p>
                </div>
              )
            }
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

const Models = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ModelTemplate
        content={post.html}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        uploader={post.frontmatter.uploader.name}
        authors={post.frontmatter.authors}
        email={post.frontmatter.uploader.email}
        abstract={post.frontmatter.abstract}
        graphic_abstract={post.frontmatter.images.graphic_abstract}
        model_setup={post.frontmatter.images.model_setup}
        tags={post.frontmatter.tags}
        dataset={post.frontmatter.dataset}
        animations={post.frontmatter.animations}
        input_files={post.frontmatter.input_files}
        postprocessing_files={post.frontmatter.postprocessing_files}
      />
    </Layout>
  )
}

export default Models
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
        animations {
          alt
          src {
            publicURL
          }
        }
        authors {
          name
        }
        dataset {
          url
          doi
          notes
        }
        date(formatString: "MMMM DD, YYYY")
        images {
          graphic_abstract {
            alt
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
            alt
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
        input_files {
          url
          notes
        }
        postprocessing_files {
          url
          notes
        }
        tags
        title
        uploader {
          name
          email
        }
      }
    }
  }
`;
