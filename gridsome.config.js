const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  siteName: 'Comics Ghor',
  siteDescription: 'Comics Ghor-A canvas to paint your mind out. ',
  siteUrl: 'https://comicsghor.com/',
  plugins: [
    {
      use: "gridsome-plugin-manifest",
      options: {
          background_color: "#000000",
          icon_path: "./static/logo.png",
          name: "Comics Ghor",
          short_name: "CG",
          theme_color: "#FFFFFF",
          lang: "en",
      },
  },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'News', // Required
        baseDir: './news', // Where .md files are located
        pathPrefix: '/news', // Add route prefix. Optional
        template: './src/templates/News.vue', // Optional
        plugins: [
          [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
      ],
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
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    }
  ],
  templates: {
    Tag: '/tag/:id',
    Series: '/series/:id',
    Writer: '/writer/:id',
    Cat: '/cat/:id',
  },
  transformers: {
    remark: {
      plugins: [
        [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
      ],
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
