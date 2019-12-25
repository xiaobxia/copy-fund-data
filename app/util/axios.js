const axios = require('axios')
const qs = require('qs')

function makeUrl (path) {
  return `http://47.98.140.76:3020/fundServer/${path}`
}

// 获取基金的买卖费率
exports.get = function (url, query, options) {
  let queryString = ''
  if (query) {
    query.timestamp = new Date().getTime()
    queryString = qs.stringify(query)
  } else {
    queryString = qs.stringify({ timestamp: new Date().getTime() })
  }
  return axios.get(makeUrl(url + (queryString ? '?' + queryString : '')), options).then(data => data.data)
}
