module.exports = {
  siteMetadata: {
    title: "M@TE",
    description: "Model Atlas of the Earth (M@TE).",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      sassOptions: { indentedSyntax: true },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    "react-copy-to-clipboard",
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              offsetY: "100",
            },
          },
          {
            resolve: "gatsby-remark-relative-images",
            options: {},
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Model Atlas of the Earth (M@TE)",
        short_name: "M@TE",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        display: "standalone",
        icon: "src/img/atlas-icon.svg",
      }
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/atlas.sass"], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    //'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
