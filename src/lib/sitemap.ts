import Sitemapper from 'sitemapper'

/**
 * Parse sitemap
 * @param sitemapUrl: string - Path to the site's sitemap.xml file
 */
export async function parseSitemap(sitemapUrl: string): Promise<string[]> {
  const sitemap = new Sitemapper({ url: sitemapUrl })
  return (await sitemap.fetch(sitemapUrl)).sites
}
