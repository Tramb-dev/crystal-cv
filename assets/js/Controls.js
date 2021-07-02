class Controls {
    constructor() {
        this.pressed = {};
        this.lastMovementPressed = [];
    }

    onKeyDown(keyboardEvent) {
        switch (keyboardEvent.code) {
            case 'ArrowLeft':
            case 'ArrowUp':
            case 'ArrowRight':
            case 'ArrowDown':
                keyboardEvent.preventDefault();
                break;
        }

        if (!keyboardEvent.repeat) {
            this.pressed[keyboardEvent.code] = true;
            this.lastMovementPressed.push(keyboardEvent.code);
        }
    }

    onKeyUp(keyboardEvent) {
        this.lastMovementPressed.splice(this.lastMovementPressed.indexOf(keyboardEvent.code), 1);
        delete this.pressed[keyboardEvent.code];
    }

    lastPressed() {
        return this.lastMovementPressed[this.lastMovementPressed.length - 1];
    }

    isPressed(code) {
        return this.pressed[code];
    }

    isMovementPressed() {
        if (this.isPressed('ArrowLeft') || this.isPressed('ArrowUp') || this.isPressed('ArrowRight') || this.isPressed('ArrowDown')) return true;
    }
}