import React from "react"
import { Link } from "gatsby"

const ProjectLink = ({ project }) => (
  <div>
    <Link to={project.frontmatter.path}>
      {project.frontmatter.title} ({project.frontmatter.date})
    </Link>
  </div>
)

export default ProjectLink