import { combineReducers } from 'redux'
//預設值
let initState1 = {
  currentlogindata: ['', ''],
}
//取得會員資料
const memberdata = (state = [], action) => {
  switch (action.type) {
    case 'GET_MEMBERDATA':
      return action.value
    default:
      return state
  }
}
//取得輸入的登入帳密
const logindata = (state = initState1, action) => {
  switch (action.type) {
    case 'SENT_LOGINDATA':
      return Object.assign({}, state, {
        currentlogindata: action.currentlogindata,
      })
    default:
      return state
  }
}
const LogincomponentReducers = combineReducers({
  memberdata,
  logindata,
})
export { LogincomponentReducers }
