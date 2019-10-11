'use strict'

const fs = require('fs').promises;

function lorem (settings) {
  return fs.readFile('./lorem.txt')
    .then(() => {
      settings.txt = "ipsum"
    })
    .then(() => {
      return settings
    })
}

module.exports = lorem
