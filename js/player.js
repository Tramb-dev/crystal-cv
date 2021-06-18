class Player {
    constructor() {
        this.playerDiv = '';
        this.playerImg = '';
        // permet d'éviter de cumuler l'action des touches sur les déplacements
        this.enCoursDeDeplacement = {
            versLeHaut: {
                identifiantAnimation: 0,
                animationEnCours: false,
                derniereImage: 0,
            },
            versLaDroite: {
                identifiantAnimation: 0,
                animationEnCours: false,
                derniereImage: 0,
            },
            versLeBas: {
                identifiantAnimation: 0,
                animationEnCours: false,
                derniereImage: 0,
            },
            versLaGauche: {
                identifiantAnimation: 0,
                animationEnCours: false,
                derniereImage: 0,
            },
            saut: {
                identifiantAnimation: 0,
                animationEnCours: false,
            }
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
    }

    // génère le personnage à la création
    creation() {
        this.playerDiv = document.getElementById("player_container");
        this.playerDiv.style.top = 0;
        this.playerDiv.style.left = 0;

        this.playerImg = document.createElement("img");
        this.playerImg.src = "assets/sprites/spr_player/Terra_sprites.webp";
        this.playerImg.id = "player";
        this.playerImg.alt = "Personnage du joueur";
        this.playerDiv.appendChild(this.playerImg);
        this.choixImageSprite(0);
        this.controls();
    }

    // gère le déplacement du personnage
    deplacement(direction){
        let increment = 5, reverse = false;
        let proprieteDeStyle = 'left';
        let spritePosition = 6;
        switch (direction) {
            case 'versLeHaut':
                proprieteDeStyle = 'top';
                increment *= -1;
                spritePosition = 3;
                break;

            case 'versLeBas':
                proprieteDeStyle = 'top';
                spritePosition = 0;
                break;

            case 'versLaGauche':
                increment *= -1;
                break;

            case 'versLaDroite':
                reverse = true;
                break;
        }
        
        if (!this.enCoursDeDeplacement[direction].animationEnCours) {
            this.enCoursDeDeplacement[direction].animationEnCours = true;
            this.enCoursDeDeplacement[direction].identifiantAnimation = window.setInterval(() => {
                // Bouge le masque
                this.playerDiv.style[proprieteDeStyle] = parseFloat(this.playerDiv.style[proprieteDeStyle]) + increment + 'px';

                // Bouge le sprite (la position définit l'emplacement dans l'objet sprite, auquel on ajoute jusqu'à 3 images pour une animation)
                this.choixImageSprite(spritePosition + (this.enCoursDeDeplacement[direction].derniereImage % 3), reverse);
                this.enCoursDeDeplacement[direction].derniereImage++;
            }, 50);
        }
    }

    // annule le déplacement (lorsque le joueur arrête d'appuyer sur la touche)
    annulerDeplacement(direction) {
        window.clearInterval(this.enCoursDeDeplacement[direction].identifiantAnimation);
        this.enCoursDeDeplacement[direction].animationEnCours = false;
        this.enCoursDeDeplacement[direction].derniereImage = 0;
    }

    // Gestion de l'interaction avec l'utilisateur (clavier/souris)
    controls() {
        window.addEventListener('keydown', keyboardEvent => {
            switch ( keyboardEvent.code ) {
                case 'ArrowUp':
                    this.deplacement('versLeHaut');
                    break;
                case 'ArrowRight':
                    this.deplacement('versLaDroite');
                    break;
                case 'ArrowDown':
                    this.deplacement('versLeBas');
                    break;
                case 'ArrowLeft':
                    this.deplacement('versLaGauche');
                    break;
            }
        });
        
        window.addEventListener('keyup', keyboardEvent => {
            switch ( keyboardEvent.code ) {
                case 'ArrowUp':
                    this.annulerDeplacement('versLeHaut');
                    break;
                case 'ArrowRight':
                    this.annulerDeplacement('versLaDroite');
                    break;
                case 'ArrowDown':
                    this.annulerDeplacement('versLeBas');
                    break;
                case 'ArrowLeft':
                    this.annulerDeplacement('versLaGauche');
                    break;
            }
        });
    }

    // Choisi le sprite à afficher et les dimensions du masque
    choixImageSprite(spritePosition, reverse = false) {
        if (reverse) {
            this.playerDiv.style.transform = 'scaleX(-1)';
        } else {
            this.playerDiv.style.transform = 'none';
        }
        this.playerImg.style.left = this.sprite[spritePosition][1].left + "px";
        this.playerDiv.style.width = this.sprite[spritePosition][0].width + "px";
        this.playerDiv.style.height = this.sprite[spritePosition][0].height + "px";
        this.playerImg.style.top = this.sprite[spritePosition][1].top + "px";
    }
}