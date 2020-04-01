# Check visual regression of a site

Checks your site for a visual regression with [BackstopJS](https://garris.github.io/BackstopJS/) visual regression testing tool.

It parses the site map, builds a list of all the pages, then takes screenshots of all the pages in multiple resolutions.

After that you can make changes to your site, take another round of screenshots. The tool compares the two sets of screenshots and lets you know what changed.

Note that the site you take *reference* screenshots doesn't need to be the same site you test. So long as their srtucture is the same, that should be fine.

I.e. you can take reference screenshots from a production site and then compare it to the same site running on your local machine.

# Getting started

1. Clone this repository and open it
2. Install dependencies

```bash
$ yarn
```

3. Compile the project

```bash
yarn build
```

4. Take reference screenshots of your site

```bash
yarn reference https://yousite.com
```

5. Do changes to your site

6. Check for visual regression

```bash
yarn test https://yousite.com
```

7. If you are happy with the changes, approve them to make the last test a reference

```bash
yarn approve
```

## Configuration

The tool takes a site name as a parameter. It looks for a site map presumed to be at http://yoursite.com/sitemap.xml.

BackstopJS configuration is hardcoded in `src/backstop-config.ts`. You need to edit that file if you want to change screen resolutions, etc. See [BackstopJS documentation](https://github.com/garris/BackstopJS#working-with-your-config-file) for details.

## Development

This project is written in Typescript. The source files are in `src` directory.

To start the project in development mode mode

```bash
$ yarn dev
```

Based on [node-ts-starter](https://github.com/HorusGoul/node-ts-starter) by [Horus Lugo](https://github.com/HorusGoul).
