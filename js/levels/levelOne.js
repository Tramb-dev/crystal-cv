class LevelOne extends LevelCreator {
    constructor() {
        super();
        this.tileSets = {
            
        };
    }

    creation() {
        this.levelDiv = document.getElementById("level_container");
        this.levelDiv.style.top = 0;
        this.levelDiv.style.left = 0;

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
        for (let i=0; i<parseFloat(this.levelDiv.style.height); i+=this.grid.height) {
            for (let j=0; j<parseFloat(this.levelDiv.style.width); j+=this.grid.width) {
                const gridView = document.createElement("div");
                gridView.style.border = "solid 1px black";
                gridView.style.position = "absolute";
                gridView.style.top = i + "px";
                gridView.style.left = j + "px";
                gridView.style.width = this.grid.width + "px";
                gridView.style.height = this.grid.height + "px";
                this.levelDiv.appendChild(gridView); 
            }
        } 
    }
}