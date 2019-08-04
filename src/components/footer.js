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
          Made from scratch with love by{' '}
          <a href="https://garrettvercoe.com/"> Garrett Vercoe</a>. 💛{' '}
        </footer>
      </>
    )
  }
}

export default Footer
