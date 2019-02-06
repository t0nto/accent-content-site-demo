import React from 'react'
import { graphql } from 'gatsby'

const DemoPage = ({data}) => {
return (
<div>
{data.allMarkdownRemark.edges.map(({node}) => (
<div key={node.id}>
<h2>{node.frontmatter.title}</h2>
<div
          className="demo-content"
          dangerouslySetInnerHTML={{ __html: node.html }}
        />   
</div>
))}
</div>
)
}
    
    



export const query = graphql`
query DemoPageQuery {
    allMarkdownRemark(filter: {frontmatter: {path: {eq: "/profile"}}}) {
      edges {
        node {
            frontmatter {
                title
            }
            id
          html
        }
      }
    }
  }
  `

export default DemoPage