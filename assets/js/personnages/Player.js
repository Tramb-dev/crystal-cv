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
            needUpdate: false,
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
        this.speedMap = level.speedMap; 
        this.levelDraw = level.mapDraw;
        this.timePassed = 0;
        this.score = 0;
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

    update(secondsPassed, keybordPressed) {
        this.timePassed += secondsPassed;
        let direction = false;

        // On bouge le personnage du joueur si on est bien dans l'état jeu
        if ( keybordPressed.isMovementPressed() && scripts.gameState === 'game' ) {
            let dirX = 0, dirY = 0;
            switch ( keybordPressed.lastPressed() ) {
                case 37:
                    dirX--;
                    direction = 'versLaGauche';
                    break;

                case 38:
                    dirY--;
                    direction = 'versLeHaut';
                    break;

                case 39:
                    dirX++;
                    direction = 'versLaDroite';
                    break;

                case 40:
                    dirY++;
                    direction = 'versLeBas';
                    break;
            }

            if ( this.timePassed - this.enCoursDeDeplacement[direction].timestampDeplacement > this.speedMap && this.enCoursDeDeplacement[direction].canMove ) {
                if(this.canWalk(dirX, dirY)) {
                    this.enCoursDeDeplacement[direction].timestampDeplacement = this.timePassed;
                    this.gridPosition.x += dirX;
                    this.gridPosition.y += dirY;
                    this.gridPosition.needUpdate = direction;
                }
            }

            if ( this.levelDraw.map[this.gridPosition.y][this.gridPosition.x].hasOwnProperty('script') ) {
                const scriptRef = events[this.levelDraw.map[this.gridPosition.y][this.gridPosition.x].script];
                if ( !scriptRef.executed && scriptRef.toDisplay ) {
                    scriptRef.action();
                }
            }
        }

        // Annulation des animations du personnage sur les mouvements qui ne concernent pas la dernière touche rentrée (au cas où le joueur appuie sur 2 touches)
        Object.keys(this.enCoursDeDeplacement).forEach(element => {
            if (this.enCoursDeDeplacement[element].animationEnCours && (element != direction || !direction)) {
                this.annulerDeplacement(element);
            }
        });
    }

    draw() {
        // Pour éviter de mettre à jour en permanence
        if ( this.gridPosition.needUpdate ) {
            this.deplacement(this.gridPosition.needUpdate);
            this.gridPosition.needUpdate = false;
        }
    }
}