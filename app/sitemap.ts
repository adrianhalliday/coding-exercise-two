export const baseUrl = 'https://coding-exercise-one.vercel.app'

export default async function sitemap() {
  let routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes]
}
