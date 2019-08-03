import React, { Component } from 'react'
import { Link } from 'gatsby'
import Newsletter from './newsletter'
import './Footer.css'
import { Button, Input, Grid, Form } from 'semantic-ui-react'

const ALink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <small>
      <a href={props.to} class="bodyLink" target="_blank">
        {props.children}
      </a>
    </small>
  </li>
)

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer">
          <Grid>
            <Grid.Column computer={8} mobile={12}>
              <Newsletter />
            </Grid.Column>
          </Grid>
          <ul style={{ listStyle: `none`, float: `left`, paddingLeft: '0rem' }}>
            Made from scratch with love. 💛{' '}
            <a href="/portfolio" class="bodyLink">
              Find out how
            </a>{' '}
            <br />
            <ALink to="https://www.google.com">Copyright 2018</ALink>
            <ALink to="https://www.linkedin.com/in/garrett-vercoe/">
              LinkedIn{' '}
            </ALink>
            <ALink to="https://github.com/garrettvercoe"> Github </ALink>
            <ALink to="https://www.dropbox.com/s/q27z4mc6pl0of8t/VercoeGarrett.pdf?dl=0">
              {' '}
              Resume
            </ALink>
            <ALink to="https://www.instagram.com/garrettvercoe/">
              Instagram
            </ALink>
          </ul>
        </footer>
      </>
    )
  }
}

export default Footer
