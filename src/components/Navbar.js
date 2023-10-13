import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/atlas-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUsersViewfinder } from "@fortawesome/free-solid-svg-icons";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="M@TE">
              <img
                src={logo}
                alt="M@TE"
                style={{ width: "40px", maxHeight: "40px" }}
              />
            </Link>
            {/* Hamburger menu */}
            <div
              role="button"
              tabIndex="0"
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              onKeyDown={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item hover-darken" to="/models">
                <span
                  className="icon has-text-extensions"
                  aria-hidden="true"
                  style={{ color: "darkolivegreen" }}
                >
                  <FontAwesomeIcon icon={faUsersViewfinder} />
                </span>

                <span>Models</span>
              </Link>
              <Link className="navbar-item hover-darken" to="/search">
                <span
                  className="icon has-text-extensions"
                  aria-hidden="true"
                  style={{ color: "darkolivegreen" }}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </span>
                <span>Search</span>
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/ModelAtlasofTheEarth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
