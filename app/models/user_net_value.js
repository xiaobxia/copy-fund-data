const mongoose = require('mongoose')

const Schema = mongoose.Schema
// 用户净值记录
const schema = new Schema({
  // 用户名
  user_name: String,
  // 自己组合的份额
  shares: {
    type: Number,
    default: 0
  },
  // 前一日净值
  pre_net_value: {
    type: Number,
    default: 1
  },
  // 净值
  net_value: {
    type: Number,
    default: 1
  },
  // 净值日期, YYYY-MM-DD
  net_value_date: String,
  // 仓位
  position: {
    type: Number,
    default: 0
  },
  // 资产
  asset: {
    type: Number,
    default: 0
  },
  asset_cost: {
    type: Number,
    default: 0
  },
  // 当日收益
  today_income: {
    type: Number,
    default: 0
  },
  create_at: {
    type: Date,
    default: Date.now
  }
})

// 用户日期唯一
schema.index({ user_name: 1, net_value_date: -1 }, { unique: true })

module.exports = mongoose.model('UserNetValue', schema)
