exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allYamlPage {
        nodes {
          id
          path

          # It is not recommended to put actual data to context
          # (query the data from your template instead, see src/templates/some-page.js)
          #metadata
          #hero
        }
      }
    }
  `).then(result => {
    result.data.allYamlPage.nodes.forEach(node => {
      console.log(`creating YAML page for`, node)
      createPage({
        path: node.path,
        component: require.resolve("./src/templates/some-page.js"),
        context: {
          pagePath: node.path,
        },
      })
    })
  })
}
