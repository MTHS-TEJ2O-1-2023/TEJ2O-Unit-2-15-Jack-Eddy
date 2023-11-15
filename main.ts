/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jack Eddy
 * Created on: Nov 2023
 * This program moves a pixel down when button A is pressed, and moves a pixel up diagonaly when butten B is pressed
*/

// variables
let sprite: game.LedSprite = null
let pixelLocationX = 0
let pixelLocationY = 0

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

// start loop
input.onButtonPressed(Button.A, function () {
  // setup
  basic.clearScreen()
  pixelLocationX = 0
  pixelLocationY = 0
  sprite = game.createSprite(0, 0)

  // move forward X axis
  while (pixelLocationX <= 5) {
    sprite.move(1)
    pixelLocationX = pixelLocationX + 1
    basic.pause(300)
  }
    sprite.turn(Direction.Right, 90)

  // move down Y axis
  while (pixelLocationY <= 5) {
    sprite.move(1)
    pixelLocationY = pixelLocationY + 1
    basic.pause(300)
  }
    sprite.turn(Direction.Right, 90)

  // move backward X axis
  while (pixelLocationX >= 0) {
    sprite.move(1)
    pixelLocationX = pixelLocationX - 1
    basic.pause(300)
  }
    sprite.turn(Direction.Right, 90)

  // move up Y axis
  while (pixelLocationY >= 0) {
    sprite.move(1)
    pixelLocationY = pixelLocationY - 1
    basic.pause(300)
  }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

