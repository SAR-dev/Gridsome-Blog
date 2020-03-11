// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');

const postcssPlugins = [ tailwind() ];

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss());

module.exports = {
	siteName: 'Comics Ghor',
	siteDescription: 'Welcome to Comics Ghor, a Bangladeshi website. The purpose of Comics Ghor is to create a free platform for all the Bangladeshi people, of all age, who desire to draw comics or write novels, stories or more',
	siteUrl: 'https://mystifying-poincare-a14ed5.netlify.com',
	chainWebpack: (config) => {
		const svgRule = config.module.rule('svg');
		svgRule.uses.clear();
		svgRule.use('vue-svg-loader').loader('vue-svg-loader');
	},
	plugins: [
		{
			use: 'gridsome-plugin-manifest',
			options: {
				background_color: '#000000',
				icon_path: './static/logo.png',
				name: 'Comics Ghor',
				short_name: 'CG',
				theme_color: '#FFFFFF',
				lang: 'en'
			}
		},
		{
			use: '@gridsome/vue-remark',
			options: {
				typeName: 'Documentation', // Required
				baseDir: './docs', // Where .md files are located
				pathPrefix: '/docs', // Add route prefix. Optional
				template: './src/templates/Documentation.vue', // Optional
				plugins: [ [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ] ]
			}
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'blog/**/*.md',
				typeName: 'Post',
				refs: {
					tags: {
						typeName: 'Tag',
						create: true
					},
					seriess: {
						typeName: 'Series',
						create: true
					},
					writers: {
						typeName: 'Writer',
						create: true
					},
					cats: {
						typeName: 'Cat',
						create: true
					}
				}
			}
		},
		{
			use: 'gridsome-plugin-rss',
			options: {
				contentTypeName: 'Post',
				feedOptions: {
					title: 'Comics Ghor',
					feed_url: 'https://comicsghor.netlify.com/rss.xml',
					site_url: 'https://comicsghor.netlify.com/'
				},
				feedItemOptions: (node) => ({
					title: node.title,
					description: node.summary,
					url: 'https://comicsghor.netlify.com' + node.path,
					author: 'SAR-DEV',
					date: node.date
				}),
				output: {
					dir: './static',
					name: 'rss.xml'
				}
			}
		},
		{
			use: '@gridsome/plugin-sitemap',
			options: {
				cacheTime: 600000 // default
			}
		}
	],
	templates: {
		Tag: '/tag/:id',
		Series: '/series/:id',
		Writer: '/writer/:id',
		Cat: '/cat/:id'
	},
	transformers: {
		remark: {
			plugins: [ [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ] ],
			externalLinksTarget: '_blank',
			externalLinksRel: [ 'nofollow', 'noopener', 'noreferrer' ],
			anchorClassName: 'icon icon-link'
		}
	},
	css: {
		loaderOptions: {
			postcss: {
				plugins: postcssPlugins
			}
		}
	}
};
