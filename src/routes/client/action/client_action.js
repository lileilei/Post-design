import qs from 'qs'
/*
 * 服务列表请求
 */
export const CLIENT_RESULT_POST = 'CLIENT_RESULT_POST'
export function getResultType(result) {
  return {
    type: '',
    result
  }
}
export function getResult(opts, type) {
  return (dispatch, getState) => {
    return axios.get('/', qs.stringify(opts))
      .then(function (result) {
        dispatch(getResultType(result.data))
      }).catch(function (error) {

      })
  }
}



