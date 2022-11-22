// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'host1',
  remotes: ['remote1'],
};

module.exports = moduleFederationConfig;
