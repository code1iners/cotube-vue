module.exports = {
  client: {
    service: {
      name: "cosers",
      // URL to the GraphQL API
      url: "https://cosers-development.herokuapp.com/graphql",
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js"],
  },
};
