import React from "react";
import Layout from "../../components/Layout";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "../../components/PreviewCompatibleImage";
import "./index_styles.css";
import PageHead from "../../components/Head"

class ContactPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;


    return (
      <Layout>
        <div class="image">
          {/*** An image to be hosted by GitHub */}
          <img

            src="https://github.com/GPlates/gplately/blob/master/Notebooks/NotebookFiles/pdoc_Files/docs_muller19_seed_points.gif?raw=true"
            alt="Description"
            textAlign="center"
            style={{
              paddingTop: "-100px",
              top: "0",
              position: "fixed",
              height: "100",
              width: "100%",
              display: "block",
              margin: "auto",
              backgroundPosition: "center center",
              display: "block",

              zIndex: "-1"
            }}
          />
        </div>


        <div class="staticslide">
        </div>

        <div class="slide header">
        </div>

        <div id="slide3" class="slide">

          <div class="header2">
            <h1>
              Meet the M@TE Team
            </h1>
          </div>

          <div className="columns is-multiline">
            <br></br>
            <div className="bodytext column is-four-fifths ">
              <br></br>
              <strong> Model Atlas of the Earth (M@TE) </strong> is developed by an international team of
              scientists and professional software developers at
              the EarthByte Group in the School of Geosciences at the University
              of Sydney with contributions from:
              <li>
                The Sydney Informatics Hub
              </li>
              <li>
                National Computational Infrastructure (NCI)
              </li>
              <li>
                AuScope
              </li>
            </div>
          </div>

        </div>

        <div id="slide1" class="slide">

            <div class="header3">
                <h1>
                  EarthByte Group
                </h1>
            </div>

          <div className="columns is-multiline bodytext">
            {posts &&
              posts.map(({ node: post }) => (
                <div
                  className="is-parent column is-3"
                  key={post.id}
                  title={post.frontmatter.title}>

                  <link rel='stylesheet' href= 'https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css'></link>

                  <div id="peoplebox" className="people">


                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.image,
                        alt: `photo thumbnail for  ${post.frontmatter.name}`,
                      }}
                    />

                    <h3 style={{ textAlign: "center", marginTop: "7px", fontWeight: "bold", fontSize: "20px" }}>
                      {post.frontmatter.name}
                    </h3>
                    <p style={{ textAlign: "center", marginTop: "5px", }}>
                      {post.frontmatter.title}

                    </p>
                    <br></br>
                    <Link to={post.fields.slug}>
                    <a href="" className="link-arrow button is-white"> Read more &nbsp; <p>&#10132;</p>

                    </a>
                    </Link>
                  </div>
                </div>
              ))}

          </div>
        </div>

      </Layout>
    );
  }
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

const fn = () => (
  <StaticQuery
    query={graphql`
      query peopleQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { templateKey: { eq: "people" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                name
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 360
                      height: 360
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
    `}
    render={(data, count) => <ContactPage data={data} count={count} />}
  />
);

export default fn;
export const Head = () => <PageHead title="People"/>
