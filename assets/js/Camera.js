class Camera {
    constructor(gridCase, width, height) {
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height;
        this.maxX = levelMap.width * gridCase - width;
        this.maxY = levelMap.height * gridCase - height;
    }

    follow(player) {

    }

    update() {
        
    }
}