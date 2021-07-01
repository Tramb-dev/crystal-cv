class Main {
    constructor() {
        this.pauseGame = {
            value: false,
            timestamp: 0
        };
        this.oldTimestamp = 0;
        this.keybordControls = new Controls();
        //this.gameObjects = [];

        this.init();
    }

    init() {
        document.querySelector('.button').addEventListener('click', () => {
            this.menu();
        }, false);

        window.addEventListener('keydown', keyboardEvent => { 
            this.keybordControls.onKeyDown(keyboardEvent); 
        }, false);
        window.addEventListener('keyup', keyboardEvent => { 
            this.keybordControls.onKeyUp(keyboardEvent); 
        }, false);

        /* 
        // Gestion du offcanvas du site
         */
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
        //////////////////////////////////////////////

        // Gestion de la musique
        /* const audioBalise = document.getElementById('music');
        audioBalise.play(); */

        /* this.gameObjects = [
            new LevelOne(),
            new Player()
        ]; */
    }

    menu() {
        scripts.gameState = 'game';
        const menu = document.getElementById('menu');
        menu.classList.toggle("fade");
        window.setTimeout(function() {
            menu.style.display = 'none';
        }, 400);
        this.level = new LevelOne();
        this.player = new Player(this.level);

        window.requestAnimationFrame(timeStamp => {
            this.gameLoop(timeStamp);
        });
    }

    pause(timestamp) {
        if (timestamp - this.pauseGame.timestamp > 300) {
            const divPause = document.querySelector(".modal_container");
            this.pauseGame.timestamp = timestamp;
            if (this.pauseGame.value) {
                this.pauseGame.value = false;
                divPause.style.display = "none";
            } else {
                this.pauseGame.value = true;
                divPause.style.display = "flex";
            }
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
        
        if (this.keybordControls.isPressed(27) || this.keybordControls.isPressed(19) || this.keybordControls.isPressed(80)) {
            this.pause(timestamp);
        }
        
        if(!this.pauseGame.value) {
           /*  if (this.keybordControls.isPressed(37) || this.keybordControls.isPressed(38) || this.keybordControls.isPressed(39) || this.keybordControls.isPressed(40)) {
                const canWalk = this.player.canWalk()
            } */
            
            this.level.update(secondsPassed, this.player, this.keybordControls);
            this.player.update(secondsPassed, this.keybordControls);
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