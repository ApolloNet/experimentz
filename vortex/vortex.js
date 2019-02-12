'use strict'

const vortex = create_vortex()
console.log(vortex)

/**
 * Create vortex.
 * 
 * @return array vortex
 */
function create_vortex() {
  // Vars.
  const cells = 7
  const circles = Math.floor(cells / 2)
  let vortex = init_vortex(cells)
  // Each circle.
  for (let circle = 1; circle <= circles; ++circle) {
    const index = circle * 2
    const sequences = get_sequences(index)
    const start_x = circles - circle
    const start_y = circles - circle
    const end_x = start_x + index
    const end_y = start_y + index
    // Right.
    vortex = fill_side(vortex, index, start_x, start_y, 'y', sequences[0], sequences[1])
    // Bottom.
    vortex = fill_side(vortex, index, start_x, start_y, 'x', sequences[2], sequences[1])
    // Left.
    vortex = fill_side(vortex, index, start_x, end_y, 'x', sequences[1], sequences[2])
    // Top.
    vortex = fill_side(vortex, index, end_x, start_y, 'y', sequences[3], sequences[2])
  }
  return vortex
}

/**
 * Init vortex.
 *
 * @param int cells
 * 
 * @return array vortex
 */
function init_vortex(cells) {
  let vortex = []
  for (let i = 0; i < cells; ++i) {
    vortex[i] = []
    for (let j = 0; j < cells; ++j) {
      vortex[i][j] = {}
    }
  }
  return vortex
}

/**
 * Get sequences.
 * 
 * @param int index
 * 
 * @return array sequences
 */
function get_sequences(index) {
  const sequences = []
  // Straight.
  sequences[0] = []
  for (let i = 0; i <= 1; i += 1 / index) {
    sequences[0].push(i)
  }
  // Straight reversed.
  sequences[1] = [...sequences[0]].reverse()
  // Negative.
  sequences[2] = sequences[0].map(n => n * -1)
  // Negative reversed.
  sequences[3] = sequences[1].map(n => n * -1)
  // Return
  return sequences
}

/**
 * Fill a side.
 * 
 * @param array vortex
 * @param int index
 * @param int start_x
 * @param int start_y
 * @param int inc
 * @param int x_sequence
 * @param int y_sequence
 * 
 * @return array vortex
 */
function fill_side(vortex, index, start_x, start_y, inc, x_sequence, y_sequence) {
  for (let i = 0; i <= index; ++i) {
    vortex[start_x][start_y] = {
      x: x_sequence[i],
      y: y_sequence[i]
      // Force. TODO.
    }
    if (inc === 'x') {
      ++start_x
    }
    if (inc === 'y') {
      ++start_y
    }
  }
  return vortex
}