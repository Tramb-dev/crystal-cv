class LevelOne extends LevelCreator {
    constructor() {
        super();
        this.timePassed = 0;
        this.camera.position = { // X = col, Y = row
            startX: 0,
            startY: 1,
            endX: 17,
            endY: 14
        }
        this.init();
    }

    init() {
        
        this.levelDiv.classList.toggle("fade");
        this.levelDiv.style.gridTemplateRows = "repeat(" + this.camera.size.height + ", " + this.case + "px)";
        this.levelDiv.style.gridTemplateColumns = "repeat(" + this.camera.size.width + ", " + this.case + "px)";

        this.addGrid();
    }
    
    update(secondsPassed, playerMapPosition) {
        this.timePassed += secondsPassed;
        
        if ( this.mapDraw.needUpdate ) {
            this.fillMapDraw();
        }
    }

}