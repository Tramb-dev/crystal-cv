class Controls {
    constructor() {
        this.pressed = {
            37: false,
            38: false,
            39: false,
            40: false
        };
    }

    onKeyDown(keyboardEvent) {
        if (!keyboardEvent.repeat)
            this.pressed[keyboardEvent.keyCode] = performance.now();
    }

    onKeyUp(keyboardEvent) {
        this.pressed[keyboardEvent.keyCode] = false;
    }
}