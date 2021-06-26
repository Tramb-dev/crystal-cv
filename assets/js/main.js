class Main {
    constructor() {
        this.pauseGame = false;
        this.oldTimestamp = 0;
        this.score = 0;
        this.keybordControls = new Controls();
        //this.gameObjects = [];

        this.init();
    }

    init() {
        window.addEventListener('keydown', keyboardEvent => {
            if (('Escape' == keyboardEvent.code || 'Pause' == keyboardEvent.code || 'KeyP' == keyboardEvent.code) && !keyboardEvent.repeat && this.launchGame) {
                this.pause();
                keyboardEvent.preventDefault();
            } else if ('Enter' == keyboardEvent.code && !keyboardEvent.repeat) {
                if (!this.launchGame) this.menu();
            }
        }, false);
        document.querySelector('.button').addEventListener('click', () => {
            this.menu();
        }, false);

        window.addEventListener('keydown', keyboardEvent => { 
            this.keybordControls.onKeyDown(keyboardEvent); 
            keyboardEvent.preventDefault();
        }, false);
        window.addEventListener('keyup', keyboardEvent => { 
            this.keybordControls.onKeyUp(keyboardEvent); 
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
        menu.classList.toggle("fade");
        window.setTimeout(function() {
            menu.style.display = 'none';
        }, 400);
        this.level = new LevelOne();
        this.player = new Player(this.level.case, this.level.camera);
        this.camera = new Camera(this.level.case, this.level.camera.size.width, this.level.camera.size.height);

        window.requestAnimationFrame(timeStamp => {
            this.gameLoop(timeStamp);
        });
    }

    pause() {
        const divPause = document.querySelector(".modal_container");
        this.pauseGame = !this.pauseGame;

        // Blocage des touches de navigation pendant la pause, et réactivation une fois la pause enlevée
        const blocageTouches = keyboardEvent => {
            if ('ArrowUp' == keyboardEvent.code || 'ArrowRight' == keyboardEvent.code || 'ArrowDown' == keyboardEvent.code || 'ArrowLeft' == keyboardEvent.code) {
                if (this.pauseGame) {
                    keyboardEvent.stopPropagation();
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
        // Calcul des secondes passées depuis la dernière image
        let secondsPassed = (timestamp - this.oldTimestamp) / 1000;
        this.oldTimestamp = timestamp;

        /* // On met à jour les différents objets du jeu
        for (let i = 0; i < this.gameObjects.length; i++) {
            this.gameObjects[i].update(secondsPassed);
        }
        
        // On affiche les différents objets du jeu une fois mis à jour
        for (let i = 0; i < this.gameObjects.length; i++) {
            this.gameObjects[i].draw();
        } */
        
        if(!this.pauseGame) {
            /* 
            Après appuie d'une direction
                Si this.player.canWalk
                    switch (direction)
                        Si this.camera. start/endRow/Col != 0/width/heigth (différente du bord) et this.player.mapPosition.x/y / 2 == moitié de la carte
                            bouge la caméra
                        Sinon
                            bouge le perso
            */
            this.level.update(secondsPassed, this.player.mapPosition);
            this.player.update(secondsPassed, this.keybordControls.pressed);
        }

        this.level.draw();
        this.player.draw();

        window.requestAnimationFrame(timeStamp => {
            this.gameLoop(timeStamp);
        });
    }
}

window.addEventListener('load', function() {
    new Main();
});