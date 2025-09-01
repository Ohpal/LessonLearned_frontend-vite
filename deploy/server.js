const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const path = require('path')
const fs = require('fs')
const winston = require('winston')
require('winston-daily-rotate-file')

// 프로메테우스 데이터 expoter 설정
// const uptime = require('./metrics/uptime');
// const client = require('prom-client');
// const collectDefaultMetrics = client.collectDefaultMetrics;
// const Registry = client.Registry;
// const register = new Registry();
// collectDefaultMetrics({ register });
// register.registerCollector(uptime(register));

const app = express()
const date = new Date()

// const clientIp = Object.values(require('os').networkInterfaces())
//   .flat()
//   .filter((item) => !item.internal && item.family === 'IPv4')
//   .find(Boolean).address

const distDir = path.join(__dirname, '/dist')

// console.log('clientIP = ', clientIp)
console.log('distDir = ', distDir)
console.log('configPath =', process.env.VUE_APP_CONFIG_PATH)
console.log('logPath =', process.env.VUE_APP_LOG_PATH)
console.log('env.mode = ', process.env.NODE_ENV)
console.log('apiTarget = ', process.env.VUE_APP_API_TARGET)
console.log('https port =', process.env.VUE_APP_PORT_HTTPS)
console.log('http port =', process.env.VUE_APP_PORT_HTTP)
// vue-cli (npm run serve)로 실행시킨 경우 MFE가 정상적으로 동작하지 않는다.
// 해당 웹서버를 통해서 동작하게한다.

/* winston logger */
const level = () => {
  const env = process.env.NODE_ENV || 'development'
  const isDevelopment = env === 'development'
  return isDevelopment ? 'debug' : 'warn'
}

const format = winston.format.combine(
  winston.format.timestamp({ format: ' YYYY-MM-DD HH:mm:ss ||' }),
  winston.format.printf((info) => `${info.timestamp} [ ${info.level} ] ${info.message}`)
)

const logger = winston.createLogger({
  format,
  level: level(),
  transports: [
    new winston.transports.DailyRotateFile({
      level: 'info',
      datePattern: 'YYYY-MM-DD',
      dirname: process.env.VUE_APP_LOG_PATH,
      filename: 'svc-starter-ui-%DATE%.log',
      zippedArchive: true,
      handleExceptions: true,
    }),
    new winston.transports.DailyRotateFile({
      level: 'error',
      datePattern: 'YYYY-MM-DD',
      dirname: process.env.VUE_APP_LOG_PATH,
      filename: 'svc-starter-ui-%DATE%.error.log',
      zippedArchive: true,
    }),
    new winston.transports.Console({
      handleExceptions: true,
    }),
  ],
})
/* winston logger */

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  //https 설정
  const https = require('https')
  const options = {
    key: fs.readFileSync(`${process.env.VITE_CONFIG_PATH}/ssl/server.key`).toString(),
    cert: fs.readFileSync(`${process.env.VITE_CONFIG_PATH}/ssl/server.crt`).toString(),
    passphrase: 'blueone',
  }

  const httpsServer = https.createServer(options, app)
  const httpsPort = process.env.VITE_PORT_HTTPS
  httpsServer.listen(httpsPort, () => {
    console.log(`${date.toLocaleString()} app listening at ${httpsPort}`)
  })

  // app.use(createProxyMiddleware('/sdf', { target: 'http://192.168.7.169:3080/', changeOrigin: true }))
  app.use(
    createProxyMiddleware('/krakend', {
      target: `${process.env.VITE_API_TARGET}`,
      pathRewrite: { '^/krakend': '' },
      changeOrigin: true,
      onError: (err, req, res) => {
        logger.error(JSON.stringify(err))
      },
      onProxyReq: function (proxyReq, req, rsp) {
        const logString = `||REQ|HTTP|${req.method}|${proxyReq.host}|||||${req.headers['x-apiversion']}|${req.url}|`

        logger.info(logString)
      },
      onProxyRes: function (proxyRes, req, res) {
        let logString = `||RES|HTTP|${res.req.method}|${proxyRes.req.host}|||||${res.req.headers['x-apiversion']}|${res.req.url}|`

        proxyRes.on('data', (data) => {
          if (!proxyRes.headers['content-type'].includes('octet-stream') && !proxyRes.headers['content-type'].includes('image')) {
            const bufferAsString = data.toString('utf-8')
            logString += bufferAsString
            logger.info(logString)
          } else logger.info(logString)
        })
      },
    })
  )
  app.use(
    createProxyMiddleware('/api/v1/ws', {
      target: `${process.env.VITE_WS_TARGET}`,
      changeOrigin: true,
      ws: true,
      onError: (err, req, res) => {
        logger.error(JSON.stringify(err))
      },
      onProxyReq: function (proxyReq, req, rsp) {
        const logString = `||REQ|HTTP|${req.method}|${proxyReq.host}|||||${req.headers['x-apiversion']}|${req.url}|`

        logger.info(logString)
      },
      onProxyRes: function (proxyRes, req, res) {
        let logString = `||RES|HTTP|${res.req.method}|${proxyRes.req.host}|||||${res.req.headers['x-apiversion']}|${res.req.url}|`

        proxyRes.on('data', (data) => {
          if (!proxyRes.headers['content-type'].includes('octet-stream') && !proxyRes.headers['content-type'].includes('image')) {
            const bufferAsString = data.toString('utf-8')
            logString += bufferAsString
            logger.info(logString)
          } else logger.info(logString)
        })
      },
    })
  )
}

app.use(
  createProxyMiddleware('/rims-api', {
    target: `http://localhost:4550/rims-api`,
    pathRewrite: { '^/rims-api': '' },
    changeOrigin: true,
    logLevel: 'debug',
    onError: (err, req, res) => {
      logger.error(JSON.stringify(err))
    },
    onProxyReq: function (proxyReq, req, rsp) {
      const logString = `||REQ|HTTP|${req.method}|${proxyReq.host}|||||${req.headers['x-apiversion']}|${req.url}|`

      logger.info(logString)
    },
    onProxyRes: function (proxyRes, req, res) {
      let logString = `||RES|HTTP|${res.req.method}|${proxyRes.req.host}|||||${res.req.headers['x-apiversion']}|${res.req.url}|`

      proxyRes.on('data', (data) => {
        if (!proxyRes.headers['content-type'].includes('octet-stream') && !proxyRes.headers['content-type'].includes('image')) {
          const bufferAsString = data.toString('utf-8')
          logString += bufferAsString
          logger.info(logString)
        } else logger.info(logString)
      })
    },
  })
)
/** proxy 설정 **/
app.use(
  createProxyMiddleware('/krakend', {
    target: `${process.env.VITE_API_TARGET}`,
    pathRewrite: { '^/krakend': '' },
    changeOrigin:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                true,
    logLevel: 'debug',
    onError: (err, req, res) => {
      logger.error(JSON.stringify(err))
    },     
    onProxyReq: function (proxyReq, req, rsp) {
      const logString = `||REQ|HTTP|${req.method}|${proxyReq.host}|||||${req.headers['x-apiversion']}|${req.url}|`

      logger.info(logString)
    },
    onProxyRes: function (proxyRes, req, res) {
      let logString = `||RES|HTTP|${res.req.method}|${proxyRes.req.host}|||||${res.req.headers['x-apiversion']}|${res.req.url}|`

      proxyRes.on('data', (data) => {
        if (!proxyRes.headers['content-type'].includes('octet-stream') && !proxyRes.headers['content-type'].includes('image')) {
          const bufferAsString = data.toString('utf-8')
          logString += bufferAsString
          logger.info(logString)
        } else logger.info(logString)
      })
    },
  })
)
app.use(
  createProxyMiddleware('/api/v1/ws', {
    target: `${process.env.VITE_WS_TARGET}`,
    changeOrigin: true,
    ws: true,
    logLevel: 'debug',
    onError: (err, req, res) => {
      logger.error(JSON.stringify(err))
    },
    onProxyReq: function (proxyReq, req, rsp) {
      const logString = `||REQ|HTTP|${req.method}|${proxyReq.host}||||||${req.url}|`

      logger.info(logString)
    },
    onProxyRes: function (proxyRes, req, res) {
      let logString = `||RES|HTTP|${res.req.method}|${proxyRes.req.host}||||||${res.req.url}|`

      proxyRes.on('data', (data) => {
        if (!proxyRes.headers['content-type'].includes('octet-stream') && !proxyRes.headers['content-type'].includes('image')) {
          const bufferAsString = data.toString('utf-8')
          logString += bufferAsString
          logger.info(logString)
        } else logger.info(logString)
      })
    },
  })
)

app.use(express.static(distDir))
app.get('*', (req, res) => {
  res.sendFile(distDir + '/index.html', function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

const port = process.env.VITE_PORT_HTTP

app.listen(4500, () => {
  console.log(`${date.toLocaleString()} app listening at ${port}`)
})
