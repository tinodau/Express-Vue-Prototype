const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequilize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

module.exports = db