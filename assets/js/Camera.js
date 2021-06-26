class Camera {
    constructor(map, width, height) {
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height;
        this.maxX = map.levelMap.width * map.case - width;
        this.maxY = map.levelMap.height * map.case - height;
    }
}