let win = 0
let lose = 0
let numero1 = 0
let numero2 = 0
input.onGesture(Gesture.Shake, function () {
    win = 0
    lose = 0
    for (let index = 0; index < 2; index++) {
        numero1 = randint(1, 6)
        numero2 = randint(1, 6)
        if (numero1 == numero2) {
            basic.showString("Win!")
            basic.showIcon(IconNames.Happy)
            win += 1
        } else if (numero1 != numero2) {
            basic.showString("Lose")
            basic.showIcon(IconNames.Sad)
            lose += 1
        }
    }
    basic.showNumber(win)
    basic.showNumber(lose)
})
