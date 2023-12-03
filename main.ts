input.onButtonPressed(Button.A, function () {
    basic.showString("FET")
})
let N = 0
basic.showString("FET")
basic.forever(function () {
    N = input.lightLevel()
    basic.showNumber(N)
    if (30 < N) {
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
