class Controls {
    constructor() {
        this.pressed = {};
        this.lastMovementPressed = [];
    }

    onKeyDown(keyboardEvent) {
        switch (keyboardEvent.keyCode) {
            case 37:
            case 38:
            case 39:
            case 40:
                keyboardEvent.preventDefault();
                break;
        }

        if (!keyboardEvent.repeat) {
            this.pressed[keyboardEvent.keyCode] = true;
            this.lastMovementPressed.push(keyboardEvent.keyCode);
        }
    }

    onKeyUp(keyboardEvent) {
        delete this.pressed[keyboardEvent.keyCode];
        this.lastMovementPressed.pop();
    }

    lastPressed() {
        return this.lastMovementPressed[this.lastMovementPressed.length - 1];
    }

    isPressed(keyCode) {
        return this.pressed[keyCode];
    }

    isMovementPressed() {
        if (this.isPressed(37) || this.isPressed(38) || this.isPressed(39) || this.isPressed(40)) return true;
    }
}