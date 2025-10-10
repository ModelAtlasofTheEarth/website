import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import PageHead from "../components/Head"
import Layout from "../components/Layout"

const AboutPage = () => {
  return (
    <Layout>
      <div className="about-page">
        <h1>About M@TE</h1>
        <section className="about-page">
          <p>
            M@TE is designed to meet geoscientists where they are: from educators
            and students using visualizations in the classroom to researchers
            developing and benchmarking new numerical models. It lowers the
            learning curve of numerical models and bridges the gap between
            traditional geology and numerical geosciences.
          </p>
          <p>
            <b>M@TE enables you to:</b>
            <ul className="about-page">
              <li>
                <b>Explore and visualize models</b> through an intuitive web
                interface: play animations, use them in your teaching or to
                better understand Earth system concepts.
              </li>
              <li>
                <b>Download and build on models</b> by accessing input files and
                configuration scripts to reproduce or expand upon simulations on
                your own.
              </li>
              <li>
                <b>Analyze and benchmark model outputs</b> by comparing results
                across models and datasets without having to recreate
                simulations from scratch.
              </li>
              <li>
                <b>Upload your own models</b> using streamlined tools for
                packaging code, metadata and outputs. These are stored,
                preserved and assigned a DOI for citation.
                <i>(Currently by invitation only, as we are being intentional about
                showcasing a diverse and representative set of models.)</i>
              </li>
            </ul>
          </p>
          <p>
            <b>Together we build reproducible, reusable, robust models — it
            takes a village — so please cite the models you use.</b>
          </p>
        </section>
        <div className="about-page about-page-image">
          <StaticImage
            src="../img/mate_trinity.png"
            alt="M@TE Trinity diagram"
          />
        </div>
        <section className="about-page">
          <h2>
            How does M@TE work?
          </h2>
          <p>
            M@TE combines a user-friendly experience with a robust backend built
            on widely adopted, sustainable infrastructure. Users browse model
            summaries through the website, which links to GitHub and NCI
            repositories for downloading code and outputs. Behind the scenes,
            carefully chosen tools ensure consistency, accessibility and
            long-term preservation.
          </p>
          <p>
            <b>Key design choices include:</b>
            <ul className="about-page">
              <li>
                <h3>RO-Crates for packaging</h3>
                Model metadata is packaged using the{" "}
                <a href="https://www.researchobject.org/ro-crate/">
                  RO-Crate standard
                </a>,
                a lightweight JSON-LD format that captures rich metadata and
                references model components (e.g. code, inputs, outputs,
                publications, authors and persistent identifiers). This
                ensures models are machine-readable and FAIR (Findable,
                Accessible, Interoperable, Reusable).
              </li>
              <li>
                <h3>GitHub for submission and validation</h3>
                Models are submitted through structured{" "}
                <a href="https://github.com/ModelAtlasofTheEarth/model_submission">
                  GitHub issue templates
                </a>.
                Metadata is automatically validated and enriched
                via GitHub Actions, which connect to external services such as
                Crossref, DataCite and ORCID.
              </li>
              <li>
                <h3>Gatsby for showcasing</h3>
                The M@TE website is built with Gatsby, a static-site generator
                that delivers a fast, lightweight interface for browsing
                models. It integrates figures, animations and interactive
                content to make models discoverable and usable across different
                audiences.
              </li>
              <li>
                <h3>NCI GeoNetwork for storage and preservation</h3>
                Model outputs are stored and preserved through the National
                Computational Infrastructure (NCI){" "}
                <a href="https://geonetwork.nci.org.au/">GeoNetwork</a>.
                This system supports terabyte-scale data, assigns persistent DOIs
                and ensures discoverability through standard catalog services.
              </li>
            </ul>
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default AboutPage
export const Head = () => <PageHead title="Model Atlas of the Earth"/>
