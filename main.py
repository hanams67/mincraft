basic.show_leds("""
    . # . . #
    . . . . .
    . # # . #
    . . # . .
    . . # . .
    """)
led.toggle(0, 0)
basic.show_leds("""
    . . . . .
    . . . . .
    . # . . .
    # # # . #
    . . . . .
    """)
basic.show_leds("""
    . . # . .
    . . . . .
    # . # . #
    . . . . .
    . . # . .
    """)
basic.show_icon(IconNames.HAPPY)