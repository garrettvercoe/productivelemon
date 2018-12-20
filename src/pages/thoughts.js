import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Layout from '../components/layout';
import { Grid, Card } from 'semantic-ui-react';

export default function Thoughts({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
    <Grid>
    <Grid.Column mobile={0} tablet={3} computer={3}></Grid.Column>  
    <Grid.Column mobile={12} tablet={9} computer={9}>
    <div className="blog-posts">
    <Grid>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            
             <Grid.Column mobile={12} tablet={4} computer={4}>
    
            <div className="blog-post-preview" key={post.id}>
              <h5>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h5>
              <p><em>{post.frontmatter.date}</em></p>
              <p>{post.excerpt}</p>
            </div>
         
            </Grid.Column> 
            
          );
        })}
         </Grid>
    </div>
   
    </Grid.Column>
    </Grid>
    </Layout>
  );
}
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;