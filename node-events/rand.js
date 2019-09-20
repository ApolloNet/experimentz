'use strict'

function rand (settings) {
  settings.foo = Math.random()
  return settings
}

module.exports = rand
