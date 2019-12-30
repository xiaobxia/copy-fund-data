const Proxy = require('../proxy')
const axios = require('../util/axios')

const UserFundProxy = Proxy.UserFund
const UserNetValueProxy = Proxy.UserNetValue

exports.copyUserFund = async function () {
  const res = await axios.get('copy/copyUserFunds')
  const list = res.data.list
  const old = await UserFundProxy.find({})
  old.forEach(async (item) => {
    await UserFundProxy.delete({
      user_name: item.user_name,
      fund_code: item.fund_code
    })
  })
  list.forEach(async (item) => {
    await UserFundProxy.newAndSave({
      user_name: item.user_name,
      fund_code: item.fund_code,
      strategy: item.strategy,
      position_record: item.position_record
    })
  })
}

exports.copyUserNetValue = async function () {
  const res = await axios.get('copy/copyUserNetValues')
  const list = res.data.list
  const old = await UserNetValueProxy.find({})
  old.forEach(async (item) => {
    await UserNetValueProxy.delete({
      user_name: item.user_name,
      net_value_date: item.net_value_date
    })
  })
  list.forEach(async (item) => {
    await UserNetValueProxy.newAndSave({
      user_name: item.user_name,
      net_value_date: item.net_value_date,
      // 自己组合的份额
      shares: item.shares,
      // 前一日净值
      pre_net_value: item.pre_net_value,
      // 净值
      net_value: item.net_value,
      // 仓位
      position: item.position,
      // 资产
      asset: item.asset,
      asset_cost: item.asset_cost,
      // 当日收益
      today_income: item.today_income,
      // 总盈亏
      income: item.income
    })
  })
}

exports.exportUserFund = async function () {
  return UserFundProxy.find({})
}

exports.exportUserNetValue = async function () {
  return UserNetValueProxy.find({})
}
