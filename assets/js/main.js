class Main {
    constructor() {
        this.pauseGame = false;
        this.launchGame = false;
        this.oldTimestamp = 0;
        //this.gameObjects = [];

        this.init();
    }

    init() {
        window.addEventListener('keydown', KeyboardEvent => {
            if (('Escape' == KeyboardEvent.code || 'Pause' == KeyboardEvent.code || 'KeyP' == KeyboardEvent.code) && !KeyboardEvent.repeat && this.launchGame) {
                this.pause();
                KeyboardEvent.preventDefault();
            } else if ('Enter' == KeyboardEvent.code && !KeyboardEvent.repeat) {
                if (!this.launchGame) this.menu();
            }
        }, false);
        document.querySelector('.button').addEventListener('click', () => {
            this.menu();
        }, false);

        // Gestion du offcanvas du site
        const navBarOn = document.querySelector('#navbarSideOpen');
        const navBarOff = document.querySelector('#navbarSideClose');
        const offcanvas = document.querySelector('.offcanvas-collapse');
        const link = document.querySelectorAll('.offcanvas-body a');
        navBarOn.addEventListener('click', function () {
            offcanvas.classList.add('open');
        });
        navBarOff.addEventListener('click', function () {
            offcanvas.classList.remove('open')
        });
        link.forEach(element => {
            element.addEventListener('click', () => {
                offcanvas.classList.remove('open');
            });
        });

        /* this.gameObjects = [
            new LevelOne(),
            new Player()
        ]; */
    }

    menu() {
        const menu = document.getElementById('menu');
        menu.style.opacity = 0;
        window.setTimeout(function() {
            menu.style.display = 'none';
        }, 400);
        this.launchGame = true;
        this.level = new LevelOne();
        this.level.init();
        this.player = new Player(this.level.case, this.level.startMapPosition, this.level.levelMap, this.level.offsetX);
        this.player.init();

        window.requestAnimationFrame((timeStamp) => this.gameLoop(timeStamp));
    }

    pause() {
        const divPause = document.querySelector(".modal_container");
        this.pauseGame = !this.pauseGame;

        // Blocage des touches de navigation pendant la pause, et réactivation une fois la pause enlevée
        const blocageTouches = KeyboardEvent => {
            if ('ArrowUp' == KeyboardEvent.code || 'ArrowRight' == KeyboardEvent.code || 'ArrowDown' == KeyboardEvent.code || 'ArrowLeft' == KeyboardEvent.code) {
                if (this.pauseGame) {
                    KeyboardEvent.stopPropagation();
                }
            }
        };

        if (!this.pauseGame) {
            divPause.style.display = "none";
            window.addEventListener('keydown', blocageTouches, true);
        } else {
            divPause.style.display = "flex";
            window.addEventListener('keydown', blocageTouches, true);
        }
    }

    // Mise en place d'une boucle pour afficher les animations du terrain, notamment
    gameLoop(timestamp) {
        //if (this.pauseGame) return;
        // Calcul des secondes passées depuis la dernière frame
        let secondsPassed = (timestamp - this.oldTimestamp) / 1000;
        this.oldTimestamp = timestamp;

        // Permet de limiter les dégâts liés au mauvais matériel ou à un changement d'onglet. On limite donc l'impact du temps.
        //secondsPassed = Math.min(secondsPassed, 0.1);

        /* // On met à jour les différents objets du jeu
        for (let i = 0; i < this.gameObjects.length; i++) {
            this.gameObjects[i].update(secondsPassed);
        }
        
        // On affiche les différents objets du jeu une fois mis à jour
        for (let i = 0; i < this.gameObjects.length; i++) {
            this.gameObjects[i].draw();
        } */
        if(!this.pauseGame) {
            this.level.update(secondsPassed);
            this.player.update(secondsPassed);
        }

        this.level.draw();
        this.player.draw();

        window.requestAnimationFrame((timeStamp) => this.gameLoop(timeStamp));
    }
}

window.addEventListener('load', function() {
    const main = new Main();
});