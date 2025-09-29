import React from "react"

import PageHead from "../components/Head"
import Layout from "../components/Layout"

const AboutPage = () => {
  return (
    <Layout>
      <div className="about-page">
      <h1>About M@TE</h1>
      <section>
        <p>
          The M@TE collection provides access to a wide range of computational models and their outputs, focused on Earth's evolution—from the Geosphere to the Hydrosphere.
        </p>
        <p>
          M@TE provides a digital platform that encapsulates the entire model development process: from setup to model output, and analysis.
          It enables discovery, data preservation, reproducibility, and reuse, while providing flexibility for users with varying levels of expertise.
        </p>

        <p>
          M@TE is purpose-built to meet the specific needs of the geoscience community - a lasting, sustainable, and scalable resource that supports and leverages research infrastructure.
          It provides not only flexible tools for managing, sharing, and preserving numerical models, but also built-in DOI creation to ensure persistent, citable access to model results.
        </p>
        <p>
          M@TE is developed by a team of Earth scientists and professional software developers, with contributions from the following organisations:
          <ul className="about-page">
            <li><a href="https://www.auscope.org.au/">AuScope</a></li>
            <li> <a href="https://nci.org.au/">National Computational Infrastructure (NCI)</a></li>
            <li><a href="https://www.sydney.edu.au/research/facilities/sydney-informatics-hub.html">Sydney Informatics Hub</a></li>
          </ul>
        </p>
      </section>
      </div>
    </Layout>
  )
}

export default AboutPage
export const Head = () => <PageHead title="Model Atlas of the Earth"/>
