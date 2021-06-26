class LevelOne extends LevelCreator {
    constructor() {
        super();
        this.timePassed = 0;
        this.animationCounter = 0;
    }

    init() {
        
        this.levelDiv.classList.toggle("fade");
        this.levelDiv.style.gridTemplateRows = "repeat(" + this.mapSize.height + ", " + this.case + "px)";
        this.levelDiv.style.gridTemplateColumns = "repeat(" + this.mapSize.width + ", " + this.case + "px)";

        this.addGrid();
    }
    
    update(secondsPassed, playerMapPosition) {
        this.timePassed += secondsPassed;
        // Mise en place de l'écran scrollable
        if ( levelMap.scrollable ) {
            // Définition d'une camera
        }

        this.animateLevel();
    }

}