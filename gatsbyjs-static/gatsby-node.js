const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;

  const postTemplate = path.resolve('src/templates/post.js');
  //run query to get all md files
  return graphql(`{
    allMarkdownRemark{
      edges {
        node{
          html
          id
          frontmatter{
            path
            title
          }
        }
      }
    }
  }`)
  .then(res => {
    if(res.errors){
      return Promise.reject(res.errors);
    }
    // if no errors in Promise, get data
    res.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path:node.frontmatter.path,
        component: postTemplate

      })
    })
  })
}
