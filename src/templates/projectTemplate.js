import React from "react";
import Helmet from "react-helmet";
import Layout from '../components/layout';
import rehypeReact from "rehype-react";
import {Grid} from 'semantic-ui-react';
import Img from 'gatsby-image';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {},
}).Compiler


export default function Template({
  data 
}) {
  const project = data.markdownRemark; 
  return (
    <Layout>
    <div className="project-container">
     <Helmet title={`Gosh! - ${project.frontmatter.title}`} />
      <div className="project">
      <Grid>
    <Grid.Column mobile={0} tablet={3} computer={3}>
   </Grid.Column>  
    <Grid.Column mobile={12} tablet={9} computer={9}>  
        <h3 class="header">{project.frontmatter.title}</h3>
        <div class='blog'>{renderAst(project.htmlAst)}</div></Grid.Column></Grid>
      </div>
    </div></Layout>
    
  );
}
export const pageQuery = graphql`
  query ProjectByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        cover {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
;