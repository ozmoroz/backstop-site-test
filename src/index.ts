import { parseSitemap } from './lib/sitemap'

parseSitemap('https://ozmoroz.com/sitemap.xml')
  .then((sites) => console.log(sites.sort((a, b) => a.localeCompare(b))))
  .catch((err) => console.log(err))
