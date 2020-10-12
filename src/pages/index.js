import React from "react"
import { graphql, Link } from "gatsby"

export default function Home({ data }) {
  return (
    <>
      <div>YAML pages:</div>
      <ul>
        {data.allYamlPage.nodes.map(node => (
          <li key={node.path}><Link to={node.path}>{node.path}</Link></li>
        ))}
      </ul>
    </>
  )
}

export const query = graphql`
  {
    allYamlPage {
      nodes {
        path
      }
    }
  }
`
