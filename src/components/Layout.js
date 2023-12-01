import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./atlas.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({ children }) => (
  <>
    <Navbar/>
    <div>{children}</div>
    <Footer/>
  </>
)

export default TemplateWrapper;
