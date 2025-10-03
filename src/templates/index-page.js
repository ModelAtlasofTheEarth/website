import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";

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
      <div className="main-page-background">
        <section className="main-page-header">
          <h1>
            Model Atlas of the Earth (M@TE)
          </h1>
          <p>
            M@TE is a purpose-built digital platform for geoscience that
            provides access to computational models of Earth's processes,
            from the Geosphere to the Hydrosphere, like Zenodo for
            geoscience but bigger and better.
          </p>
          <section className="main-page-header main-page-smaller">
            <p>Funded by</p>
            <a title="AuScope" href="https://www.auscope.org.au/">
              <img
                src={auscopeIcon}
                alt="AuScope Logo"
              />
            </a>
          </section>
        </section>
      </div>

      <div
        style={{ position: 'relative', top: '-20px' }}
      >
        <div
          className="about-us-box box"
          style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '0',
            }}
        >
          <Link
            to="/about"
            className="link-arrow gp-title"
            style={{
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Learn more &nbsp; <span>&#10132;</span>
          </Link>
        </div>
      </div>

      <h1 className="is-size-3 gp-title">
        <br></br>
        Featured Models
        <br></br>
      </h1>
      <WithScrollbar models={allModels}/>

      <div className="main-page-box main-page-box-dark">
        <section className="main-page-box">
          <h2>
            What is M@TE?
          </h2>
          <p>
            M@TE is a digital platform that provides access to a wide range of
            computational models and their outputs, focused on Earth's
            evolution from the Geosphere to the Hydrosphere.
          </p>
          <p>
            M@te encapsulates the entire model development process—from setup
            to output and analysis—enabling discovery, data preservation,
            reproducibility and reuse, offering flexibility for users with
            varying levels of expertise.
          </p>
          <p>
            Purpose-built to meet the specific needs of the geoscience
            community, M@TE is a lasting, sustainable, and scalable
            resource that supports and leverages research infrastructure.
            It offers flexible tools for managing, sharing, and preserving
            numerical models, with built-in DOI creation to ensure persistent,
            citable access to results. Similar in spirit to Zenodo, but bigger
            and better for geoscientific modeling.
          </p>
        </section>
        </div>

        <div className="main-page-box main-page-box-light">
        <section className="main-page-box">
          <h2>
            Why M@TE?
          </h2>
          <p>
            The field of numerical modeling of Earth's systems is rapidly
            expanding, enabling new insights into the coevolution of the solid
            Earth and surface processes. These models often require
            specialized high-performance computing resources, can take days
            to weeks to run, and generate large volumes of heterogeneous
            output data. Without proper curation and community standards, it
            is difficult to access, interpret, and build upon published work.
          </p>
          <p>
            M@TE addresses these needs by providing:
            <ul className="main-page-box">
              <li>
                Integrated management of the full model life cycle: code,
                documentation, output data, publications, figures, animations
                and metadata
              </li>
              <li>
                Purpose-built infrastructure for storing, preserving, and
                sharing computational models
              </li>
              <li>
                A central hub connecting educators, model developers, and
                geoscientists
              </li>
              <li>
                Support for reproducibility and reuse
              </li>
              <li>
                Built-in DOI creation for persistent, citable results
              </li>
              <li>
                Scalable and sustainable research infrastructure
              </li>
              <li>
                Flexibility for users with different levels of expertise
              </li>
              <li>
                Capabilities beyond general-purpose repositories
                (e.g., Zenodo, Figshare)
              </li>
            </ul>
          </p>
        </section>
      </div>

      {false &&
      <div
        className="be-our-mate"
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '100px',
        }}
      >
        <div
          className="contribute-box"
          style={{
            justifyContent: 'center',
            width: '100%',
            alignItems: 'center',
            marginRight: '20px',
            borderRadius: '0',
            maxWidth: '600px',
            marginBottom: '20px',
          }}
        >
          <h1
            className="gp-title"
            style={{ fontSize: "60px" }}
          >
            Be our M@TE
          </h1>
          <h1 style={{ fontSize: "20px", marginLeft: "40px" }}>
            <br></br>
            If you would like to contribute your work to the Model Atlas of the Earth...
            <ul>
              <br></br>
              <li>
                1. Open the Model Atlas of the Earth's GitHub Repository
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
              <li>
                2. Create an issue from the Repository
              </li>
              <br></br>
              <li>
                3. Upload all image(s) and text files that showcase your work
              </li>
              <br></br>
              <li>
                4. Submit a Pull Request
              </li>
            </ul>
          </h1>

          <div>
            <div
              className="about-us-box box"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '0',
              }}
            >
              <a
                href="https://www.earthbyte.org/"
                className="link-arrow gp-title"
                style={{ fontWeight: "bold", fontSize: "20px" }}
              >
                Further information &nbsp; <span>&#10132;</span>
              </a>
            </div>
          </div>
        </div>

        <div
          className="image-container"
          style={{ textAlign: 'center', maxWidth: '600px' }}
        >
          <img
            src={mateTrinity}
            alt="Description"
            style={{
              paddingTop: "100px",
              paddingBottom: "100px",
              width: "90%",
              display: "inline-block", // Use inline-block to center the image
              margin: "0 auto", // Set left and right margin to auto for centering
              zIndex: "-1",
            }}
          />
        </div>
      </div>
    }
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
            doi
            url_source
          }
          submitter {
            name
            family_name
            ORCID
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
