exports.copyUserFund = async function (ctx) {
  try {
    await ctx.services.fund.copyUserFund()
    ctx.body = ctx.resuccess({})
  } catch (err) {
    ctx.body = ctx.refail(err)
  }
}

exports.copyUserNetValue = async function (ctx) {
  try {
    await ctx.services.fund.copyUserNetValue()
    ctx.body = ctx.resuccess({})
  } catch (err) {
    ctx.body = ctx.refail(err)
  }
}
