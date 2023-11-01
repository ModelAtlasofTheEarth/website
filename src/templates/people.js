import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import "../pages/contact/index_styles.css";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, StaticQuery } from "gatsby";


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
  helmet,
}) => {
  const PostContent = contentComponent || Content;
  
  return (
    <section className="section">
      {helmet || ""}
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

      <div class="header4">
        <h1>{name}</h1>
      </div>

      <div class="header5">
        <h1>{title}</h1>
      </div>
        
      <nav class="tabs is-large">
        
        <ul>
          <li 
            class="tab is-active" 
            onClick={(event) => openTab(event, 'Overv')}>
              <a >Overview</a>
          </li>
          <li 
            class="tab" 
            onClick={(event) => openTab(event, 'Desc')}>
              <a >Research</a>
          </li>
          <li 
            class="tab" 
            onClick={(event) => openTab(event, 'Other')}>
              <a >Contact</a>
          </li>
        </ul>
      
      </nav>


        {/*** Overv tab */}
        <div id="Overv" className="content-tab" >
          
          <div className='columns is-mobile is-centered'>

            <div class="column box is-one-fifth">
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
              
            <div class="column auto">
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
        </div>
        {/*** end of Overv tab */}

        {/*** Other tab */}
        <div className='columns is-mobile is-centered content-tab' id="Other" style={{ display: 'none' }}>
          
          <div class="box column">
            <div class="content">
              <p>
                <strong>Description</strong> <br></br>
                A set of 11 sandstone plugs from Kocurek Industries: Bandera Gray, Parker, Kirby, Bandera Brown, Berea Sister Gray, Berea Upper Gray, Berea, Castlegate, Buff Berea, Leopard and Bentheimer. Source: https://kocurekindustries.com/sandstone-cores.

                All samples were subject to a combined experimental and computational analysis in order to estimate Porosity and Permeability.

                For more details, please refer to: https://arxiv.org/abs/2010.10679.
              </p>
            </div>
          </div>
        </div>
        {/*** end of Other tab */}

        {/*** Desc tab */}
        <div className="content-tab" id="Desc" style={{ display: 'none' }}>
        <h1
                    className="title is-size-2 has-text-weight-bold is-bold-light"
                    style={{ textAlign: "left" }}
                  >
                    {orcid}
                  </h1>
                  <h1
                    className="title is-size-4 has-text-weight-bold is-bold-light"
                    style={{ textAlign: "center" }}
                  >
                    {title}
                  </h1>
          <div>
            <div>
              <a class="button">A Bulma Button</a>
            </div>
            <div>
              <div class="control">
                <div>
                  <h1>
                    Enter a name for your model here:
                  </h1>
                </div>

                <input class="input is-success" type="text" placeholder="Write model name here..." />

                <input type="radio" name="answer" /> Yes
                <input type="radio" name="answer" /> No
                <br />

                <input type="checkbox" /> Check me!
                <br />

                <div class="select">
                  <select>
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*** end of Other tab */}

    </section>
  );
};

PeopleTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
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

const People = ({ data }) => {
  const { markdownRemark: post } = data;

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
