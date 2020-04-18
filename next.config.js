require('dotenv').config()
const withMDX = require('@next/mdx')()
module.exports = withMDX({
  pageExtensions: ['js', 'mdx'],
  devIndicators: {
    autoPrerender: false
  },
  env: {
    AIRTABLE_KEY: process.env.AIRTABLE_KEY
  }
})
