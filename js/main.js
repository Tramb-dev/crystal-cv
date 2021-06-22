class Main {
    constructor() {
        this.pauseGame = false;
        this.launchGame = false;
    }

    run() {
        window.addEventListener('DOMContentLoaded', () => {
            window.addEventListener('keydown', KeyboardEvent => {
                if (('Escape' == KeyboardEvent.code || 'Pause' == KeyboardEvent.code || 'KeyP' == KeyboardEvent.code) && !KeyboardEvent.repeat) {
                    this.pause();
                    KeyboardEvent.preventDefault();
                } /* else if ('Enter' == KeyboardEvent.code && !KeyboardEvent.repeat) {
                    if (!this.launchGame) this.loop();
                } */
            }, false);
            
            const level = new LevelOne();
            level.creation();
            const player = new Player(level.grid, level.startMapPosition, level.levelOne);
            player.creation();

            player.controls();
            let compteur = 0;
            /* while(!this.pauseGame) {
                level.animateLevel(compteur);
                compteur++;
            } */
        }, false);
    }

    // TODO : réaliser le menu du jeu
    menu() {

    }

    pause() {
        const divPause = document.querySelector(".modal_container");
        this.pauseGame = !this.pauseGame;

        // Blocage des touches de navigation pendant la pause, et réactivation une fois la pause enlevée
        const blocageTouches = KeyboardEvent => {
            if ('ArrowUp' == KeyboardEvent.code || 'ArrowRight' == KeyboardEvent.code || 'ArrowDown' == KeyboardEvent.code || 'ArrowLeft' == KeyboardEvent.code) {
                if (this.pauseGame) {
                    KeyboardEvent.stopPropagation();
                    KeyboardEvent.preventDefault();
                }
            }
        };

        if (!this.pauseGame) {
            //this.loop();
            divPause.style.display = "none";
            window.addEventListener('keydown', blocageTouches, true);
        } else {
            divPause.style.display = "flex";
            window.addEventListener('keydown', blocageTouches, true);
        }
    }

    /* loop() {
        if (this.pauseGame) return;

    } */
}

const main = new Main();
main.run();