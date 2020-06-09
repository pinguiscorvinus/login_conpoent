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
  constructor(props) {
    super(props)
    this.state = {
      Email: '',
      password: '',
    }
  }

  componentDidMount() {
    this.props.fetchmemberdata()
  }
  //送出登入資料至redux
  sentlogindata = (logindata) => {
    let logindatas = logindata
    console.log(logindatas)
    // this.props.passcurrentlogindata(logindata)
  }

  render() {
    let loginemail = this.state.Email
    let loginpassword = this.state.password
    let logindata = [loginemail, loginpassword]
    console.log(logindata)
    return (
      <div>
        <Card className="logincard">
          <Card.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={(event) => {
                    this.setState({
                      Email: event.target.value,
                    })
                  }}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="密碼"
                  onChange={(event) => {
                    this.setState({
                      password: event.target.value,
                    })
                  }}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={() => {
                  this.sentlogindata(logindata)
                }}
              >
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
  return bindActionCreators({ fetchmemberdata, passcurrentlogindata }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
