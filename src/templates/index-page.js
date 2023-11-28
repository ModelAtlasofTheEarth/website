import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import "../pages/contact/index_styles.css";
import Content, { HTMLContent } from "../components/Content";
import WithScrollbar from "../components/CarouselScroll";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

import AtlasIcon from "../img/atlas-icon-transparent.png";
import reconstructionImage from "../img/reconstruction-80Ma.png";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage"
import Carousel from "react-multi-carousel";
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
    items: 3,
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

      <h1 className="is-size-3 gp-title"> 
        <br></br>
        Featured Models
        <br></br>
      </h1>

      <WithScrollbar models={allModels}/>

      <div id="slide1" class="slide">
        <img src={AtlasIcon} width="200" height="200" style={{marginLeft: "auto", marginRight: "auto", display: "block"}}/>

        <h1 className="gp-title has-text-weight-bold header6">
          M@TE
        </h1>
        <h1 className="gp-title has-text-weight-bold is-size-2">
          Model Atlas of the Earth
        </h1>

        <h1 className="is-size-4 gp-title"> 
            <br></br>
            M@TE is an open-source collection of geological, geochemical and geophysical research data developed by and for the global geoscience community.
            <br></br>
        </h1>

        <h1 className="is-size-4 gp-title"> 
        
            <br></br>
            M@TE is committed to adopting the FAIR principles of data Findability, Accessibility, Interoperability and Reusability.
            <br></br>
        </h1>
      </div>

      <img src={reconstructionImage} style={{width:"70%", marginLeft: "auto", marginRight: "auto", display: "block"}}/>

      <div style={{ paddingTop: "2rem" }}>
        {/*
        <img
          src={AtlasIcon}
          alt="Atlas Icon"
          style={{
            display: "block",
            width: "50%",
            margin: "auto",
            cursor: "pointer",
          }}
          role="presentation"

          has-text-weight-bold is-size-2 is-size-1-widescreen gp-title
        />
        */}

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
          }
          date(formatString: "MMMM DD, YYYY")
          images {
            landing_image {
              caption
              src {
                childrenImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          research_tags
          software {
            name
          }
          title
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
