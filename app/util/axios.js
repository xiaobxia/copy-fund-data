const axios = require('axios')
const qs = require('qs')

const env = process.env.NODE_ENV
const isDev = env !== 'prod'

let host = '47.98.140.76'
if (isDev) {
  host = '127.0.0.1'
}

function makeUrl (path) {
  return `http://${host}:3020/fundServer/${path}`
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
