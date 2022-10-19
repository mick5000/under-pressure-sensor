let value = 0
basic.forever(function () {
    value = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(value)
    if (pins.analogReadPin(AnalogPin.P0) <= 714) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
