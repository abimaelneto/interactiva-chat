const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  transpilePackages: ["ui"],
  webpack(config, options) {
    const { webpack } = options;
    Object.assign(config.experiments, { topLevelAwait: true });

    config.plugins.push(
      new NextFederationPlugin({
        name: "cart",
        remotes: {
          // web: "web@http://localhost:3000/_next/static/chunks/remoteEntry.js",
        },
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Cart": "./pages/index.tsx",
        },
        shared: {},
      })
    );

    return config;
  },
};
