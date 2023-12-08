import React from "react";
import { Link } from "gatsby";

import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import youtube from "../img/social/youtube.svg";
import auscopeIcon from "../img/AuScope-Logo-Icon.png";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns is-centered">
              <div className="column is-3">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/news">
                        Project Info.
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>

              <div className="column is-3">
                <section style={{ paddingTop: "1.2rem" }}>
                  <a title="AuScope" href="https://www.auscope.org.au/">
                    <img
                      src={auscopeIcon}
                      alt="AuScope Logo"
                      style={{
                        maxWidth: "60px",
                        filter: "invert(20%)",
                        marginLeft: "5px",
                        marginBottom: "0px",
                        borderRadius: "15px",
                        verticalAlign: "middle",
                      }}
                    />
                  </a>
                  <div style={{ paddingTop: ".5rem" }}>
                    <b>Funded by AuScope</b>
                  </div>
                </section>
              </div>

              <div className="column is-3 social">
                <a title="twitter" href="https://twitter.com/AuScope">
                  <object
                    type="image/svg+xml"
                    data={twitter}
                    aria-labelledby="twitter"
                  ></object>
                </a>
                <a
                  title="instagram"
                  href="https://www.instagram.com/auscopetoolkit/"
                >
                  <object
                    type="image/svg+xml"
                    data={instagram}
                    aria-labelledby="instagram"
                  ></object>
                </a>
                <a
                  title="youtube"
                  href="https://www.youtube.com/@auscope"
                >
                  <object
                    type="image/svg+xml"
                    data={youtube}
                    aria-labelledby="youtube"
                  ></object>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {/*<div style={{margin:"auto"}}>
            <a title="AuScope" href="https://www.auscope.org.au/">
              <img
                src={auscopeLogo}
                alt="AuScope Logo"
                style={{ maxWidth:"120px", filter: "invert(20%)", marginLeft:"5px", marginBottom:"0px", borderRadius:"15px", verticalAlign:"middle"}}
              />
            </a>
          </div>*/}
          <div
            style={{
              margin: "auto",
              textAlign: "center",
              padding: "0.2rem",
              fontSize: "80%",
            }}
          >
            <i>
              Copyright © 2020-2023 AuScope. All rights
              reserved.
            </i>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
