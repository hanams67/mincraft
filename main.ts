input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . . #
        . . . . .
        . # # . #
        . . # . .
        . . # . .
        `)
    led.toggle(0, 0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        # # # . #
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        # . # . #
        . . . . .
        . . # . .
        `)
    basic.showIcon(IconNames.Happy)
    basic.showString("isv frerft ejyfg bhbj bggubg iubgc ueggfg bggh3igu bcugubuvvvugvu g hgfb bvhhhhhhfhh h")
})
