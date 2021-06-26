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
    
    update(secondsPassed, player, keybordPressed) {
        this.timePassed += secondsPassed;
        if ( this.mapDraw.needUpdate ) {
            this.fillMapDraw();
        }

        // Gestion des déplacements de la caméra sur la carte
        // TODO : gérer le canWalk
        const speedMap = 0.3;
        if ( this.camera.position.startY != 0 && player.gridPosition.y < 1 && keybordPressed.isPressed(38) && this.timePassed - player.enCoursDeDeplacement['versLeHaut'].timestampDeplacement > speedMap) {
            player.enCoursDeDeplacement['versLeHaut'].timestampDeplacement = this.timePassed;
            player.mapPosition.y--;
            this.camera.position.startY--;
            this.camera.position.endY--;
            this.mapDraw.needUpdate = true;
        }
        /* if ( this.camera.position.startX != 0 && player.gridPosition.x == 0 && keybordPressed.isPressed(37) && temporisation > 250 ) {
            player.mapPosition.x--;
            this.camera.position.startX--;
            this.camera.position.endX--;
            this.mapDraw.needUpdate = true;
            player.deplacement('versLaDroite');
        } */
        if ( this.camera.position.endY < levelMap.height && player.gridPosition.y == this.camera.size.height - 1 && keybordPressed.isPressed(40) && this.timePassed - player.enCoursDeDeplacement['versLeBas'].timestampDeplacement > speedMap) {
            player.enCoursDeDeplacement['versLeBas'].timestampDeplacement = this.timePassed;
            player.mapPosition.y++;
            this.camera.position.startY++;
            this.camera.position.endY++;
            this.mapDraw.needUpdate = true;
            player.enCoursDeDeplacement['versLeBas'].timestampDeplacement = this.timePassed;
        }
        /* if ( this.camera.position.endX < levelMap.width && player.gridPosition.x == this.camera.size.width - 1 && keybordPressed.isPressed(39) && temporisation > 250 ) {
            player.mapPosition.x++;
            this.camera.position.startX++;
            this.camera.position.endX++;
            this.mapDraw.needUpdate = true;
            player.deplacement('versLaGauche');
        } */
    }

}