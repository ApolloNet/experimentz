'use strict'

const fs = require('fs').promises


// Let's.
go()

/**
 * Handle things.
 *
 * @param object settings
 * @param string step
 * @param function callback
 *
 * @return array of promises
 */
async function handleThings (settings, things, callback) {
  const promise = Promise.resolve(settings)
  for (let i = 0; i < things.length; ++i) {
    await promise.then(settings => callback(settings, things[i]))
  }
  promise.catch(err => console.error(err))
  return promise
}

/**
 * Go.
 */
function go() {
  const settings = require('./settings')
  const steps = Object.keys(settings.steps)
  handleThings(settings, steps, handleStep)
}

/**
 * Handle step.
 *
 * @param object settings
 * @param string step
 *
 * @return array of promises
 */
async function handleStep (settings, step) {
  const modules = settings.steps[step]
  return handleThings(settings, modules, handleModule)
}

/**
 * Handle module.
 *
 * @param object settings
 * @param string module_name
 *
 * @return promise
 */
function handleModule (settings, module_name) {
  const module_path = getModulePath(module_name)
  return fs.stat(module_path)
    .then(() => require(module_path)(settings))
    .catch(err => console.error(`\n⚠️ ${module_path} does not exist.`))
}

/**
 * Get module path.
 *
 * @param string module_name
 *
 * @return string module path
 */
function getModulePath(module_name) {
  return `./${module_name}.js`
}
