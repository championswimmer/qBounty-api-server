let DB_NAME = 'puzzlebounty'
let DB_USER = 'puzzleuser'
let DB_PASS = 'puzzlepass'
let DB_PORT = 5432
let DB_HOST = 'localhost'
let DB_DIALECT = 'postgres'
const SRV_PORT = process.env.PORT || 4455
const SRV_HOSTNAME =
  process.env.HEROKU_APP_NAME
    ? process.env.HEROKU_APP_NAME + '.herokuapp.com'
    : 'localhost'

if (process.env.DATABASE_URL) {
  let url = process.env.DATABASE_URL
  url = url.split('://')
  DB_DIALECT = url[0]
  url = url[1]
  DB_USER = url.split('@')[0].split(':')[0]
  DB_PASS = url.split('@')[0].split(':')[1]
  DB_NAME = url.split('/')[1]
  url = url.split('/')[0]
  DB_PORT = parseInt(url.split('@')[1].split(':')[1])
  DB_HOST = url.split('@')[1].split(':')[0]
}

exports.DB_CONFIG = {
  DB_HOST, DB_USER, DB_NAME, DB_PASS, DB_PORT, DB_DIALECT
}

exports.SRV_CONFIG = {
  SRV_PORT, SRV_HOSTNAME
}
