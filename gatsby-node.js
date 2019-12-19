const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
const { createPage } = actions

const templates = {
  blogPost : path.resolve(`./src/templates/blog-post.js`),
  //  blogList : path.resolve(`./src/templates/blog-list.js`),
}

 return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
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

  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `blog${post.node.fields.slug}`,
        component:templates.blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    
//     const postsPerPage = 3
//     const numberOfPages = Math.ceil(posts.length / postsPerPage)
//     Array.from({ length: numberOfPages }).forEach((_, i) => {
//       const isFirstPage = i === 0
//       const currentPage = i + 1
// if (isFirstPage) return
//       createPage({
//         path:i === 0 ? `/blog` : `/${i + 1}`,
//         component:templates. blogList,
//         context: {
//           limit: postsPerPage,
//           skip: i * postsPerPage,
//           numberOfPages,
//           currentPage: i + 1,
//         },
//       })
//     })
    
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
