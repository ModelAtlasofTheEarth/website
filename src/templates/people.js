import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, StaticQuery } from "gatsby";

import Content, { HTMLContent } from "../components/Content";
import PageHead from "../components/Head"
import Layout from "../components/Layout";
import "../pages/contact/index_styles.css";


function openTab(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("content-tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" is-active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " is-active";
}


const PeopleTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  name,
  title,
  headerImage,
  orcid,
  researchgate,
  twitter,
  twitterhandle,
  scholar,
}) => {
  const PostContent = contentComponent || Content;
  
  return (
    <section className="section">
      {/*** Use Bulma's CSS sheet */}
      <link rel='stylesheet' href= 'https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css'></link>

      <GatsbyImage
        image={headerImage.childImageSharp.gatsbyImageData}

        style={{
          textAlign: "center", 
          width: "auto",
          height: "auto",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />

      <div class="bodytext header4">
        <h1>{name}</h1>
      </div>

      <div class="bodytext header5">
        <h1>{title} </h1>

      </div>
  
          
      <div className='peopleslide columns is-centered'>

        <div class="column peoplebox bodytext">
          <p>
            <strong>
              ORCID ID
            </strong>

            <br />

              {orcid}

            <br />
            <br />

            <strong>
              ResearchGate 
            </strong>

            <br />

            <Link to={researchgate}>
              <a href={researchgate} 
                className="link-arrow button is-white"> 
                {name} &nbsp; 
                <p>
                  &#10132;
                </p>
              </a>
            </Link>

            <br />
            <br />

            <strong>Google Scholar</strong>
            <br />
            
              <Link to={scholar}>
                <a 
                  href={scholar} 
                  className="link-arrow button is-white"> 
                  {name} &nbsp; 
                  <p>
                    &#10132;
                  </p>
                </a>
              </Link>
  
            <br /><br />

            <strong>
              Twitter
            </strong>

            <br />
            
            <Link to={twitter}>
              <a 
                href={twitter} 
                className="link-arrow button is-white"> 
                {twitterhandle} &nbsp; 
                <p>
                  &#10132;
                </p>
              </a>
            </Link>


          </p>
        </div>
          
        <div class="column auto bodytext">
          {/*** All non-yaml contents of the people md file */}
          <PostContent content={content} />

          {/*tags && tags.length ? (
            <div style={{ marginTop: `4rem` }}>
              <h4>Tags</h4>
              <ul className="taglist">
                {tags.map((tag) => (
                  <li key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
                ) : null*/}
        </div>
      </div>

    </section>
  );
};

PeopleTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  headerImage: PropTypes.arrayOf(PropTypes.object),
  contact: PropTypes.arrayOf(PropTypes.object),
  orcid: PropTypes.string,
  researchgate: PropTypes.string,
  twitter: PropTypes.string,
  twitterhandle: PropTypes.string,
  scholar: PropTypes.string,

};

const People = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PeopleTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        name={post.frontmatter.name}
        title={post.frontmatter.title}
        headerImage={post.frontmatter.headerImage}
        orcid={post.frontmatter.contact.Orcid}
        researchgate={post.frontmatter.contact.ResearchGate}
        twitter={post.frontmatter.contact.Twitter}
        twitterhandle={post.frontmatter.contact.Twitterhandle}
        scholar={post.frontmatter.contact.Scholar}
      />
    </Layout>
  );
};

PeopleTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default People;

export const pageQuery = graphql`
  query PeopleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
              layout: CONSTRAINED
            )
          }
        }
        contact {
          Orcid
          ResearchGate
          Twitter
          Twitterhandle
          Scholar

        }
        
      }
    }
  }
`;
export const Head = ({ data }) => (
  <PageHead title={data.markdownRemark.frontmatter.name}/>
)
