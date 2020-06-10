import React from 'react'
//引入react-bootstrap.Container 用來排版
import { Container, Button } from 'react-bootstrap'
//引入SCSS
import '../scss/Login_component.scss'

export class Prelogin extends React.Component {
  render() {
    return (
      <div className="background">
        <Container>
          <Button
            className="buttontologin"
            variant="primary"
            onClick={() => {
              window.location.href = './login'
            }}
          >
            登入
          </Button>
        </Container>
      </div>
    )
  }
}

export default Prelogin
