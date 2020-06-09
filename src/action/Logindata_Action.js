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
// 取得登入表單所輸入的資料，因為是假的，所以不回傳後端，直接寫入redux
export const getcurrentlogindata = (logindata) => ({
  type: 'SENT_LOGINDATA',
  currentlogindata: logindata,
})
export const passcurrentlogindata = (logindata) => {
  return (dispatch) => {
    dispatch(getcurrentlogindata(logindata))
  }
}
//向後端送出登入帳號密碼，正常預想是在後端對資料庫送出比對，如果符合則將會員資料回傳前端，由最上面的API接收回傳資料
//因為是假的所以註解掉，避免出現BUG
// export const Sentlogindata = (data) => ({
//   type: 'SENT_COMMENT',
//   value: data,
// })
// export const Submmitlocationcomment = (formData) => {
//   console.log(formData)
//   return async (dispatch) => {
//     const fd = new FormData()
//     fd.append('Email', formData.Email)
//     fd.append('password', formData.password)
//     console.log(fd)
//     const request = new Request('http://unexistbackend', {
//       method: 'POST',
//       body: fd,
//     })
//     const response = await fetch(request)
//     const data = await response.json()
//     dispatch(Sentlogindata(data))
//   }
// }
