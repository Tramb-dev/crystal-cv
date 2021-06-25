class LevelCreator {
    constructor() {
        //this.levelDiv = '';
        //this.levelTileSet = '';
        this.case = 48;
        this.levelContainer = document.getElementById("game_container");
    }

    addGrid() {  
        for (let i=0; i<this.levelMap.height; i++) {
            for (let j=0; j<this.levelMap.width; j++) {
                const gridView = document.createElement("div");
                //const gridImg = document.createElement("img");
                const currentTileSet = tileSets[this.levelMap.globalTilesetId];
               // gridView.style.border = "solid 1px black";
                gridView.classList.add("tile_container");
                gridView.style.gridColumn = (j+1) + "/" + (j+2);
                gridView.style.gridRow = (i+1) + "/" + (i+2);
                gridView.style.width = this.case + "px";
                gridView.style.height = this.case + "px";
               /*  gridImg.src = currentTileSet.path + currentTileSet.tilesetNames[this.levelMap.data[i][j][0].tilesetId].tilesetName + ".png";
                gridImg.style.left = currentTile.position.x;
                gridImg.style.top = currentTile.position.y;
                gridImg.setAttribute("data-row", i) ;
                gridImg.setAttribute("data-col", j) ; */

                // Ajoute les couches de tiles les unes sur les autres
                let bgImage = '', bgPosX = '', bgPosY = '';
                for (let layer = this.levelMap.data[i][j].length - 1; layer >= 0; layer--) {
                    const currentTile = currentTileSet.tilesetNames[this.levelMap.data[i][j][layer].tilesetId].data[this.levelMap.data[i][j][layer].tileId];
                    bgImage += "url(" + currentTileSet.path + currentTileSet.tilesetNames[this.levelMap.data[i][j][layer].tilesetId].tilesetName + ".png)";

                    // Si la case doit afficher un entre deux tiles
                    let midTile = [];
                    if ('object' === typeof this.levelMap.data[i][j][layer].tileId) {
                        midTile = this.midTile(this.levelMap.data[i][j][layer].tileId, currentTileSet.tilesetNames[this.levelMap.data[i][j][layer].tilesetId].data);
                        bgPosX += midTile[0];
                        bgPosY += midTile[1];
                    } else {
                        bgPosX += - currentTile.position.x * this.case + "px";
                        bgPosY += - currentTile.position.y * this.case + "px";
                    }

                    if (layer != 0) {
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
                //gridView.appendChild(gridImg);
                this.levelDiv.appendChild(gridView); 
            }
        } 
    }

    // Lance les animations du niveau
    animateLevel() {
        for (let i=0; i<this.levelMap.height; i++) {
            const rowImg = document.querySelectorAll('[data-row="' + i + '"]');
            for (let j=0; j<this.levelMap.width; j++) {
                const currentTileSet = tileSets[this.levelMap.globalTilesetId];

                // Si la case doit afficher un entre deux tiles
                let midTile = [];
                if ('object' === typeof this.levelMap.data[i][j][0].tileId) {
                    midTile = this.animMidTile(this.levelMap.data[i][j][0].tileId, currentTileSet.tilesetNames[this.levelMap.data[i][j][0].tilesetId].data);

                    if (false !== midTile) {
                        const gridImg = rowImg[j];
                        gridImg.style.backgroundPositionX = midTile[0];
                        gridImg.style.backgroundPositionY = midTile[1];
                    }
                } else {
                    const currentTile = currentTileSet.tilesetNames[this.levelMap.data[i][j][0].tilesetId].data[this.levelMap.data[i][j][0].tileId];
                    if (currentTile.isAnimation) { 
                        const compteur = Math.floor(this.timePassed % currentTile.animation.length);
                        const gridImg = rowImg[j];
                        gridImg.style.backgroundPositionX = - currentTile.animation[compteur].x * this.case + "px";
                        gridImg.style.backgroundPositionY = - currentTile.animation[compteur].y * this.case + "px";
                    }
                }
            }
        }
    }

    // Permet de sélectionner un entre 2 tuiles pour réaliser des continuités dans les bords de mer par exemple.
    midTile(tileTab, currentTileSet) {
        let x = currentTileSet[tileTab[1]].position.x - currentTileSet[tileTab[0]].position.x;
        let y = currentTileSet[tileTab[1]].position.y - currentTileSet[tileTab[0]].position.y;

        if (0 == x) {
            x = currentTileSet[tileTab[0]].position.x;
        } else {
            x = (currentTileSet[tileTab[0]].position.x + currentTileSet[tileTab[1]].position.x) / 2;
        }
        
        if (0 == y) {
            y = currentTileSet[tileTab[0]].position.y;
        } else {
            y = (currentTileSet[tileTab[0]].position.y + currentTileSet[tileTab[1]].position.y) / 2;
        }
        
        return [ - x * this.case + "px", - y * this.case + "px" ];
    }

    // Même objectifs que midTile(), mais pour leur animation cette fois-ci
    animMidTile(tileTab, currentTileSet) {
        if (currentTileSet[tileTab[0]].isAnimation && currentTileSet[tileTab[1]].isAnimation) {
            const compteur = Math.floor(this.timePassed % Math.min(currentTileSet[tileTab[0]].animation.length, currentTileSet[tileTab[0]].animation.length));

            let x = currentTileSet[tileTab[1]].animation[compteur].x - currentTileSet[tileTab[0]].animation[compteur].x;
            let y = currentTileSet[tileTab[1]].animation[compteur].y - currentTileSet[tileTab[0]].animation[compteur].y;

            if (0 == x) {
                x = currentTileSet[tileTab[0]].animation[compteur].x;
            } else {
                x = (currentTileSet[tileTab[0]].animation[compteur].x + currentTileSet[tileTab[1]].animation[compteur].x) / 2;
            }
            
            if (0 == y) {
                y = currentTileSet[tileTab[0]].animation[compteur].y;
            } else {
                y = (currentTileSet[tileTab[0]].animation[compteur].y + currentTileSet[tileTab[1]].animation[compteur].y) / 2;
            }
            
            return [ - x * this.case + "px", - y * this.case + "px" ];
        }
    }

}