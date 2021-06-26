class Controls {
    constructor() {
        this.pressed = {};
    }

    onKeyDown(keyboardEvent) {
        this.pressed[keyboardEvent.keyCode] = true;
    }

    onKeyUp(keyboardEvent) {
        delete this.pressed[keyboardEvent.keyCode];
    }

    isPressed(keyCode) {
        return this.pressed[keyCode];
    }
}