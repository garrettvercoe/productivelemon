import React from 'react'
import { Link } from 'gatsby'
import { Container, Icon } from 'semantic-ui-react'
import Logo from '../assets/Logo.png'
import './styles.css'

const ListLink = props => (
  <li class="item-list">
    <Link
      to={props.to}
      class="menuItem"
      activeClassName="menuItemActive"
      partiallyActive={true}
    >
      {props.children}
    </Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fff`,
      marginBottom: `1rem`,

      boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.16)',
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1080,
        padding: `0.5rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        <img
          src={Logo}
          alt="Garrett Vercoe"
          class="logo"
          style={{ height: '40px' }}
        />
      </Link>
      <div style={{ margin: ' 2rem 0 2rem 0' }}>
        {' '}
        <h1>
          Level Up Your Productivity{' '}
          <span style={{ paddingLeft: '5px' }}>🚀</span>
        </h1>
        <h3 style={{ color: '#717171', marginRight: '6rem', fontWeight: 400 }}>
          A curation of tools, tips, and tricks for maximizing your productivity
          in life.{' '}
        </h3>
        <ul class="menu-list">
          <ListLink to="">All</ListLink>
          <ListLink to="/taskmanagement/"> Task Management</ListLink>
          <ListLink to="/notemanagement/"> Note Management</ListLink>
          <ListLink to="/reading/">Reading</ListLink>
        </ul>
      </div>
    </div>
  </header>
)

export default Header
