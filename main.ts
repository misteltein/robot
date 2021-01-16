input.onGesture(Gesture.Shake, function () {
    music.playMelody("C5 G B A F A C5 B ", 188)
})
input.onPinPressed(TouchPin.P1, function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            # . . . #
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
