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
      .get('https://run.mocky.io/v3/08f0de35-0328-4367-a79f-e4c65b83fd2d')
      .then(function (response) {
        // Success
        const memberdata = response.data
        dispatch(getmemberdata(memberdata))
      })
      .catch(function (error) {
        // Error
        console.log(error)
      })
  }
}
// 取得登入表單所輸入的資料，正常預想是在後端對資料庫送出比對，如果符合則將會員資料回傳前端，由最上面的API接收回傳資料，因為是假的，所以不回傳後端，直接寫入redux
export const getcurrentlogindata = (logindata) => ({
  type: 'SENT_LOGINDATA',
  currentlogindata: logindata,
})
export const passcurrentlogindata = (logindata) => {
  return (dispatch) => {
    dispatch(getcurrentlogindata(logindata))
  }
}
