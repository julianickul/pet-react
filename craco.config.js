// const path = require('path');
// module.exports = {
//   webpack: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//     },
//   },
// };

// const {CracoAliasPlugin} = require('react-app-alias')

// module.exports = {
//   plugins: [
//     {
//       plugin: CracoAliasPlugin,
//       options: {}
//     }
//   ]

const CracoAlias = require("craco-alias");

module.exports = {
    plugins: [
      {
        plugin: CracoAlias,
        options: {
            source: "tsconfig",
            // baseUrl SHOULD be specified
            // plugin does not take it from tsconfig
            baseUrl: "./src",
            /* tsConfigPath should point to the file where "baseUrl" and "paths" 
            are specified*/
            tsConfigPath: "./tsconfig.paths.json"
        }
      }
  ]
};
