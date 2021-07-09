
const SITE_NAME = process.env.SITE_NAME
const SITE_SIGNITURE = process.env.SITE_SIGNITURE
const FRONTEND_BASE_URL = `${process.env.BASE_URL}${process.env.FRONTEND_PORT}`

const siteConfig = () => ({
  siteName: SITE_NAME,
  siteSigniture: SITE_SIGNITURE,
  baseUrl: FRONTEND_BASE_URL
})

export default ({}, inject) => {
  inject("site", siteConfig())
}
