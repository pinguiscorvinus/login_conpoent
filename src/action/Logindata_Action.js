//引入axios
import axios from 'axios'
// 取得口罩地圖資料
export const getlogindata = (data) => ({
  type: 'GET_LOGIONDATA',
  value: data,
})
export const fetchMuskmapdata = () => {
  return (dispatch) => {
    axios
      .get('./mockdata/mockdata.json')
      .then(function (response) {
        // Success
        const logindata = response.data
        dispatch(getlogindata(logindata))
      })
      .catch(function (error) {
        // Error
        console.log(error)
      })
  }
}
