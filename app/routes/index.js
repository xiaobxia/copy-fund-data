const Router = require('koa-router')
const reqlib = require('app-root-path').require
const config = reqlib('/config/index')
const controllers = require('../controllers')

const projectName = config.project.projectName
if (!projectName) {
  console.error('projectName is required')
  process.exit()
}
const router = new Router({
  prefix: `/${projectName}`
})

/**
 * 端口测试
 */
router.get('/', async function (ctx) {
  ctx.body = 'ok'
})

// 基金数据复制
router.get('/fund/copyUserFund', controllers.fundController.copyUserFund)
router.get('/fund/copyUserNetValue', controllers.fundController.copyUserNetValue)
router.get('/fund/exportUserFund', controllers.fundController.exportUserFund)
router.get('/fund/exportUserNetValue', controllers.fundController.exportUserNetValue)

module.exports = router
