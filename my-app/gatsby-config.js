module.exports = {
  siteMetadata: {
	title: 'Design+Code 3',
	description: 'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
	keywords: 'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin',
  pathPrefix: "/learnReact"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
      spaceId: '78p12jjdi60e',
      accessToken: '81d72c7c4e13bbfa855317fda636e4f188f7e4a8cfc55e357aa5687ee98a0bbb'
    }
  }
],
}
