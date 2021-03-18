const {
  addMatchImageSnapshotPlugin,
} = require('mzedel-cypress-image-snapshot/plugin');

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
};
