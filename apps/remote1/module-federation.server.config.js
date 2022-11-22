// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'remote1',
  exposes: {
    './Module': 'apps/remote1/src/remote-entry.ts',
  },
};

module.exports = moduleFederationConfig;
