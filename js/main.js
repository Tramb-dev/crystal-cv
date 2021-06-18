class Main {
    constructor() {

    }

    run() {
        window.addEventListener('DOMContentLoaded', () => {
            // TODO : réaliser le menu du jeu
            // this.menu()
            
            this.levelOne();
        });
    }

    levelOne() {
        const level1 = new LevelOne();
        level1.creation();
        const player = new Player();
        player.creation();
        player.playerDiv.style.width = level1.grid.width + "px";
        player.playerDiv.style.height = level1.grid.height + "px";
    }
}

const main = new Main();
main.run();