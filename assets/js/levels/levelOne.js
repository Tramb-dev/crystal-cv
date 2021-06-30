class LevelOne extends LevelCreator {
    constructor() {
        super();
        this.timePassed = 0;
		this.camera.position = {
			startX: 1,
			startY: 18,
		};
		this.speedMap = 0.2;
		this.scripts = {
			wakeUpNeo: false,
		};
        this.init();
    }

    init() {
        
        this.levelDiv.classList.toggle("fade");
        this.levelDiv.style.gridTemplateRows = "repeat(" + this.camera.size.height + ", " + this.case + "px)";
        this.levelDiv.style.gridTemplateColumns = "repeat(" + this.camera.size.width + ", " + this.case + "px)";

        this.camera.position.endX = this.camera.position.startX + this.camera.size.width - 1;
        this.camera.position.endY = this.camera.position.startY + this.camera.size.height - 1;
        this.camera.position.centerX = Math.floor(this.camera.size.width / 2);
        this.camera.position.centerY = Math.floor(this.camera.size.height / 2);
        this.camera.position.maxX = levelMap.width - 1;
        this.camera.position.maxY = levelMap.height - 1;

        this.addGrid();
    }
    
    update(secondsPassed, player, keybordPressed) {
        this.timePassed += secondsPassed;

        // On vérifie si le joueur doit se déplacer. Si c'est le cas, on vérifie sa position par rapport à la caméra. 
        if ( keybordPressed.isMovementPressed() ) {
            // Gestion des déplacements de la caméra sur la carte
			// Si la caméra peut suivre le joueur, on actualise les tuiles et on stop le déplacement du joueur
			// FIXME : actuellement, il faut relacher le bouton et le renfoncer pour aller plus bas dans la carte
           
			if ( keybordPressed.isPressed(37) && this.timePassed - player.enCoursDeDeplacement['versLaGauche'].timestampDeplacement > this.speedMap ) {
				if ( this.canFollowPlayer(player, 'versLaGauche') ) {
					player.enCoursDeDeplacement['versLaGauche'].timestampDeplacement = this.timePassed;
					player.mapPosition.x--;
					this.camera.position.startX--;
					this.camera.position.endX--;
					this.mapDraw.needUpdate = true;
				}
			}

			if ( keybordPressed.isPressed(38) && this.timePassed - player.enCoursDeDeplacement['versLeHaut'].timestampDeplacement > this.speedMap ) {
				if ( this.canFollowPlayer(player, 'versLeHaut') ) {
					player.enCoursDeDeplacement['versLeHaut'].timestampDeplacement = this.timePassed;
					player.mapPosition.y--;
					this.camera.position.startY--;
					this.camera.position.endY--;
					this.mapDraw.needUpdate = true;
				}
			}
			
			if ( keybordPressed.isPressed(39) && this.timePassed - player.enCoursDeDeplacement['versLaDroite'].timestampDeplacement > this.speedMap ) {
				if ( this.canFollowPlayer(player, 'versLaDroite') ) {
					player.enCoursDeDeplacement['versLaDroite'].timestampDeplacement = this.timePassed;
					player.mapPosition.x++;
					this.camera.position.startX++;
					this.camera.position.endX++;
					this.mapDraw.needUpdate = true;
				}
			}

			if ( keybordPressed.isPressed(40) && this.timePassed - player.enCoursDeDeplacement['versLeBas'].timestampDeplacement > this.speedMap ) {
				if ( this.canFollowPlayer(player, 'versLeBas') ) {
					player.enCoursDeDeplacement['versLeBas'].timestampDeplacement = this.timePassed;
					player.mapPosition.y++;
					this.camera.position.startY++;
					this.camera.position.endY++;
					this.mapDraw.needUpdate = true;
				}
			}
        }
        
        if ( this.mapDraw.needUpdate ) {
            this.fillMapDraw();
        }
    }

}