import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Layout from '../components/layout';
import { Grid,  } from 'semantic-ui-react';
import "../components/header.css"
import Img from 'gatsby-image';


export default function Projects({ data }) {
  const { edges: projects } = data.allMarkdownRemark;
  return (
    <Layout>
    <Grid>
    <Grid.Column mobile={0} tablet={3} computer={3}></Grid.Column>  
    <Grid.Column mobile={12} tablet={9} computer={9}>
    <div className="projects">
    <h3 class="header">Projects.</h3>
    <Grid>
      {projects
        .filter(project => project.node.frontmatter.title.length > 0)
        .map(({ node: project }) => {
          return (
            
             <Grid.Column mobile={12} tablet={6} computer={4}>
         
            <div className="project-preview" key={project.id}>
            <div class="imgBox"><Link to={project.frontmatter.path} class="itemLink"><Img className="underline" fluid={project.frontmatter.cover.childImageSharp.fluid} />
            </Link></div>
            <p class="date">{project.frontmatter.date}</p>
               <h4 class="noPad"> <Link to={project.frontmatter.path} class="itemLink">{project.frontmatter.title}</Link></h4>
              
              <p>{project.excerpt}</p>
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
  query ProjectQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
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
    }
  }
`;