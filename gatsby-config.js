module.exports = {
  siteMetadata: {
    title: 'Gatsby Semantic UI Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-less',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/posts`,
        name: "post",
      },
     
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/projects`,
        name: "project",
      }},



    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-component",
      
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 1080,
            wrapperStyle: 'margins: 0 20px 0 20px;'
          },
        },
        {
          resolve: `gatsby-remark-responsive-iframe`,
          options: {
            wrapperStyle: {
              "margin-top" : "20em",
              "margin-bottom": "1em"
            },
          },
        },
        `gatsby-remark-copy-linked-files`,
          {resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        }]
      },
      },
    `gatsby-plugin-catch-links`,
    `rehype-react`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    ],
}
