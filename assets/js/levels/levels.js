class LevelCreator {
    constructor() {
        this.levelDiv = document.getElementById("level_container");
        //this.levelTileSet = '';
        this.case = 48;
        this.camera = {
            size: {
                width: 17,
                height: 13
            },
        };
        this.mapDraw = {
            needUpdate: true,
            map: []
        };
    }

    // Crée la grille au démarrage en fonction des données de niveau
    addGrid() {  
        for (let i=0; i<this.camera.size.height; i++) {
            this.mapDraw.map[i] = [];
            
            for (let j=0; j<this.camera.size.width; j++) {
                this.mapDraw.map[i][j] = [];

                levelMap.data[i][j].forEach((element, index) => {
                    this.mapDraw.map[i][j][index] = element;
                });
                this.mapDraw.map[i][j][0].case = "r" + i + "c" + j;

                const gridView = document.createElement("div");
                gridView.classList.add("tile_container");
                gridView.style.gridColumn = (j+1) + "/" + (j+2);
                gridView.style.gridRow = (i+1) + "/" + (i+2);
                gridView.style.width = this.case + "px";
                gridView.style.height = this.case + "px";
                
                gridView.setAttribute("data-row", i) ;
                gridView.setAttribute("data-col", j) ;

                this.levelDiv.appendChild(gridView); 
            }
        } 
    }

    // Crée un tableau servant au print de la carte sur la caméra
    fillMapDraw() {
        for (let i=0; i<this.camera.size.height; i++) {
            let y = i + this.camera.position.startY;
            for (let j=0; j<this.camera.size.width; j++) {
                let x = j + this.camera.position.startX;
                // On supprime les couches existantes
                this.mapDraw.map[i][j].splice(1, 5);
                this.mapDraw.map[i][j] = [];
                this.mapDraw.map[i][j].canWalk = true;
                this.mapDraw.map[i][j].isAnimation = false;
                this.mapDraw.map[i][j].col = x;
                this.mapDraw.map[i][j].row = y;
                delete this.mapDraw.map[i][j].script;

                // Ajout des événements dans le mapDraw
                events.forEach((element, index) => {
                    if ( element.toDisplay && !element.executed ) {
                        element.positions.forEach(position => {
                            if ( position.x == x && position.y == y ) {
                                this.mapDraw.map[i][j].script = index;
                            }
                        });
                    }
                });

                // Gestion des autorisations de déplacement du personnage
                /* Si on a spécifié qu'une case peut être traversée malgré tout, comme un passage secret par exemple
                Regarde sur chaque layer s'il y a une restriction de mouvement. Une seule suffit pour stopper le joueur */
                for (const element of levelMap.data[y][x]) {
                    if ( 'object' == typeof element.tileId ) {
                        if ( !tileSets[element.tilesetId].data[element.tileId[0]].canWalk && !element.canWalk ) {
                            this.mapDraw.map[i][j].canWalk = false;
                        }
                        if ( tileSets[element.tilesetId].data[element.tileId[0]].isAnimation ) {
                            this.mapDraw.map[i][j].isAnimation = true;
                        }
                    } else if( 'object' != typeof element.tileId && !tileSets[element.tilesetId].data[element.tileId].canWalk && !element.canWalk ){ 
                        this.mapDraw.map[i][j].canWalk = false;
                        if ( tileSets[element.tilesetId].data[element.tileId].isAnimation ) {
                            this.mapDraw.map[i][j].isAnimation = true;
                        }
                    }
                }

                levelMap.data[y][x].forEach((element, index) => {
                    this.mapDraw.map[i][j][index] = element;
                });
            }
        }
    }

    // Permet de sélectionner un entre 2 tuiles pour réaliser des continuités dans les bords de mer par exemple.
    midTile(tileTab, currentTileSet) {
        let compteur = 0;
        if (currentTileSet.data[tileTab[0]].isAnimation && currentTileSet.data[tileTab[1]].isAnimation) {
            compteur = Math.floor(this.timePassed % Math.min(currentTileSet.data[tileTab[0]].position.length, currentTileSet.data[tileTab[0]].position.length));
        }

            let x = currentTileSet.data[tileTab[1]].position[compteur].x - currentTileSet.data[tileTab[0]].position[compteur].x;
            let y = currentTileSet.data[tileTab[1]].position[compteur].y - currentTileSet.data[tileTab[0]].position[compteur].y;

            if (0 == x) {
                x = currentTileSet.data[tileTab[0]].position[compteur].x;
            } else {
                x = (currentTileSet.data[tileTab[0]].position[compteur].x + currentTileSet.data[tileTab[1]].position[compteur].x) / 2;
            }
            
            if (0 == y) {
                y = currentTileSet.data[tileTab[0]].position[compteur].y;
            } else {
                y = (currentTileSet.data[tileTab[0]].position[compteur].y + currentTileSet.data[tileTab[1]].position[compteur].y) / 2;
            }
            
            return [ - x * this.case + "px", - y * this.case + "px" ];
        
    }

    // Suit le joueur lorsque la caméra peut bouger et qu'il est au centre de l'écran
    canFollowPlayer(player, direction) {
        let move = false;

        switch ( direction ) {
            case 'versLeHaut': 
                if (player.gridPosition.y == this.camera.position.centerY && this.camera.position.startY > 0) {
                    if (this.mapDraw.map[player.gridPosition.y-1][player.gridPosition.x].canWalk) {
                        player.enCoursDeDeplacement[direction].canMove = false;
                        move = true;
                        player.deplacement(direction);
                    }
                } else if (player.gridPosition.y < this.camera.position.centerY && this.camera.position.startY > 0) {
                    if (this.mapDraw.map[player.gridPosition.y-1][player.gridPosition.x].canWalk) {
                        player.enCoursDeDeplacement[direction].canMove = false;
                        move = true;
                    }
                } else {
                    player.enCoursDeDeplacement[direction].canMove = true;
                }
                break;

            case 'versLeBas': 
                if (player.gridPosition.y == this.camera.position.centerY && this.camera.position.endY < this.camera.position.maxY) {
                    if (this.mapDraw.map[player.gridPosition.y+1][player.gridPosition.x].canWalk) {
                        player.enCoursDeDeplacement[direction].canMove = false;
                        move = true;
                        player.deplacement(direction);
                    }
                } else if ( player.gridPosition.y > this.camera.position.centerY && this.camera.position.endY < this.camera.position.maxY ) {
                    if (this.mapDraw.map[player.gridPosition.y+1][player.gridPosition.x].canWalk) {
                        player.enCoursDeDeplacement[direction].canMove = false;
                        move = true;
                    }
                } else {
                    player.enCoursDeDeplacement[direction].canMove = true;
                }
                break;

            case 'versLaGauche':
                if (player.gridPosition.x == this.camera.position.centerX && this.camera.position.startX > 0) {
                    if (this.mapDraw.map[player.gridPosition.y][player.gridPosition.x-1].canWalk) {
                        player.enCoursDeDeplacement[direction].canMove = false;
                        move = true;
                        player.deplacement(direction);
                    }
                } else if (player.gridPosition.x < this.camera.position.centerX && this.camera.position.startX > 0) {
                    if (this.mapDraw.map[player.gridPosition.y][player.gridPosition.x-1].canWalk) {
                        player.enCoursDeDeplacement[direction].canMove = false;
                        move = true;
                    }
                } else {
                    player.enCoursDeDeplacement[direction].canMove = true;
                }
                break;

            case 'versLaDroite':
                if (player.gridPosition.x == this.camera.position.centerX && this.camera.position.endX < this.camera.position.maxX) {
                    if (this.mapDraw.map[player.gridPosition.y][player.gridPosition.x+1].canWalk) {
                        player.enCoursDeDeplacement[direction].canMove = false;
                        move = true;
                        player.deplacement(direction);
                    }
                } else if (player.gridPosition.x > this.camera.position.centerX && this.camera.position.endX < this.camera.position.maxX) {
                    if (this.mapDraw.map[player.gridPosition.y][player.gridPosition.x+1].canWalk) {
                        player.enCoursDeDeplacement[direction].canMove = false;
                        move = true;
                    }
                } else {
                    player.enCoursDeDeplacement[direction].canMove = true;
                }
                break;

        }
        return move;
    }

    draw() {
        for (let i=0; i<this.camera.size.height; i++) {
            const rowImg = this.levelDiv.querySelectorAll('[data-row="' + i + '"]');
            
            for (let j=0; j<this.camera.size.width; j++) {

                if ( this.mapDraw.needUpdate || this.mapDraw.map[i][j].isAnimation ) {
                    // Ajoute les couches de tiles les unes sur les autres
                    let bgImage = '', bgPosX = '', bgPosY = '', bgSize = '';
                    if ( 'script' in this.mapDraw.map[i][j] && 'image' in events[this.mapDraw.map[i][j].script] ) {
                        bgImage += "url(" + events[this.mapDraw.map[i][j].script].image + "), ";
                        bgPosX += "0px, ";
                        bgPosY += "0px, ";
                        bgSize += this.case + "px, ";
                    }

                    for (let layer = this.mapDraw.map[i][j].length - 1; layer >= 0; layer--) {
                        const currentTileSet = tileSets[this.mapDraw.map[i][j][layer].tilesetId];
                        const currentTile = currentTileSet.data[this.mapDraw.map[i][j][layer].tileId];
                        bgImage += "url(" + currentTileSet.path + ")";
                        bgSize += "auto";

                        // Si la case doit afficher un entre deux tiles
                        let midTile = [];
                        if ('object' === typeof this.mapDraw.map[i][j][layer].tileId) {
                            midTile = this.midTile(this.mapDraw.map[i][j][layer].tileId, currentTileSet);
                            bgPosX += midTile[0];
                            bgPosY += midTile[1];
                        } else {
                            // Gestion des animations
                            let compteur = 0;
                            if (currentTile.isAnimation) { 
                                compteur = Math.floor(this.timePassed % currentTile.position.length);
                            }
                            bgPosX += - currentTile.position[compteur].x * this.case + "px";
                            bgPosY += - currentTile.position[compteur].y * this.case + "px";
                        }

                        if (0 != layer) {
                            bgImage += ", ";
                            bgPosX += ", ";
                            bgPosY += ", ";
                            bgSize += ", ";
                        }
                    }

                    rowImg[j].style.backgroundImage = bgImage;
                    rowImg[j].style.backgroundPositionX = bgPosX;
                    rowImg[j].style.backgroundPositionY = bgPosY;
                    rowImg[j].style.backgroundSize = bgSize;
                }
            }
        }
        this.mapDraw.needUpdate = false;
    }
}