const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const fs = require("fs")
const Cite = require("citation-js")
require("@citation-js/plugin-csl")
require("@citation-js/plugin-doi")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
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
                family_name
                ORCID
              }
              compute_tags
              contributor {
                name
                family_name
              }
              date(formatString: "MMMM DD, YYYY")
              images {
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
              }
              research_tags
              software {
                name
              }
              tags
              templateKey
              title
            }
            id
            internal {
              content
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((edge) => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach((edge) => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
      if (_.get(edge, "node.frontmatter.compute_tags")) {
        tags = tags.concat(edge.node.frontmatter.compute_tags)
      }
      if (_.get(edge, "node.frontmatter.research_tags")) {
        tags = tags.concat(edge.node.frontmatter.research_tags)
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
      if (_.get(edge, "node.frontmatter.authors")) {
        for (const author of edge.node.frontmatter.authors) {
          if (author?.name && author?.family_name) {
            authors.push(author)
          }
        }
      }
    }
    authors = _.uniq(authors)
    for (const author of authors) {
      const authorSlug = _.kebabCase(
        author.ORCID ?
        author.ORCID :
        `${author.name} ${author.family_name}`
      )
      const authorPath = `/authors/${authorSlug}`
      createPage({
        path: authorPath,
        component: path.resolve("src/templates/authors.js"),
        context: {
          author,
        }
      })
    }

    // Search page
    let models_list = []
    posts.forEach((edge) => {
      if (edge.node.frontmatter.templateKey == "model") {
        models_list = _.concat(models_list, edge.node)
      }
    })
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
  })
}

exports.onCreateNode = ({
  node,
  actions,
  getNode,
  createNodeId,
  createContentDigest,
}) => {
  const {
    createNode,
    createNodeField,
    createParentChildLink,
  } = actions

  const transformObject = (obj, id, type) => {
    const childNode = {
      ...obj,
      id,
      children: [],
      parent: node.id,
      internal: {
        contentDigest: createContentDigest(obj),
        type,
      }
    }
    createNode(childNode)
    createParentChildLink({ parent: node, child: childNode })
  }

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })

    const doi = node.frontmatter.associated_publication?.doi
    if (doi) {
      const citation = new Cite(doi)
      const html = citation.format("bibliography", {format: "html", style: "apa"})
      transformObject(
        {
          html,
          doi,
          data: citation.data[0]
        },
        citation.id ? citation.id : createNodeId(`${node.id} citation`),
        _.upperFirst(_.camelCase(`citation`))
      )
    }
  }

  if (node.internal.type === `File`) {
    fs.readFile(node.absolutePath, undefined, (_err, buf) => {
      createNodeField({ node, name: `content`, value: buf.toString()});
    });
  }
}
