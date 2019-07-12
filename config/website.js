const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Ganesh Ravi Shankar', // Navigation and Site Title
  siteTitleAlt: 'Ganesh', // Alternative Site title for SEO
  siteTitleShort: 'Ganesh', // short_name for manifest
  siteHeadline: 'My Personal Portfolio', // Headline for schema.org JSONLD
  siteUrl: 'https://ganny.dev', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Personal Portfolio for Ganesh Ravi Shankar',
  author: 'Ganesh Ravi Shankar', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@ganesh_upshotly', // Twitter Username
  ogSiteName: 'Ganesh Ravi Shankar', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
