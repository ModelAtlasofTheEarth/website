import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import "../pages/contact/index_styles.css";
import Content, { HTMLContent } from "../components/Content";
import WithScrollbar from "../components/CarouselScroll";
import auscopeIcon from "../img/auscope-full-logo.png";
import earthbyteIcon from "../img/earthbyte_logo.png";
import earthbyteText from "../img/eb-textlogo.png";
import landingPhoto from "../img/landing_photo.jpg";
import gitIcon from "../img/github-icon.svg";
import mateTrinity from "../img/mate_trinity.png";
import PageHead from "../components/Head"

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

import AtlasIcon from "../img/atlas-icon.svg";
import reconstructionImage from "../img/reconstruction-80Ma.png";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage"
import "react-multi-carousel/lib/styles.css";


<head>
  <link rel="stylesheet" target="_blank" rel="noopener" href="https://cdn.jsdelivr.net/npm/Bulma@0.9.1/css/Bulma.min.css"></link>
</head>

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
    partialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 40
  }
};


const IndexPageTemplate = ({
  content,
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  descMarkdown,
  reasons,
  graphic_abstract,
  allModels,
}) => {

  return (

    <div>
        <div class="image-container">
        <img
            src={landingPhoto}
            alt="Description"
            style={{
              width: "100%",
              height: "600px",
              objectFit: "cover",
              margin: "auto",
              backgroundPosition: "center center",
              display: "block",
              zIndex: "-1",
              opacity: "80%"
            }}
          />
          <div class="overlay-box">
            <p class="overlay-text">



            <h1 className="mate-name" style={{ color: "white", fontSize: "60px" }}>
              Model Atlas of the Earth (M@TE)
            </h1>

            <h1 className="gp-title" style={{color: "white", fontSize: "20px"}}>

                M@TE is an open-source collection of computational models<br></br>
                with a focus on tectonics, hydrogeology and surface processes. <br></br>
                M@TE provides a range of digital infrastructure to support the <br></br>
                FAIR principles: Findability, Accessibility, Interoperability and Reusability.


            </h1>

            <h1 className=" gp-title" style={{color: "white", fontSize:"15px"}}>
              <br></br>
              Powered by
            </h1>

            <a title="AuScope" href="https://www.auscope.org.au/">
              <img
                src={auscopeIcon}
                alt="AuScope Logo"
                style={{
                  maxWidth: "200px",
                  marginLeft: "5px",
                  marginBottom: "0px",
                  borderRadius: "15px",
                  verticalAlign: "middle",
                }}
              />
            </a>





            </p>
          </div>
        </div>

      <div style={{ position: 'relative', top: '-20px' }}>
        <div className="about-us-box box"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  borderRadius: '0'}}>
          <a href="https://mate.science/models/" className="link-arrow gp-title"
          style={{fontWeight: "bold", fontSize: "20px"}}>
            Learn more &nbsp; <span>&#10132;</span>
          </a>
        </div>
      </div>


      <h1 className="is-size-3 gp-title">
        <br></br>
        Featured Models
        <br></br>
      </h1>

      <WithScrollbar models={allModels}/>


      <div class="image-container">
        <img
          src={mateTrinity}
          alt="Description"
          style={{
            paddingTop: "100px",
            paddingBottom: "100px",
            width: "50%",
            display: "block",
            marginLeft: "auto", // Push the image to the right
            zIndex: "-1"
          }}
        />
      </div>

      <div style={{ position: 'relative', top: '-800px' }}>
        <div className="contribute-box box"
          style={{ justifyContent: 'center', alignItems: 'center',  borderRadius: '0'}}>
          <h1 className="gp-title" style={{fontSize: "60px"}}>
            Be our M@TE
          </h1>
          <h1 style={{ fontSize: "20px", marginLeft: "40px" }}>
            <br></br>
            If you would like to contribute your work to the Model Atlas of the Earth...

            <ul>
              <br></br>
              <li>1. Open the Model Atlas of the Earth's GitHub Repository

                <a href="https://github.com/ModelAtlasofTheEarth">
                  <img
                    src={gitIcon}
                    alt="GitHub Logo"
                    style={{
                      maxWidth: "30px",
                      marginLeft: "5px",
                      marginBottom: "0px",
                      borderRadius: "15px",
                      verticalAlign: "middle",
                    }}
                  />
                </a>

              </li>
                <br></br>
              <li>2. Create an issue from the Repository </li>
                <br></br>
              <li>3. Upload all image(s) and text files that showcase your work</li>
                <br></br>
              <li>4. Submit a Pull Request</li>
            </ul>
          </h1>

          <div style={{ position: 'relative', top: '20px' }}>
            <div className="about-us-box box"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  borderRadius: '0'}}>
              <a href="https://www.earthbyte.org/" className="link-arrow gp-title"
              style={{fontWeight: "bold", fontSize: "20px"}}>
                Further information &nbsp; <span>&#10132;</span>
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  descMarkdown: PropTypes.object,
  reasons: PropTypes.array,
  graphic_abstract: PropTypes.object,
  allModels: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const allModels = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        descMarkdown={frontmatter.descMarkdown}
        reasons={frontmatter.reasons}
        allModels={allModels}
        graphic_abstract={allModels[0].node.frontmatter.images.graphic_abstract}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
query MyQuery {
  allMarkdownRemark(
    filter: { frontmatter: { templateKey: { eq: "model" } } }
    sort: { frontmatter: { date: DESC } }
  ) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          compute_tags
          contributor {
            name
            family_name
            ORCID
          }
          date(formatString: "MMMM DD, YYYY")
          images {
            landing_image {
              caption
              src {
                childImageSharp {
                  gatsbyImageData (
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
          title
          templateKey
        }
      }
    }
  }

  markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
    frontmatter {
      title
      image {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      heading
      subheading
      mainpitch {
        title
        description
      }
      descMarkdown {
        childMarkdownRemark {
          html
        }
      }
      reasons
    }
  }
}
`;
export const Head = () => (
  <PageHead title="Model Atlas of the Earth"/>
)
