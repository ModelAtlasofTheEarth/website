import React from "react"
import useSiteMetadata from "./SiteMetadata"

const PageHead = ({ title }) => {
  const metadata = useSiteMetadata()
  const page_title = (
    title
    ? title + " | " + metadata.title
    : metadata.title
  )
  return (
    <>
      <html lang="en" className="has-navbar-fixed-top" />
      <title>{page_title}</title>
      <meta name="description" content={metadata.description} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={page_title} />
      <meta property="og:url" content="/" />
      <meta
        property="og:description"
        content={metadata.description}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={page_title} />
      <meta
        name="twitter:description"
        content={metadata.description}
      />
    </>
  )
}

export default PageHead
