import React from "react"
import { graphql } from "gatsby"

export default function SomePage({ data }) {
  return <p>{JSON.stringify(data)}</p>
}

export const query = graphql`
  query ($pagePath: String) {
    yamlPage(path: { eq: $pagePath }) {
      path
      metadata
      hero
    }
  }
`
