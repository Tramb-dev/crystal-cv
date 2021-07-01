class LevelOne extends LevelCreator {
    constructor() {
        super();
        this.timePassed = 0;
		this.camera.position = {
			startX: 1,
			startY: 18,
		};
		this.speedMap = 0.2;
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

		if ( !scripts.wakeUpNeo.state ) {
			scripts.wakeUpNeo.state = true;
			scripts.gameState = 'waitingInput';
			scripts.wakeUpNeo.action(player);
		}

		if ( scripts.gameState === 'dialog' ) {
			// S'il y a encore des dialogues en cours
			if ( player.isDialog !== false && player.dialogNumber < dialogues[player.isDialog].length && keybordPressed.isPressed(13) ) {
				player.closeDialog(keybordPressed, false);
			} else {
				player.closeDialog(keybordPressed, true);
			}
		}

        // On vérifie si le joueur doit se déplacer. Si c'est le cas, on vérifie sa position par rapport à la caméra. 
        if ( keybordPressed.isMovementPressed() && scripts.gameState === 'game' ) {
            // Gestion des déplacements de la caméra sur la carte
			// Si la caméra peut suivre le joueur, on actualise les tuiles et on stop le déplacement du joueur
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