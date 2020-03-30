import { Config, Scenario } from 'backstopjs'
import { parseSitemap } from './lib/sitemap'

export async function makeConfig(sitemapPath: string): Promise<Config> {
  const pages = await parseSitemap('https://ozmoroz.com/sitemap.xml')
  // Generate BackstopJS scenarios for every page in the sitemap
  const scenarios: Scenario[] = pages.map((pageUrl) => ({
    label: pageUrl,
    // cookiePath: 'backstop_data/engine_scripts/cookies.json',
    url: pageUrl,
    // referenceUrl: '',
    // readyEvent: '',
    // readySelector: '',
    // delay: 0,
    // hideSelectors: [],
    // removeSelectors: [],
    // hoverSelector: '',
    // clickSelector: '',
    // postInteractionWait: 0,
    // selectors: [],
    // selectorExpansion: true,
    // expect: 0,
    // misMatchThreshold: 0.1,
    // requireSameDimensions: true,
  }))

  const config: Config = {
    id: 'ozmoroz_com',
    viewports: [
      {
        label: 'small',
        width: 320,
        height: 480,
      },
      {
        label: 'medium',
        width: 800,
        height: 600,
      },
      {
        label: 'large',
        width: 1024,
        height: 768,
      },
      {
        label: 'xlarge',
        width: 1280,
        height: 1024,
      },
    ],
    scenarios,
    paths: {
      bitmaps_reference: 'backstop_data/bitmaps_reference',
      bitmaps_test: 'backstop_data/bitmaps_test',
      engine_scripts: 'backstop_data/engine_scripts',
      html_report: 'backstop_data/html_report',
      ci_report: 'backstop_data/ci_report',
    },
    report: ['browser'],
    engine: 'puppeteer',
    engineOptions: {
      args: ['--no-sandbox'],
    },
    asyncCaptureLimit: 5,
    asyncCompareLimit: 50,
    debug: false,
    debugWindow: false,
  }
  return config
}
