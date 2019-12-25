// const Proxy = require('../proxy')
const axios = require('../util/axios')

// const UserFundProxy = Proxy.UserFund
// const UserNetValueProxy = Proxy.UserNetValue

exports.copyUserFund = async function () {
  const res = axios.get('copy/copyUserFunds')
}

exports.copyUserNetValue = async function () {
  const res = axios.get('copy/copyUserNetValues')
}
