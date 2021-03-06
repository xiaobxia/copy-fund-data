const path = require('path')
const env = process.env.NODE_ENV
const isDev = env !== 'prod'

let dbAddress = 'mongodb://copyFundData:copyFundData@localhost:27017/copyFundData'

// 测试
if (isDev) {
  dbAddress = 'mongodb://copyFundData:copyFundData@47.92.210.171:27017/copyFundData'
}

const root = path.resolve(__dirname, '../')
function resolveRoot (dir) {
  return path.resolve(root, dir)
}
module.exports = {
  root: path.resolve(__dirname, '../'),
  project: {
    projectName: 'copyFundData'
  },
  server: {
    port: 3050,
    token: {
      key: 'xiaobxia',
      expiresIn: 60 * 60 * 24
    }
  },
  // 日志配置
  logger: {
    dir: resolveRoot('logs'),
    fileName: 'cheese.log',
    debugLogLevel: 'all',
    productLogLevel: 'info'
  },
  // 上传配置
  uploadDir: 'uploads',
  // 阿里云2，用于测试
  db: dbAddress,
  qiniu: {
    zone: 'Zone_z2'
  },
  // 邮件配置
  email: {
    senderAccount: {
      host: 'smtp.mxhichina.com',
      secureConnection: !isDev, // use SSL
      // port: 465, // port for secure SMTP
      port: isDev ? 25 : 465,
      // secure: true, // use TLS
      auth: {
        user: '',
        pass: ''
      },
      ignoreTLS: true
    },
    adminAccount: {
      user: ''
    },
    formName: 'Xiaobxia'
  }
}
