const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schema = new Schema({
  // 用户名
  user_name: String,
  // 基金编码
  fund_code: String,
  // 所在策略组，(定投，波段)
  strategy: String,
  // 持仓记录，[{cost,shares,confirm_date}]
  position_record: {
    type: Array,
    default: []
  },
  create_at: {
    type: Date,
    default: Date.now
  }
})

// 不会重复
schema.index({ user_name: 1, fund_code: 1 }, { unique: true })
schema.index({ create_at: -1 })

module.exports = mongoose.model('UserFund', schema)
