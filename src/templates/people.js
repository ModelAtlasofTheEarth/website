import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";



function openTab(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("content-tab");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
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
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (

    <section className="section">
      {helmet || ""}

      <nav class="tabs is-boxed is-fullwidth is-large">
        <div class="container">
          <ul>
            <li class="tab is-active" onClick={(event)=>openTab(event,'Overv')}><a >Overview</a></li>
            <li class="tab" onClick={(event)=>openTab(event,'Desc')}><a >Description</a></li>
            <li class="tab" onClick={(event)=>openTab(event,'Other')}><a >...</a></li>
          </ul>
        </div>
      </nav>

      <div class="container section">

        <div id="Overv" className="content-tab"/>
          
          <div class="box">

            <div className="container content">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <h1
                    className="title is-size-2 has-text-weight-bold is-bold-light"
                    style={{ textAlign: "center" }}
                  >
                    {name}
                  </h1>
                  <h1
                    className="title is-size-4 has-text-weight-bold is-bold-light"
                    style={{ textAlign: "center" }}
                  >
                    {title}
                  </h1>
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
          </div>
            
          <div className='columns is-mobile is-centered content-tab'>

            <div class="column box has-background-warning is-one-quarter">

                <div class="content">
                    <p>
                      <strong>Author</strong> 
                      <br/>
                      {name} ({title})
                      <br/><br/>

                      <strong>Collaborators</strong> 
                      <br/>
                      MARIANE ANDREETA (USP)
                      <br/>
                      Everton Lucas-Oliveira (Universidade de São Paulo)

                      <br/><br/>
                      <strong>Created</strong> 
                      <br/>
                      Oct. 8, 2020

                      <br/><br/>
                      <strong>License</strong> 
                      <br/>
                      ODC-BY 1.0
                      
                      <br/><br/>
                      <strong>Digital Object Identifier</strong> 
                      <br/>
                      10.17612/f4h1-w124

                      <br/><br/>
                      <body>
                        <a class="button"><strong>Data Citation</strong></a>
                        
                      </body>
                    </p>
                  </div>
                        
                <div/>
              </div>

            

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

        </div>  








        <div className="content-tab" id="Desc">  
          <div>


            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"/>
            </head>

            <body>
              <a class="button">A Bulma Button</a>
            </body>

            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"/>
            </head>

            <body>
              <div class="control">
                <div>
                  <h1>
                      Enter a name for your model here: 
                  </h1>
                </div>

                <input class="input is-success" type="text" placeholder="Write model name here..."/>
                
                <input type="radio" name="answer"/> Yes
                <input type="radio" name="answer"/> No
                <br/>

                <input type="checkbox"/> Check me!   
                <br/>
              
                <div class="select">
                  <select>
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                  </select>
                </div>
              
              </div>
            </body>

          
            

       
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
  helmet: PropTypes.object,
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
      }
    }
  }
`;
