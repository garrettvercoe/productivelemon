import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import { Grid, Divider, Label } from 'semantic-ui-react'
import Img from 'gatsby-image'
import './gridBlocks.css'
import TitleSection from '../components/titleSection'
export default props => (
  <StaticQuery
    query={graphql`
      query TaskGridQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { fileAbsolutePath: { regex: "/(taskManagement)/.*.md$/" } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 100)
              id
              frontmatter {
                title
                tags
                subtitle
                date(formatString: "YYYY")
                link
                cover {
                  childImageSharp {
                    fluid(maxWidth: 480) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <TaskManagement data={data} {...props} />}
  />
)

const TaskManagement = ({ data }) => {
  const { edges: taskManagement } = data.allMarkdownRemark
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1080,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      {' '}
      <Divider section hidden />
      <TitleSection>Task Management</TitleSection>
      <Grid>
        {taskManagement
          .filter(item => item.node.frontmatter.title.length > 0)
          .map(({ node: item }) => {
            return (
              <Grid.Column mobile={12} tablet={6} computer={3}>
                <div className="basic-card rounded">
                  <a href={item.frontmatter.link} target="#">
                    <div class="imgBox">
                      <Img
                        className="underline"
                        fluid={item.frontmatter.cover.childImageSharp.fluid}
                      />
                    </div>
                    <div className="card-content-box">
                      <h4> {item.frontmatter.title}</h4>
                      <p class="desc">{item.frontmatter.subtitle}</p>
                      {/* {item.frontmatter.tags.map(elem => (
                        <div class="tag-outer">
                          <div class="tag">{elem}</div>
                        </div>
                      ))} */}
                    </div>
                  </a>
                </div>
              </Grid.Column>
            )
          })}
      </Grid>
    </div>
  )
}
