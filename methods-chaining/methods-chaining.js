/**
 * Methods chaining.
 * 
 * $ node methods-chaining.js
 */

const poney = {
  x: 0,
  y: 0,
  walk: () => {
    poney.x += 1
    poney.y += 1
    return poney
  },
  run: () => {
    poney.x += 3
    poney.y += 3
    return poney
  },
  crabWalk: () => {
    poney.x += 1
    return poney
  },
  log: () => {
    console.log(poney.x, poney.y)
  }
}

poney.walk().run().crabWalk().log()
