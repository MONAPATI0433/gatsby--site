import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PaginationLink from '../components/PaginationLink'
// import SEO from "../components/seo"
const BlogList = props => {
  const { data } = this.props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges
  const { currentPage, numPages } = this.props.pageContext
    return (
      <Layout pageTitle={`page: ${currentPage}`}>
     {posts.map(({ node }) => {
                        const title = node.frontmatter.title || node.fields.slug
    })}
        <PaginationLink currentPage={currentPage} numberOfPages={numberOfPages} />
      </Layout>
    )
      }

      export default BlogList

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`