class Main {
    constructor() {

    }

    run() {
        window.addEventListener('DOMContentLoaded', () => {
            // TODO : réaliser le menu du jeu
            // this.menu()
            
            const level = new LevelOne();
            level.creation();
            const player = new Player(level.grid, level.startMapPosition, level.tileSets);
            player.creation();
        });
    }
}

const main = new Main();
main.run();