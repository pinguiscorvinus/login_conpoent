import React, { Component } from 'react'
import Login from '../compoents/Login'
import { Container } from 'react-bootstrap'
//引入SCSS
import '../scss/Login_conpoent.scss'

export class Homeindex extends Component {
  render() {
    return (
      <div className="background">
        <Container>
          <div className="logininput">
            <Login />
          </div>
        </Container>
      </div>
    )
  }
}

export default Homeindex
