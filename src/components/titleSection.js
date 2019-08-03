import React from 'react'
import { Link } from 'gatsby'
import './styles.css'
export default ({ children }) => (
  <React.Fragment>
    <div className="flex items-baseline border-b border-gray-light mb">
      <h2> {children}</h2>
      <Link
        className="fl-r border-yellow border-b  up mb-text mb-2"
        to="/page-2/"
      >
        View All
      </Link>
    </div>
  </React.Fragment>
)
