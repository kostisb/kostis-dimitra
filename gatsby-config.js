/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `Kostis Dimitra`,
		siteUrl: `https://www.kostisdimitra.gr`
	},
	plugins: [
		`gatsby-plugin-postcss`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: ['Mynerve']
				}
			}
		}
	]
};