class LevelCreator {
    constructor() {
        this.levelDiv = document.getElementById("level_container");
        //this.levelTileSet = '';
        this.case = 48;
        this.mapSize = {
            width: 17,
            height: 13
        };
        this.mapDraw = [];
    }

    addGrid() {  
        for (let i=0; i<this.mapSize.height; i++) {
            for (let j=0; j<this.mapSize.width; j++) {
                const gridView = document.createElement("div");
               // gridView.style.border = "solid 1px black";
                gridView.classList.add("tile_container");
                gridView.style.gridColumn = (j+1) + "/" + (j+2);
                gridView.style.gridRow = (i+1) + "/" + (i+2);
                gridView.style.width = this.case + "px";
                gridView.style.height = this.case + "px";

                // Ajoute les couches de tiles les unes sur les autres
                let bgImage = '', bgPosX = '', bgPosY = '';
                for (let layer = levelMap.data[i][j].length - 1; layer >= 0; layer--) {
                    const currentTileSet = tileSets[levelMap.data[i][j][layer].tilesetId];
                    const currentTile = currentTileSet.data[levelMap.data[i][j][layer].tileId];
                    bgImage += "url(" + currentTileSet.path + ")";

                    // Si la case doit afficher un entre deux tiles
                    let midTile = [];
                    if ('object' === typeof levelMap.data[i][j][layer].tileId) {
                        midTile = this.midTile(levelMap.data[i][j][layer].tileId, currentTileSet);
                        bgPosX += midTile[0];
                        bgPosY += midTile[1];
                    } else {
                        bgPosX += - currentTile.position[0].x * this.case + "px";
                        bgPosY += - currentTile.position[0].y * this.case + "px";
                    }

                    if (0 != layer) {
                        bgImage += ", ";
                        bgPosX += ", ";
                        bgPosY += ", ";
                    }
                }
                gridView.style.backgroundImage = bgImage;
                gridView.style.backgroundPositionX = bgPosX;
                gridView.style.backgroundPositionY = bgPosY;
                gridView.setAttribute("data-row", i) ;
                gridView.setAttribute("data-col", j) ;
                this.levelDiv.appendChild(gridView); 
            }
        } 
    }

    // Lance les animations du niveau
    animateLevel() {
        for (let i=0; i<this.mapSize.height; i++) {
            const rowImg = document.querySelectorAll('[data-row="' + i + '"]');
            for (let j=0; j<this.mapSize.width; j++) {
                const currentTileSet = tileSets[levelMap.data[i][j][0].tilesetId];
                
                // Si la case doit afficher un entre deux tiles
                let midTile = [];
                if ('object' === typeof levelMap.data[i][j][0].tileId) {
                    midTile = this.midTile(levelMap.data[i][j][0].tileId, currentTileSet);

                    if (midTile) {
                        const gridImg = rowImg[j];
                        gridImg.style.backgroundPositionX = midTile[0];
                        gridImg.style.backgroundPositionY = midTile[1];
                    }
                } else {
                    const currentTile = currentTileSet.data[levelMap.data[i][j][0].tileId];
                    if (currentTile.isAnimation) { 
                        const compteur = Math.floor(this.timePassed % currentTile.position.length);
                        const gridImg = rowImg[j];
                        gridImg.style.backgroundPositionX = - currentTile.position[compteur].x * this.case + "px";
                        gridImg.style.backgroundPositionY = - currentTile.position[compteur].y * this.case + "px";
                    }
                }
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

    draw() {
        /* for (let i=0; i<levelMap.height; i++) {
            const rowImg = document.querySelectorAll('[data-row="' + i + '"]');
            for (let j=0; j<levelMap.width; j++) {
                const currentTileSet = tileSets[levelMap.globalTilesetId];

                // Si la case doit afficher un entre deux tiles
                let midTile = [];
                if ('object' === typeof levelMap.data[i][j][0].tileId) {
                    midTile = this.animMidTile(levelMap.data[i][j][0].tileId, currentTileSet.tilesetNames[levelMap.data[i][j][0].tilesetId].data);

                    if (false !== midTile) {
                        const gridImg = rowImg[j];
                        gridImg.style.backgroundPositionX = midTile[0];
                        gridImg.style.backgroundPositionY = midTile[1];
                    }
                } else {
                    const currentTile = currentTileSet.tilesetNames[levelMap.data[i][j][0].tilesetId].data[levelMap.data[i][j][0].tileId];
                    if (currentTile.isAnimation) { 
                        const compteur = Math.floor(this.timePassed % currentTile.animation.length);
                        const gridImg = rowImg[j];
                        gridImg.style.backgroundPositionX = - currentTile.animation[compteur].x * this.case + "px";
                        gridImg.style.backgroundPositionY = - currentTile.animation[compteur].y * this.case + "px";
                    }
                }
            }
        } */

        for (let i=0; i<this.mapDraw; i++) {
            const rowImg = document.querySelectorAll('[data-row="' + i + '"]');

        }
    }
}