const models = require('../models')

const UserFundModel = models.UserFund

/**
 * 基本
 */

exports.UserFundModel = UserFundModel

exports.newAndSave = function (data) {
  const UserFund = new UserFundModel(data)
  return UserFund.save()
}

exports.delete = function (query) {
  return UserFundModel.remove(query)
}

exports.update = function (query, data) {
  return UserFundModel.update(query, {
    $set: data
  })
}

exports.find = function (query, opt) {
  return UserFundModel.find(query, {}, opt)
}

exports.findOne = function (query) {
  return UserFundModel.findOne(query)
}

exports.findOneById = function (id) {
  return UserFundModel.findById(id)
}

exports.check = function (query, opt) {
  return UserFundModel.findOne(query, '_id', opt)
}

exports.count = function (query) {
  return UserFundModel.count(query)
}
