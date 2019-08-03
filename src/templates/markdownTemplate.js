import React from 'react'
import Helmet from 'react-helmet'
import rehypeReact from 'rehype-react'
import { Grid } from 'semantic-ui-react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import './markdown.css'
import Gleft from '../components/GLeft'
import Gright from '../components/GRight'
import Gthird from '../components/Gthird'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {},
}).Compiler

export default function Template({ data }) {
  const project = data.markdownRemark
  const folderRegex = /(pages\/)(.+)\/(.*\/)/
  const toMatch = project.fileAbsolutePath
  const section = folderRegex.exec(toMatch)
  return (
    <>
      <div className="project-container">
        <Helmet title={`${project.frontmatter.title}`} />
        <div className="project">
          <Grid>
            <Grid.Column mobile={0} tablet={3} computer={3}>
              <div class="markdown-info">
                <p class="markdown-label">Date</p>
                <p class="markdown-info-text">{project.frontmatter.date}</p>
                {/* <p class="markdown-label">{project.frontmatter.label}</p> */}
                {project.frontmatter.list.map(elem => (
                  <div class="markdown-info-text">{elem}</div>
                ))}
              </div>
            </Grid.Column>
            <Grid.Column mobile={12} tablet={9} computer={9}>
              <div class="header-box">
                <Link to={section[2]} class="markdown-section">
                  {section[2]}
                </Link>
                <h3 class="markdown-header">{project.frontmatter.title}</h3>
                <p class="markdown-subtitle">{project.frontmatter.subtitle}</p>
              </div>
              <div class="markdown-body">
                <Grid>{renderAst(project.htmlAst)}</Grid>
              </div>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    </>
  )
}
export const pageQuery = graphql`
  query Project($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      fileAbsolutePath
      frontmatter {
        date(formatString: "MMMM, YYYY")
        path
        subtitle
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
