module.exports = {
  siteMetadata: {
    title: 'Productive Lemon',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-less',

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `/${__dirname}/src/sources/`,
        name: 'all',
      },
    },

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-component',
          `gatsby-remark-responsive-iframe`,
          `gatsby-transformer-sharp`,
          `gatsby-plugin-sharp`,

          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080,
              wrapperStyle:
                'margin-bottom:60px;margin-top:30px; text-decoration: none; border: 0 none; ',
              showCaptions: true,
            },
          },

          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    `rehype-react`,
    'gatsby-plugin-layout',

    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://garrettvercoe.us7.list-manage.com/subscribe/post?u=6be53a6300589442a85d88031&amp;id=df7352000d', // see instructions section below
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/assets/favicon.png',
      },
    },
  ],
}
