import { combineReducers } from 'redux'
//
const logindata = (state = [], action) => {
  switch (action.type) {
    case 'GET_LOGIONDATA':
      return action.value
    default:
      return state
  }
}
const LogincomponentReducers = combineReducers({
  logindata,
})
export { LogincomponentReducers }
