module.exports = {
  plugins: [
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: `YamlPage`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/yaml-pages/`,
      },
    },
  ],
}
