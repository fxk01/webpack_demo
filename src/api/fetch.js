/*
 fetch
 */

const _url = 'http://sdx.hefupb.com';
export default {
  fetchPost(url, params={}, assign, callback) {
    let defaults = {
      url: `${_url}${url}`,
      data: params,
      method: 'POST',
      dataType: 'json',
      callback,
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      success(result, status, xhr) {
        const rt = Object.assign(assign, result);
        if(status === 200) {
          callback(result);
        } else {

        }
      },
      error(result, status, xhr) {
        app.dialog.alert('接口参数错误');
        console.log(result, status, xhr)
      },
      statusCode: {
        400(xhr) {
          app.dialog.alert('接口不存在');
        }
      }
    };
    app.request(defaults);
  }
}
