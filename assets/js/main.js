class Main {
    constructor() {
        this.pauseGame = {
            value: false,
            timestamp: 0
        };
        this.oldTimestamp = 0;
        this.keybordControls = new Controls();
        this.endedGame = false;
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

        // Ajoute la souris comme controleur de la touche entrée (passage de dialogues)
        const game_container = document.getElementById('game_container');
        game_container.addEventListener('mousedown', mouseEvent => {
            console.log(mouseEvent.region);
            this.keybordControls.onMouseDown(mouseEvent);
        });
        game_container.addEventListener('mouseup', mouseEvent => {
            this.keybordControls.onMouseUp(mouseEvent);
        });

        window.addEventListener('beforeunload', function (unloadEvent) {
            unloadEvent.returnValue = "Etes-vous sûr de vouloir quitter le jeu ?";
        });

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

        // Gestion du son
        const sound = document.getElementById("music");
        sound.volume = 0.3;
        sound.play();

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
        
        if (this.keybordControls.isPressed('Pause') || this.keybordControls.isPressed('Escape') || this.keybordControls.isPressed('KeyP')) {
            this.pause(timestamp);
        }
        
        if(!this.pauseGame.value) {
            // Débloquage de succès
            if ( scripts.gameState === 'game' ) {
                if ( this.player.score > 100 && !scripts.displayCompetencies.exp ) {
                    scripts.displayCompetencies.exp = true;
                    document.getElementById('experiences').style.display = "block";
                    setTimeout(() => {
                        this.player.dialog(7);
                    }, 100);
                } else if ( this.player.score > 200 && !scripts.displayCompetencies.formation ) {
                    scripts.displayCompetencies.formation = true;
                    document.getElementById('formations').style.display = "block";
                    setTimeout(() => {
                        this.player.dialog(7);
                    }, 100);
                } else if ( this.player.score > 300 && !scripts.displayCompetencies.hobbies ) {
                    scripts.displayCompetencies.hobbies = true;
                    document.getElementById('hobbies').style.display = "block";
                    setTimeout(() => {
                        this.player.dialog(7);
                    }, 100);
                } else if ( this.player.score > 400 && !scripts.displayCompetencies.contact ) {
                    scripts.displayCompetencies.contact = true;
                    document.getElementById('contact').style.display = "block";
                    setTimeout(() => {
                        events[6].toDisplay = true;
                        this.player.dialog(8);
                    }, 100);
                } else if ( this.player.score == 500 && events[6].executed && !this.endedGame ) {
                    // Le joueur a fini le jeu
                    this.endedGame = true;
                    setTimeout(() => {
                        this.player.dialog(11);
                    }, 100);
                }
            }
            
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