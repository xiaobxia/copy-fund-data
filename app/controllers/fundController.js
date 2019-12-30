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

exports.exportUserFund = async function (ctx) {
  try {
    const res = await ctx.services.fund.exportUserFund()
    ctx.body = ctx.resuccess(res)
  } catch (err) {
    ctx.body = ctx.refail(err)
  }
}

exports.exportUserNetValue = async function (ctx) {
  try {
    const res = await ctx.services.fund.exportUserNetValue()
    ctx.body = ctx.resuccess(res)
  } catch (err) {
    ctx.body = ctx.refail(err)
  }
}
