import React from "react"
import Layout from "../../components/Layout"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"
import PageHead from "../../components/Head"
import PreviewCompatibleImage from "../../components/PreviewCompatibleImage"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { TagsList } from "../../components/Badges"
import ModelList from "../../components/ModelList"

class ModelsPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <h2 className="has-text-weight-bold is-size-2 gp-title">
          Available Models
        </h2>
        <ModelList posts={posts}/>
        {/* <div className="container models">
          {
            posts.map(({ node: post }) => (
              <ModelItem
                slug={post.fields.slug}
                title={post.frontmatter.title}
                author={post.frontmatter.creator.name}
                date={post.frontmatter.date}
                tags={post.frontmatter.tags}
                landing_image={post.frontmatter.images.landing_image}
              />
            ))
          }
        </div> */}
      </Layout>
    )
  }
}

ModelsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

// const ModelItem = ({
//   slug,
//   title,
//   author,
//   date,
//   tags,
//   landing_image,
// }) => {
//   const landing_gatsby_image = getImage(landing_image.src)
//   return (
//     <table className="models-entry">
//       <tr className="models-entry">
//         <th className="models-image">
//           <Link to={slug}>
//             <GatsbyImage
//               image={landing_gatsby_image}
//               alt={
//                 landing_image.alt ||
//                 title
//               }
//             />
//           </Link>
//         </th>
//         <th className="models-text">
//           <Link className="models-text" to={slug}>
//             <h3>{title}</h3>
//           </Link>
//           <p><b>Author:</b> {author}</p>
//           <p><b>Uploaded:</b> {date}</p>
//           <p><b>Tags:</b></p>
//           <p><TagsList tags={tags}/></p>
//         </th>
//       </tr>
//     </table>
//   )
// }

// const ModelItem = ({ post, children }) => {
//   return (
//     <Link to={post.fields.slug}>
//       <div
//         className="models-container"
//         key={post.id}
//         title={post.frontmatter.title}
//       >
//         {/* <div className="models-image"> */}
//           {/* <PreviewCompatibleImage
//             imageInfo={{
//               image: post.frontmatter.images.landing_image.src,
//               alt: (
//                 post.frontmatter.images.landing_image.alt ||
//                 post.frontmatter.title
//               )
//             }}
//           /> */}
//           <GatsbyImage
//             className="models-image"
//             image={post.frontmatter.images.landing_image.src.childImageSharp.gatsbyImageData}
//             alt={
//               post.frontmatter.images.landing_image.alt ||
//               post.frontmatter.title
//             }
//             style={{
//             //   minWidth: "100%",
//               objectFit: "contain",
//             //   height: "800px",
//               width: "600px",
//             }}
//           />
//         {/* </div> */}
//         <div className="models-text">
//           <h3>{post.frontmatter.title}</h3>
//         </div>
//       </div>
//     </Link>
//   )
// }

// const ModelItem = ({ post, children }) => {
//   return (
//       <Link to={post.fields.slug}>
//         <div
//           className="box models row"
//           key={post.id}
//           title={post.frontmatter.title}
//         >
//           <div className="col-3">
//             <PreviewCompatibleImage
//               imageInfo={{
//                 image: post.frontmatter.images.landing_image.src,
//                 alt: (
//                   post.frontmatter.images.landing_image.alt ||
//                   post.frontmatter.title
//                 )
//               }}
//             />
//           </div>
//           <div className="col-9">
//             <h3>{post.frontmatter.title}</h3>
//           </div>
//         </div>
//       </Link>
//   )
// }

const fn = () => (
  <StaticQuery
    query={graphql`
      query modelsQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { templateKey: { eq: "model" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                creator {
                  name
                }
                tags
                templateKey
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
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ModelsPage data={data} count={count} />}
  />
)

export default fn
export const Head = () => <PageHead title="Models"/>
