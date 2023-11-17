"""
Created by: Jack Eddy
Created on: Nov 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *

# variables
pixel_x = 0
pixel_y = 0

display.show(Image.HAPPY)

# button A pressed
while True:
    if button_a.is_pressed():
        display.clear()
        pixel_x = 0
        pixel_y = 0
        # move pixel on y axis down (outer loop)
        while pixel_y <= 3:
            # move pixel on x axis to the right (inner loop)
            while pixel_x <= 3:
                sleep(500)
                display.clear()
                display.set_pixel(pixel_x, pixel_y, 9)
                pixel_x = pixel_x + 1
            sleep(500)
            display.clear()
            display.set_pixel(pixel_x, pixel_y, 9)
            pixel_y = pixel_y + 1
        # move pixel on y axis up (outer loop)
        while pixel_y >= 0:
            # move pixel on x axis to the left (inner loop)
            while pixel_x >= 1:
                sleep(500)
                display.clear()
                display.set_pixel(pixel_x, pixel_y, 9)
                pixel_x = pixel_x - 1
            sleep(500)
            display.clear()
            display.set_pixel(pixel_x, pixel_y, 9)
            pixel_y = pixel_y - 1

        # reset screen and variables
        sleep(500)
        display.clear()
        pixel_x = 0
        pixel_y = 0
        display.show(Image.HAPPY)
