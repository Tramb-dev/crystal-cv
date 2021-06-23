class Player {
    constructor(grid, startMapPosition, levelMapping) {
        this.playerDiv = '';
        this.playerImg = '';
        this.masqueDiv = '';
        this.mapPosition = startMapPosition;
        this.grid = grid;
        this.levelMapping = levelMapping;
        // permet d'éviter de cumuler l'action des touches sur les déplacements
        this.enCoursDeDeplacement = {
            versLeHaut: {
                identifiantAnimationDiv: 0,
                identifiantAnimationImg: 0,
                animationEnCours: false,
                derniereImage: 0,
            },
            versLaDroite: {
                identifiantAnimationDiv: 0,
                identifiantAnimationImg: 0,
                animationEnCours: false,
                derniereImage: 0,
            },
            versLeBas: {
                identifiantAnimationDiv: 0,
                identifiantAnimationImg: 0,
                animationEnCours: false,
                derniereImage: 0,
            },
            versLaGauche: {
                identifiantAnimationDiv: 0,
                identifiantAnimationImg: 0,
                animationEnCours: false,
                derniereImage: 0,
            },
            saut: {
                identifiantAnimationDiv: 0,
                identifiantAnimationImg: 0,
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

    // Génère le personnage à la création
    init() {
        this.playerDiv = document.getElementById("player_container");
        this.playerDiv.style.display = "block";
        this.playerDiv.style.width = this.grid.case + "px";
        this.playerDiv.style.height = this.grid.case + "px";
        // Placement du personnage au démarrage selon la carte
        this.playerDiv.style.top = this.mapPosition.y * this.grid.case + "px";
        this.playerDiv.style.left = this.mapPosition.x * this.grid.case + "px";

        this.masqueDiv = document.getElementById("masque_container");

        this.playerImg = document.createElement("img");
        this.playerImg.src = "assets/sprites/spr_player/Terra_sprites.webp";
        this.playerImg.id = "player";
        this.playerImg.alt = "Personnage du joueur";
        this.masqueDiv.appendChild(this.playerImg);
        this.choixImageSprite(0);

        this.controls();
    }

    // Gestion de l'interaction avec le joueur (clavier/souris)
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
        }, false);
        
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

    // Gère le déplacement du personnage
    // TODO : prendre en compte le cas de l'appuie de 2 touches simultanées
    deplacement(direction){
        let reverse = false;
        let increment = this.grid.case;
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

        // Bouge le sprite (la position définit l'emplacement dans l'objet sprite, auquel on ajoute jusqu'à 3 images pour une animation)
        const bougeSprite = () => {
            this.choixImageSprite(spritePosition + (this.enCoursDeDeplacement[direction].derniereImage % 3), reverse);
            this.enCoursDeDeplacement[direction].derniereImage++;
        };

        const bougePlayerDiv = () => {
            let x = this.mapPosition.x, y = this.mapPosition.y;
            switch (direction) {
                case 'versLeHaut':
                    y--;
                    break;

                case 'versLeBas':
                   y++;
                    break;

                case 'versLaGauche':
                    x--;
                    break;

                case 'versLaDroite':
                    x++;
                    break;
            }
            if (this.canWalk(x, y)) {
                this.playerDiv.style[proprieteDeStyle] = parseFloat(this.playerDiv.style[proprieteDeStyle]) + increment + 'px';
                this.mapPosition.x = x;
                this.mapPosition.y = y;
            }
        };
        
        if (!this.enCoursDeDeplacement[direction].animationEnCours) {
            this.enCoursDeDeplacement[direction].animationEnCours = true;
            this.enCoursDeDeplacement[direction].identifiantAnimationImg = window.setInterval(bougeSprite, 66);
            this.enCoursDeDeplacement[direction].identifiantAnimationDiv = window.setInterval(bougePlayerDiv, 200);
        }
    }

    // Annule le déplacement en cours (lorsque le joueur arrête d'appuyer sur la touche)
    annulerDeplacement(direction) {
        window.clearInterval(this.enCoursDeDeplacement[direction].identifiantAnimationImg);
        window.clearInterval(this.enCoursDeDeplacement[direction].identifiantAnimationDiv);
        this.enCoursDeDeplacement[direction].animationEnCours = false;
        this.enCoursDeDeplacement[direction].derniereImage = 0;
    }

    // Test si le joueur peut se déplacer sur la case suivante
    canWalk(x, y) {
        if (x >= 0 && y >= 0 && y < this.levelMapping.height && x < this.levelMapping.width){
            // Regarde sur chaque layer s'il y a une restriction de mouvement. Une seule suffit pour stopper le joueur
            for (const element of this.levelMapping.data[y][x]) {
                if(!tileSets[this.levelMapping.globalTilesetId].tilesetNames[element.tilesetId].data[element.tileId].canWalk) return false;
            }
            return true;
        }
        return false;
    }

    
    // Choisi le sprite à afficher et les dimensions du masque
    choixImageSprite(spritePosition, reverse = false) {
        if (reverse) {
            this.masqueDiv.style.transform = 'scaleX(-1)';
        } else {
            this.masqueDiv.style.transform = 'none';
        }
        this.playerImg.style.left = this.sprite[spritePosition][1].left + "px";
        this.masqueDiv.style.width = this.sprite[spritePosition][0].width + "px";
        this.masqueDiv.style.height = this.sprite[spritePosition][0].height + "px";
        this.playerImg.style.top = this.sprite[spritePosition][1].top + "px";
    }

    update(secondsPassed) {
       // this.controls();
    }

    draw() {

    }
}