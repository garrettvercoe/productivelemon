import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import { Grid, Divider, Label } from 'semantic-ui-react'
import Img from 'gatsby-image'
import './gridBlocks.css'
import { graphql } from 'gatsby'
import TitleSection from '../components/titleSection'
export default props => (
  <StaticQuery
    query={graphql`
      query AutomationGridQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { fileAbsolutePath: { regex: "/(taskAutomation)/.*.md$/" } }
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
    render={data => <TaskAutomation data={data} {...props} />}
  />
)

const TaskAutomation = ({ data }) => {
  const { edges: taskAutomation } = data.allMarkdownRemark
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
      <TitleSection>Task Automation</TitleSection>
      <Grid>
        {taskAutomation
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
