//引入axios
import axios from 'axios'
// 取得會員資料
export const getmemberdata = (data) => ({
  type: 'GET_MEMBERDATA',
  value: data,
})
export const fetchmemberdata = () => {
  return (dispatch) => {
    axios
      .get('https://run.mocky.io/v3/4159fde4-7785-4120-8842-5f8d58a29b0b')
      .then(function (response) {
        // Success
        const memberdata = response.data
        console.log(memberdata)
        dispatch(getmemberdata(memberdata))
      })
      .catch(function (error) {
        // Error
        console.log(error)
      })
  }
}
// 取得登入表單資料
export const getcurrentlogindata = (logindata) => ({
  type: 'SENT_LOGINDATA',
  currentlogindata: logindata,
})
export const passcurrentlogindata = (logindata) => {
  return (dispatch) => {
    dispatch(getcurrentlogindata(logindata))
  }
}
