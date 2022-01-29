/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.onCreatePage = async({page,actions})=>{
    const {createPage} = actions;
    console.log("hewewewew")
    if(page.path.match(/^\//)){
        console.log("hewewewew")
        createPage({
            path:"/:id",
            matchPath:"/:id",
            component: path.resolve('src/pages/page-2.tsx')
        })
    }
}