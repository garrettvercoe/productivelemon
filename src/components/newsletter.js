import React from 'react'
import { Form, Button, Input, Label, Message } from 'semantic-ui-react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import '../templates/markdown.css'

export default class Newsletter extends React.Component {
  state = {
    email: '',
    message: '',
    color: 'black',
    visible: 'none',
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const email = target.name

    this.setState({
      [email]: value,
    })
    console.log(this.state.email)
  }

  _handleSubmit = event => {
    event.preventDefault()
    console.log('pressed')
    addToMailchimp(this.state.email).then(data => {
      if (data.result == 'error') {
        this.setState({
          color: 'red',
        })
      }

      this.setState({
        message: data.msg,
        visible: 'block',
      })
      console.log(this.state.message)
    })

    // listFields are optional if you are only capturing the email address.
  }

  render() {
    return (
      <Form onSubmit={this._handleSubmit}>
        <p>
          Join my newsletter to learn of interesting tech product releases and
          posts. Unsubscribe at any time. 🔥
        </p>
        <Form.Group>
          <Form.Field
            control={Input}
            size="small"
            placeholder="woohoo@gmail.com"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            onSubmit={this._handleSubmit}
          />
          <Form.Field control={Button} basic type="submit" size="tiny">
            Sign up
          </Form.Field>
        </Form.Group>
        <div
          class="markdown-body"
          style={{
            display: this.state.visible,
          }}
        >
          <Label basic color={this.state.color}>
            <div dangerouslySetInnerHTML={{ __html: this.state.message }} />
          </Label>{' '}
        </div>
      </Form>
    )
  }
}
