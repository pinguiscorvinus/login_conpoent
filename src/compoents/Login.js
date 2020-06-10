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
//引入sweetalert2
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import sha1 from 'sha1'
const MySwal = withReactContent(Swal)

export class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Email: '',
      password: '',
    }
  }
  //取得回傳會員資料
  componentDidMount() {
    this.props.fetchmemberdata()
  }
  //送出登入資料至redux
  sentlogindata = (logindata) => {
    let logindatas = logindata
    console.log(logindatas)
    this.props.passcurrentlogindata(logindata)
  }

  render() {
    //傳送登入資料至REDUX
    const loginemail = this.state.Email
    const loginpassword = this.state.password
    const logindata = [loginemail, loginpassword]
    //登入
    const logindatas = this.props.logindata.currentlogindata
    const { memberdata = [] } = this.props.memberdata
    const reduxloginmail = logindatas[0]
    const reduxloginpassword = sha1(logindatas[1])
    let memberdatas
    let memberemail
    let memberpassword
    if (memberdata.length > 0) {
      memberdatas = { memberdetail: memberdatas = {} } = memberdata[0]
      memberemail = memberdatas.memberdetail.Email
      memberpassword = memberdatas.memberdetail.Password
    }
    console.log(memberpassword)
    console.log(reduxloginpassword)
    // console.log(reduxloginpassword)
    let logincheck = () => {
      if (logindatas[0] === '') {
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '請確實輸入Email!',
        })
      } else if (logindatas[1] === '') {
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '請確實輸入密碼!',
        })
      } else {
        if (reduxloginmail !== memberemail) {
          MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email錯誤',
          })
        } else if (reduxloginpassword !== memberpassword) {
          MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '密碼錯誤',
          })
        } else if (
          reduxloginmail === memberemail &&
          reduxloginpassword === memberpassword
        ) {
          MySwal.fire('歡迎回來!', 'Redirect in 1 seconds...!', 'success')
          setTimeout(function () {
            window.location.href = './home'
          }, 1000)
        }
      }
    }
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
                    this.sentlogindata(logindata)
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
                    this.sentlogindata(logindata)
                  }}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button
                variant="primary"
                onClick={() => {
                  this.sentlogindata(logindata)
                  logincheck()
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
  return {
    logindata: store.LogincomponentReducers.logindata,
    memberdata: store.LogincomponentReducers.memberdata,
  }
}
// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchmemberdata, passcurrentlogindata }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
