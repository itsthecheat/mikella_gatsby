require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Mikella Millen LCAT, ATR-BC',
    siteUrl: 'http://www.mikellamillen.com',
    description: 'Art Therapist with private practice in Manhattan',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-smoothscroll',
    'gatsby-transformer-yaml',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Mikella Millen',
        short_name: 'Mikella Millen',
        start_url: '/',
        icon: 'static/favicon-32x32.png',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: `${process.env.GATSBY_PRISMIC_REPO_NAME}`,
        // releaseID: `${process.env.PRISMIC_RELEASE_ID}`,
        linkResolver: require('./src/utils/linkResolver').linkResolver,
        // linkResolver: (doc) => `/${doc.uid}`,
        schemas: {
          page: require('./src/schemas/page.json'),
          splash: require('./src/schemas/splash.json'),
          home: require('./src/schemas/home.json'),
          navigation: {},
        },
        accessToken: `${process.env.PRISMIC_API_KEY}`,
      },
    },
    {
      resolve: 'gatsby-plugin-prismic-previews',
      options: {
        repositoryName: `${process.env.GATSBY_PRISMIC_REPO_NAME}`,
        accessToken: `${process.env.PRISMIC_API_KEY}`,
        // toolbar: 'new',
      },
    },
  ],
}
