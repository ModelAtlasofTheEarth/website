import React from "react";
import Layout from "../../components/Layout";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import { ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from "react-scroll-parallax"

import PreviewCompatibleImage from "../../components/PreviewCompatibleImage";
import "./index_styles.css";
import PageHead from "../../components/Head"
import Animation from "../../components/Animation"

class ContactPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;


    return (
      <Layout>
        <ParallaxProvider>
          <ParallaxBanner style={{ aspectRatio: '6 / 1' }}>
            <ParallaxBannerLayer speed={-20}>
              <Animation
                src={data.file.publicURL}
                playing
                loop
                muted
                style={{marginTop: "85px", marginLeft: "-75px", objectFit: "cover",}}
              />
            </ParallaxBannerLayer>
          </ParallaxBanner>
        </ParallaxProvider>

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
        file(base: {eq: "AFRC_Coupled_model_M@te_v3.mp4"}) {
          publicURL
        }
      }
    `}
    render={(data, count) => <ContactPage data={data} count={count} />}
  />
);

export default fn;
export const Head = () => <PageHead title="People"/>
