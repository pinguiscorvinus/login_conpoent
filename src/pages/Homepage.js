import React from 'react'
//引入react-bootstrap.Container 用來排版
import { Container } from 'react-bootstrap'
//引入SCSS
import '../scss/Login_component.scss'

export class Homepage extends React.Component {
  render() {
    return (
      <div className="background">
        <Container>
          <div className="logininput">
            <h1>成功登入惹~~~~</h1>
          </div>
        </Container>
      </div>
    )
  }
}

export default Homepage
