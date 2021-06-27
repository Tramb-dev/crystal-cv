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

    isMovementPressed() {
        if (this.isPressed(37) || this.isPressed(38) || this.isPressed(39) || this.isPressed(40)) return true;
    }
}