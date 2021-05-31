module.exports = {
  remoteDB: process.env.REMOTE_DB || false,
  api: {
    port: process.env.API_PORT || 3000,
  },
  post: {
    port: process.env.POST_PORT || 3002,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "notasecret!",
  },
  mysql: {
    host: process.env.MYSQL_HOST || "remotemysql.com",
    user: process.env.MYSQL_USER || "jptC8myyrz",
    password: process.env.MYSQL_PASS || "GOAdE1Y4vX",
    database: process.env.MYSQL_DB || "jptC8myyrz",
  },
  mysqlService: {
    port: process.env.MYSQL_SERVICE_PORT || 3001,
    host: process.env.MYSQL_SERVICE_HOST || "localhost",
  },
  cacheService: {
    port: process.env.CACHE_SERVICE_PORT || 3003,
    host: process.env.CACHE_SERVICE_HOST || "localhost",
  },
  redis: {
    host:
      process.env.REDIS_HOST ||
      "redis-18490.c62.us-east-1-4.ec2.cloud.redislabs.com",
    port: process.env.REDIS_PORT || "18490",
    password: process.env.REDIS_PASSWORD || "CUbjhdihoTNebGp0zgNKIBncQXPh0xGc",
  },
};
