import React, { Component } from 'react'
import { Card, Form, Button } from 'react-bootstrap'

export class Login extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="密碼" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                登入
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Login
