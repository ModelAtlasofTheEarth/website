import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import "../pages/contact/index_styles.css";
import { GatsbyImage } from "gatsby-plugin-image";
import PublicationList from "../components/PublicationList"

const MAX_PUBLICATIONS = 5

const PeopleTemplate = ({
  content,
  contentComponent,
  name,
  title,
  headerImage,
  email,
  orcid,
  researchgate,
  twitter,
  scholar,
  helmet,
  publications,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section container person">
      {helmet || ""}
      <GatsbyImage className="person"
        image={headerImage.childImageSharp.gatsbyImageData}
        alt={name}
      />

      <h1 className="person">{name}</h1>
      <h2 className="person">{title}</h2>

      <div className="columns person">
        <div className="column is-3">
          <div className="box contact-box">
            <h3>Contact</h3>
            {
              email &&
              <div>
                <h4>Email</h4>
                <a
                  href={`mailto:${email}`}
                  className="link-arrow button is-white"
                >
                  {email}{" "}<span>&#10132;</span>
                </a>
              </div>
            }
            {
              orcid &&
              <div>
                <h4>ORCiD</h4>
                <a
                  href={`https://orcid.org/${orcid}`}
                  className="link-arrow button is-white"
                >
                  {orcid}{" "}<span>&#10132;</span>
                </a>
              </div>
            }
            {
              researchgate &&
              <div>
                <h4>ResearchGate</h4>
                <a
                  href={`https://www.researchgate.net/profile/${researchgate}`}
                  className="link-arrow button is-white"
                >
                  {researchgate}{" "}<span>&#10132;</span>
                </a>
              </div>
            }
            {
              scholar &&
              <div>
                <h4>Google Scholar</h4>
                <a
                  href={`https://scholar.google.com/citations?user=${scholar}`}
                  className="link-arrow button is-white"
                >
                  {name}{" "}<span>&#10132;</span>
                </a>
              </div>
            }
            {
              twitter &&
              <div>
                <h4>X/Twitter</h4>
                <a
                  href={`https://www.twitter.com/${twitter}`}
                  className="link-arrow button is-white"
                >
                  {`@${twitter}`}{" "}<span>&#10132;</span>
                </a>
              </div>
            }
          </div>
        </div>

        <div className="column">
          <div className="box person-box">
            <Tabs
              className="custom-tabs"
              selectedTabClassName="custom-tabs__tab--selected"
              selectedTabPanelClassName="custom-tabs__tab-panel--selected"
              disabledTabClassName="custom-tabs__tab--disabled"
            >
              <TabList className="custom-tabs__tab-list">
                <Tab className="custom-tabs__tab" key="overview">Overview</Tab>
                <Tab
                  className="custom-tabs__tab"
                  disabled={!(publications && publications.data?.length > 0)}
                  key="research"
                >
                  Research
                </Tab>
              </TabList>

              <TabPanel className="custom-tabs__tab-panel" key="overview">
                <PostContent content={content}/>
              </TabPanel>
              <TabPanel className="custom-tabs__tab-panel" key="research">
                {
                  (publications && publications.data?.length > 0) &&
                  <PublicationList
                    publications={publications}
                    title="Recent publications"
                    sortFunc={(a, b) => b.created?.timestamp - a.created?.timestamp}
                    maxPublications={MAX_PUBLICATIONS}
                    orcidId={orcid}
                  />
                }
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>

    </section>
  )
}

PeopleTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  headerImage: PropTypes.arrayOf(PropTypes.object),
  contact: PropTypes.arrayOf(PropTypes.object),
  orcid: PropTypes.string,
  researchgate: PropTypes.string,
  twitter: PropTypes.string,
  twitterhandle: PropTypes.string,
  scholar: PropTypes.string,

};

const People = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <PeopleTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate={"%s | " + post.frontmatter.title}>
            <title>{`${post.frontmatter.name}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        name={post.frontmatter.name}
        title={post.frontmatter.title}
        headerImage={post.frontmatter.headerImage}
        email={post.frontmatter.contact.Email}
        orcid={post.frontmatter.contact.Orcid}
        researchgate={post.frontmatter.contact.ResearchGate}
        twitter={post.frontmatter.contact.Twitter}
        scholar={post.frontmatter.contact.Scholar}
        publications={pageContext.publications}
      />
    </Layout>
  );
};

export default People;

export const pageQuery = graphql`
  query PeopleByID($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        name
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        headerImage {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              layout: FULL_WIDTH
            )
          }
        }
        contact {
          Email
          Orcid
          ResearchGate
          Twitter
          Scholar

        }
        
      }
    }
  }
`;
