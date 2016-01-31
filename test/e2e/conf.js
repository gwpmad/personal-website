exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['githubRepositoryListFeature.js'],
  capabilities: {
    browserName: 'chrome'
  }
};
