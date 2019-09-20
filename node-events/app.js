'use strict'

const fs = require('fs');
const events = require('events');
const emitter = new events.EventEmitter;

const settings = require('./settings')

// Each step.
const steps = Object.keys(settings.steps)
steps.forEach(step => {
  // Listen.
  emitter.on(step, () => {
    console.log(`\n${step}`)
    // Each module.
    settings.steps[step].forEach(module => {
      const module_path = `./${module}.js`
      return fs.existsSync(module_path)
        && require(module_path)(settings)
        && console.log(`* ${module}()`)
    })
  })
  // Emit.
  emitter.emit(step)
})