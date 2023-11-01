import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

import AtlasIcon from "../img/atlas-icon.png";

<head>
  <link rel="stylesheet" target="_blank" rel="noopener" href="https://cdn.jsdelivr.net/npm/Bulma@0.9.1/css/Bulma.min.css"></link>
</head>


const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  descMarkdown,
  reasons,
}) => (
  <div>
    <h1 className="has-text-weight-bold is-size-2 is-size-1-widescreen gp-title">
      MATE website
    </h1>
    <h1 className="has-text-weight-bold is-size-2 gp-title">Coming soon....!!!3!!!</h1>
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

    <video id="myVideo" loop muted playsInLine autoPlay>
      <source src="https://mate.science/webdav/media/header-video.mp4" type="video/mp4"/>
    </video>


  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  descMarkdown: PropTypes.object,
  reasons: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

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
  query IndexPageTemplate {
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
