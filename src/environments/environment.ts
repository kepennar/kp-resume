// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  serviceWorker: true,
  contentful: {
    baseUrl: 'https://cdn.contentful.com',
    spaceId: '6ww1yr2i4grh',
    accessToken:
      'c2869ad2ccb02431203c275ea22e0ebb157ef77c9ac224a8a18475188b8d4920'
  }
};
