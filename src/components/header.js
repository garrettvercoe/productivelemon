import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'semantic-ui-react'
import logo from "../assets/logo.svg"
import "./layout.css"
import "./header.css"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
 <Link to={props.to} class="menuItem" >{props.children}</Link>
  </li>
)



const Header = ({ siteTitle }) => (
  <div style={{ marginBottom: '6rem', marginTop:'3rem' }}>

    <Container>
    <Link to="/" className="navbar-item">
    
            <img src={logo} alt="Garrett Vercoe" style={{ width: '90px' }} />

        </Link>
        
<ul style={{ listStyle: `none`, float: `right` }}>
<ListLink to="/projects/">Projects -></ListLink>
<ListLink to="/thoughts/"> Thoughts -></ListLink>
<ListLink to="/experiments/"> Experiments -></ListLink>
<ListLink to="/contact/">Inquiry -></ListLink>
</ul>
    </Container>
    
  </div>
)

export default Header

