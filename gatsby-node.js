const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { Cite } = require("@citation-js/core")
require("@citation-js/plugin-bibtex")
require("@citation-js/plugin-csl")
require("@citation-js/plugin-doi")
require("@citation-js/plugin-orcid")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              authors {
                name
              }
              contact {
                Orcid
              }
              date(formatString: "MMMM DD, YYYY")
              images {
                landing_image {
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
              software
              tags
              templateKey
              title
              uploader {
                name
              }
            }
            id
            internal {
              content
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    result.errors.forEach((e) => console.error(e.toString()))
    return Promise.reject(result.errors)
  }

  const posts = result.data.allMarkdownRemark.edges

  for (const edge of posts) {
    const id = edge.node.id
    const sourceName = _.kebabCase(edge.node.name)

    const orcidId = edge.node.frontmatter.contact?.Orcid
    let publications = await fetchPublications(orcidId)
    if (publications) {
      publications = JSON.parse(JSON.stringify(publications))
    }

    createPage({
      path: edge.node.fields.slug,
      tags: edge.node.frontmatter.tags,
      component: path.resolve(
        `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
      ),
      // additional data can be passed via context
      context: {
        id: id,
        sourceName: sourceName,
        publications: publications,
      },
    })
  }

  // Tag pages:
  let tags = []
  // Iterate through each post, putting all found tags into `tags`
  posts.forEach((edge) => {
    if (_.get(edge, `node.frontmatter.tags`)) {
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })
  // Eliminate duplicate tags
  tags = _.uniq(tags)

  // Make tag pages
  tags.forEach((tag) => {
    const tagPath = `/tags/${_.kebabCase(tag)}/`

    createPage({
      path: tagPath,
      component: path.resolve(`src/templates/tags.js`),
      context: {
        tag,
      },
    })
  })

  // Author pages:
  let authors = []
  for (const edge of posts) {
    if (edge.node.frontmatter?.uploader?.name) {
      authors.push(edge.node.frontmatter.uploader.name)
    }
    if (edge.node.frontmatter?.authors) {
      for (const author of edge.node.frontmatter.authors) {
        authors.push(author)
      }
    }
  }
  authors = _.uniq(authors)
  for (const author of authors) {
    const authorPath = `/authors/${_.kebabCase(author)}/`
    createPage({
      path: authorPath,
      component: path.resolve(`src/templates/authors.js`),
      context: {
        author,
      },
    })
  }

  // Search page
  let models_list = []
  for (const edge of posts) {
    if (edge.node.frontmatter.templateKey == "model") {
      models_list.push(edge.node)
    }
  }
  if (models_list.length > 0) {
    createPage({
      path: "/search",
      component: path.resolve("./src/templates/model-search.js"),
      context: {
        modelData: {
          allModels: models_list,
          options: {
            indexStrategy: "Prefix match",
            searchSanitizer: "Lower Case",
            SearchByTerm: true,
            TitleIndex: true,
            TagsIndex: true,
            UploaderIndex: true,
            AuthorsIndex: true,
            AbstractIndex: true,
            SoftwareIndex: true,
            ContentIndex: true,
          },
        },
      },
    })
  } else {
    console.log("===========================================")
    console.log("error creating search page: no models found")
    console.log("===========================================")
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  //fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

async function fetchPublications(orcidId) {
  if (orcidId) {
    return await Cite.async(orcidId)
  }
  return false
}
