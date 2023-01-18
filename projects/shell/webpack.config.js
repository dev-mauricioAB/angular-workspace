const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  remotes: {
    "application-a":
      "https://angular-workspace-application-a.vercel.app/remoteEntry.js",
    "application-b":
      "https://angular-workspace-application-b.vercel.app/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
