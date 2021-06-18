const main = {
    start: function() {
        window.addEventListener('DOMContentLoaded', () => {
            // TODO : réaliser le menu du jeu
            // this.menu()
            
            this.levelOne();
        });
    },
    menu: function() {

    },
    levelOne: function() {
        const level1 = new LevelCreator();
        level1.creation();
        const player = new Player();
        player.creation();
    }
};

main.start();