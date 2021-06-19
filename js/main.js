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
    }
}

const main = new Main();
main.run();