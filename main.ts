/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jack Eddy
 * Created on: Nov 2023
 * This program moves a pixel down when button A is pressed, and moves a pixel sideways and rotates once the edge is hit
*/

// variables
let sprite: game.LedSprite = null
let pixelLocation = 0
let rotations = 0

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

// move pixel on button A pressed
input.onButtonPressed(Button.A, function () {
  // setup
  basic.clearScreen()
  pixelLocation = 0
  rotations = 0
  sprite = game.createSprite(0, 0)
  // rotate (outer loop)
  while (rotations <= 3) {
    pixelLocation = 0
    // move pixel forward (inner loop)
    while (pixelLocation <= 4) {
      pixelLocation++
      basic.pause(500)
      sprite.move(1)
    }
    sprite.turn(Direction.Right, 90)
    rotations++
  }
  // end
  sprite.delete()
  basic.showIcon(IconNames.Happy)
  basic.pause(1000)
})
