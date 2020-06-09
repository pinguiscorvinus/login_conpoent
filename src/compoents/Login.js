import React from 'react'
//引入Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  fetchmemberdata,
  passcurrentlogindata,
} from '../action/Logindata_Action'
//引入react-bootstrap
import { Card, Form, Button } from 'react-bootstrap'

export class Login extends React.Component {
  componentDidMount(){
    this.props.fetchmemberdata()
  }
  render() {
    return (
      <div>
        <Card className="logincard">
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
// 取得Redux中store的值
const mapStateToProps = (store) => {
  return { logindata: store.LogincomponentReducers.logindata }
}
// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchmemberdata,passcurrentlogindata }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
