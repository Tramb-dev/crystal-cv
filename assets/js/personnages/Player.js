class Player extends Personnage {
    constructor(level) {
        super();
        this.playerDiv = document.getElementById("player_container");
        this.playerImg = document.createElement("img");
        this.masqueDiv = document.getElementById("masque_container");
        this.mapPosition = levelMap.startMapPosition;
        this.gridPosition = {
            x: levelMap.startMapPosition.x - level.camera.position.startX,
            y: levelMap.startMapPosition.y - level.camera.position.startY,
        };
        this.grid = level.case;
        this.cameraSize = level.camera.size;
        // permet d'éviter de cumuler l'action des touches sur les déplacements
        this.enCoursDeDeplacement = {
            versLeHaut: {
                identifiantAnimationDiv: 0,
                identifiantAnimationImg: 0,
                animationEnCours: false,
                derniereImage: 0,
                canMove: true,
                timestampDeplacement: 0
            },
            versLaDroite: {
                identifiantAnimationDiv: 0,
                identifiantAnimationImg: 0,
                animationEnCours: false,
                derniereImage: 0,
                canMove: true,
                timestampDeplacement: 0
            },
            versLeBas: {
                identifiantAnimationDiv: 0,
                identifiantAnimationImg: 0,
                animationEnCours: false,
                derniereImage: 0,
                canMove: true,
                timestampDeplacement: 0
            },
            versLaGauche: {
                identifiantAnimationDiv: 0,
                identifiantAnimationImg: 0,
                animationEnCours: false,
                derniereImage: 0,
                canMove: true,
                timestampDeplacement: 0
            },
            /* saut: {
                identifiantAnimationDiv: 0,
                identifiantAnimationImg: 0,
                animationEnCours: false,
            } */
        };
        this.sprite = [
            [
                {
                    width: 24,
                    height: 46
                },
                {
                    left: -3,
                    top: -2
                }
            ],
            [
                {
                    width: 26,
                    height: 46
                },
                {
                    left: -51,
                    top: -1
                }
            ],
            [
                {
                    width: 27,
                    height: 46
                },
                {
                    left: -99,
                    top: -2
                }
            ],
            [
                {
                    width: 22,
                    height: 46
                },
                {
                    left: -149,
                    top: -2
                }
            ],
            [
                {
                    width: 22,
                    height: 46
                },
                {
                    left: -197,
                    top: -1
                }
            ],
            [
                {
                    width: 22,
                    height: 46
                },
                {
                    left: -245,
                    top: -2
                }
            ],
            [
                {
                    width: 26,
                    height: 43
                },
                {
                    left: -292,
                    top: -5
                }
            ],
            [
                {
                    width: 26,
                    height: 44
                },
                {
                    left: -340,
                    top: -4
                }
            ],
            [
                {
                    width: 28,
                    height: 43
                },
                {
                    left: -386,
                    top: -5
                }
            ],
            [
                {
                    width: 26,
                    height: 37
                },
                {
                    left: -434,
                    top: -11
                }
            ],
            [
                {
                    width: 28,
                    height: 43
                },
                {
                    left: -6,
                    top: -53
                }
            ],
            [
                {
                    width: 36,
                    height: 45
                },
                {
                    left: -49,
                    top: -50
                }
            ],
            [
                {
                    width: 26,
                    height: 44
                },
                {
                    left: -100,
                    top: -52
                }
            ],
            [
                {
                    width: 26,
                    height: 43
                },
                {
                    left: -148,
                    top: -53
                }
            ],
            [
                {
                    width: 29,
                    height: 43
                },
                {
                    left: -196,
                    top: -53
                }
            ],
            [
                {
                    width: 29,
                    height: 46
                },
                {
                    left: -240,
                    top: -49
                }
            ],
            [
                {
                    width: 27,
                    height: 45
                },
                {
                    left: -291,
                    top: -50
                }
            ],
            [
                {
                    width: 27,
                    height: 45
                },
                {
                    left: -339,
                    top: -50
                }
            ],
            [
                {
                    width: 24,
                    height: 46
                },
                {
                    left: -387,
                    top: -49
                }
            ],
            [
                {
                    width: 29,
                    height: 46
                },
                {
                    left: -430,
                    top: -49
                }
            ],
            [
                {
                    width: 29,
                    height: 46
                },
                {
                    left: -5,
                    top: -97
                }
            ],
            [
                {
                    width: 24,
                    height: 46
                },
                {
                    left: -51,
                    top: -97
                }
            ],
            [
                {
                    width: 24,
                    height: 46
                },
                {
                    left: -99,
                    top: -97
                }
            ],
            [
                {
                    width: 47,
                    height: 24
                },
                {
                    left: -136,
                    top: -119
                }
            ],
            [
                {
                    width: 24,
                    height: 46
                },
                {
                    left: -196,
                    top: -97
                }
            ],
            [
                {
                    width: 26,
                    height: 46
                },
                {
                    left: -243,
                    top: -97
                }
            ],
            [
                {
                    width: 24,
                    height: 45
                },
                {
                    left: -291,
                    top: -98
                }
            ],
            [
                {
                    width: 39,
                    height: 44
                },
                {
                    left: -332,
                    top: -98
                }
            ],
            [
                {
                    width: 24,
                    height: 45
                },
                {
                    left: -387,
                    top: -98
                }
            ],
            [
                {
                    width: 23,
                    height: 46
                },
                {
                    left: -436,
                    top: -97
                }
            ],
            [
                {
                    width: 24,
                    height: 46
                },
                {
                    left: -5,
                    top: -145
                }
            ],
            [
                {
                    width: 24,
                    height: 47
                },
                {
                    left: -51,
                    top: -144
                }
            ],
            [
                {
                    width: 22,
                    height: 45
                },
                {
                    left: -101,
                    top: -146
                }
            ],
            [
                {
                    width: 29,
                    height: 46
                },
                {
                    left: -142,
                    top: -146
                }
            ],
            [
                {
                    width: 26,
                    height: 46
                },
                {
                    left: -196,
                    top: -145
                }
            ],
            [
                {
                    width: 26,
                    height: 44
                },
                {
                    left: -244,
                    top: -148
                }
            ],
            [
                {
                    width: 24,
                    height: 46
                },
                {
                    left: -291,
                    top: -145
                }
            ],
            [
                {
                    width: 24,
                    height: 46
                },
                {
                    left: -339,
                    top: -145
                }
            ],
            [
                {
                    width: 27,
                    height: 30
                },
                {
                    left: -387,
                    top: -161
                }
            ],
            [
                {
                    width: 37,
                    height: 42
                },
                {
                    left: -429,
                    top: -148
                }
            ],
            [
                {
                    width: 30,
                    height: 45
                },
                {
                    left: -3,
                    top: -193
                }
            ],
            [
                {
                    width: 32,
                    height: 45
                },
                {
                    left: -50,
                    top: -193
                }
            ],
        ];   
        this.levelDraw = level.mapDraw;
        this.init();
    }

    // Génère le personnage à la création
    init() {
        this.playerDiv.classList.toggle("fade");
        this.playerDiv.style.width = this.grid + "px";
        this.playerDiv.style.height = this.grid + "px";
        // Placement du personnage au démarrage selon la carte
        this.playerDiv.style.top = this.gridPosition.y * this.grid + "px";
        this.playerDiv.style.left = this.gridPosition.x * this.grid + "px";

        this.playerImg.src = "assets/sprites/spr_player/Terra_sprites.webp";
        this.playerImg.id = "player";
        this.playerImg.alt = "Personnage du joueur";
        this.masqueDiv.appendChild(this.playerImg);
        this.choixImageSprite(0);
    }

    update(keybordPressed) {

        // FIXME : 2 appuis envoient le personnage vrier et aller trop vite, gérer un seul appui à la fois
        if ( keybordPressed.isPressed(37) && keybordPressed.lastMovementPressed == 37 ) {
            this.deplacement('versLaGauche');
        } else if ( this.enCoursDeDeplacement.versLaGauche.animationEnCours || keybordPressed.lastMovementPressed != 37 ) {
            this.annulerDeplacement('versLaGauche');
        }
        if ( keybordPressed.isPressed(38) && keybordPressed.lastMovementPressed == 38 ) {
            this.deplacement('versLeHaut');
        } else if ( this.enCoursDeDeplacement.versLeHaut.animationEnCours || keybordPressed.lastMovementPressed != 38 ) {
            this.annulerDeplacement('versLeHaut');
        }
        if ( keybordPressed.isPressed(39) && keybordPressed.lastMovementPressed == 39 ) {
            this.deplacement('versLaDroite');
        } else if ( this.enCoursDeDeplacement.versLaDroite.animationEnCours || keybordPressed.lastMovementPressed != 39 ) {
            this.annulerDeplacement('versLaDroite');
        }
        if ( keybordPressed.isPressed(40) && keybordPressed.lastMovementPressed == 40 ) {
            this.deplacement('versLeBas');
        } else if ( this.enCoursDeDeplacement.versLeBas.animationEnCours || keybordPressed.lastMovementPressed != 40 ) {
            this.annulerDeplacement('versLeBas');
        }
    }

    draw() {
       /*  for (let direction of Object.keys(this.enCoursDeDeplacement)) {
         
        } */
        
    }
}