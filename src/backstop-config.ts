import { URL } from 'url'
import { Config, Scenario } from 'backstopjs'
import { parseSitemap } from './lib/sitemap'

export async function makeConfig(siteUrl?: string): Promise<Config> {
  let scenarios: Scenario[] = []
  if (siteUrl !== undefined) {
    const pages = await parseSitemap(new URL('sitemap.xml', siteUrl).toString())
    // Generate BackstopJS scenarios for every page in the sitemap
    scenarios = pages.map((pageUrl) => ({
      label: pageUrl,
      // cookiePath: 'backstop_data/engine_scripts/cookies.json',
      url: pageUrl,
      // referenceUrl: '',
      // readyEvent: '',
      // readySelector: '',
      delay: 100,
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
  }

  const config: Config = {
    id: '',
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
