class LevelOne extends LevelCreator {
    constructor() {
        super();
        // Position du joueur sur la grille, où x sont les lignes et y les colonnes
        this.startMapPosition = {
            x: 6,
            y: 0
        }
        this.tileSets = [
            [ // x = 0
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
            ],
            [ // x = 1
                {
                    canWalk: true,
                },
                {
                    canWalk: false,
                },
                {
                    canWalk: false,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
            ],
            [ // x = 2
                {
                    canWalk: true,
                },
                {
                    canWalk: false,
                },
                {
                    canWalk: false,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
            ],
            [ // x = 3
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
            ],
            [ // x = 4
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
            ],
            [ // x = 5
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
            ],
            [ // x = 6
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
            ],
            [ // x = 7
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
            ],
            [ // x = 8
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
            ],
            [ // x = 9
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
            ],
            [ // x = 10
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
            ],
            [ // x = 11
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
            ],
            [ // x = 12
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
                {
                    canWalk: true,
                },
            ],
        ];
        this.tileSets.dimensions = {
            row: 13,
            col: 17
        }
    }

    creation() {
        this.levelDiv = document.getElementById("level_container");
        this.levelDiv.style.top = 0;
        this.levelDiv.style.left = 0;
        this.levelDiv.style.cursor = 'none';

        this.levelTileSet = document.createElement("img");
        this.levelTileSet.src = "assets/map/map01.png";
        this.levelTileSet.id = "map";
        this.levelTileSet.alt = "Carte du niveau 1";
        this.levelDiv.appendChild(this.levelTileSet);
        this.levelDiv.style.width = "816px";
        this.levelDiv.style.height = "624px";

        this.addGrid();
    }
    // TODO : ajouter la gestion de la superposition des tiles 
    addGrid() {  
        for (let i=0; i<parseFloat(this.levelDiv.style.height); i+=this.grid.case) {
            for (let j=0; j<parseFloat(this.levelDiv.style.width); j+=this.grid.case) {
                const gridView = document.createElement("div");
                //gridView.style.border = "solid 1px black";
                gridView.style.position = "absolute";
                gridView.style.top = i + "px";
                gridView.style.left = j + "px";
                gridView.style.width = this.grid.case + "px";
                gridView.style.height = this.grid.case + "px";
                this.levelDiv.appendChild(gridView); 
            }
        } 
    }
}