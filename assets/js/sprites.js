/* 
// Objet contenant les différents tilesets avec les différents emplacements sur le tileset, et savoir si le joueur peut franchir ou non la case.
*/
const tileSets = [
    { // 0
        path: "assets/sprites/spr_tileset/Outside_A1.png",
        data: [
            { // 0 flaque sur herbe
                canWalk: false,
                isAnimation: true,
                position: [
                    {
                        x: 0,
                        y: 0
                    },
                    {
                        x: 2,
                        y: 0
                    },
                    {
                        x: 4,
                        y: 0
                    }
                ]
            },
            { // 1 flaque croisement sur herbe
                canWalk: false, 
                isAnimation: true,
                position: [
                    {
                        x: 1,
                        y: 0
                    },
                    {
                        x: 3,
                        y: 0
                    },
                    {
                        x: 5,
                        y: 0
                    }
                ]
            },
            { // 2 lac haut gauche sur herbe
                canWalk: false, 
                isAnimation: true,
                position: [
                    {
                        x: 0,
                        y: 1
                    },
                    {
                        x: 2,
                        y: 1
                    },
                    {
                        x: 4,
                        y: 1
                    }
                ]
            },
            { // 3 lac haut droit sur herbe
                canWalk: false, 
                isAnimation: true,
                position: [
                    {
                        x: 1,
                        y: 1
                    },
                    {
                        x: 3,
                        y: 1
                    },
                    {
                        x: 5,
                        y: 1
                    }
                ]
            },
            { // 4 lac bas gauche sur herbe
                canWalk: false, 
                isAnimation: true,
                position: [
                    {
                        x: 0,
                        y: 2
                    },
                    {
                        x: 2,
                        y: 2
                    },
                    {
                        x: 4,
                        y: 2
                    }
                ]
            },
            { // 5 lac bas droit sur herbe
                canWalk: false, 
                isAnimation: true,
                position: [
                    {
                        x: 1,
                        y: 2
                    },
                    {
                        x: 3,
                        y: 2
                    },
                    {
                        x: 5,
                        y: 2
                    }
                ]
            },
            { // 6 flaque sur désert
                canWalk: false, 
                isAnimation: true,
                position: [
                    {
                        x: 0,
                        y: 6
                    },
                    {
                        x: 2,
                        y: 6
                    },
                    {
                        x: 4,
                        y: 6
                    }
                ]
            },
            { // 7 flaque croisement sur désert
                canWalk: false, 
                isAnimation: true,
                position: [
                    {
                        x: 1,
                        y: 6
                    },
                    {
                        x: 3,
                        y: 6
                    },
                    {
                        x: 5,
                        y: 6
                    }
                ]
            },
            { // 8 lac haut gauche sur désert
                canWalk: false, 
                isAnimation: true,
                position: [
                    {
                        x: 0,
                        y: 7
                    },
                    {
                        x: 2,
                        y: 7
                    },
                    {
                        x: 4,
                        y: 7
                    }
                ]
            },
            { // 9 lac haut droit sur désert
                canWalk: false, 
                isAnimation: true,
                position: [
                    {
                        x: 1,
                        y: 7
                    },
                    {
                        x: 3,
                        y: 7
                    },
                    {
                        x: 5,
                        y: 7
                    }
                ]
            },
            { // 10 lac bas gauche sur désert
                canWalk: false, 
                isAnimation: true,
                position: [
                    {
                        x: 0,
                        y: 8
                    },
                    {
                        x: 2,
                        y: 8
                    },
                    {
                        x: 4,
                        y: 8
                    }
                ]
            },
            { // 11 lac bas droit sur désert
                canWalk: false, 
                isAnimation: true,
                position: [
                    {
                        x: 1,
                        y: 8
                    },
                    {
                        x: 3,
                        y: 8
                    },
                    {
                        x: 5,
                        y: 8
                    }
                ]
            },
            { // 12 herbier dans l'eau seul
                canWalk: false, 
                isAnimation: false,
                position: [
                    {
                        x: 6,
                        y: 3
                    }
                ]
            },
            { // 13 herbier dans l'eau haut gauche
                canWalk: false, 
                isAnimation: false,
                position: [
                    {
                        x: 6,
                        y: 4
                    }
                ]
            },
            { // 14 herbier dans l'eau haut droit
                canWalk: false, 
                isAnimation: false,
                position: [
                    {
                        x: 7,
                        y: 4
                    }
                ]
            },
            { // 15 herbier dans l'eau bas gauche
                canWalk: false, 
                isAnimation: false,
                position: [
                    {
                        x: 6,
                        y: 5
                    }
                ]
            },
            { // 16 herbier dans l'eau bas droit
                canWalk: false, 
                isAnimation: false,
                position: [
                    {
                        x: 7,
                        y: 5
                    }
                ]
            },
            { // 17 poison sur désert
                canWalk: false, 
                isAnimation: true,
                position: [
                    {
                        x: 8,
                        y: 9
                    },
                    {
                        x: 10,
                        y: 9
                    },
                    {
                        x: 12,
                        y: 9
                    }
                ]
            },
            { // 18 poison croisement sur désert
                canWalk: false, 
                isAnimation: true,
                position: [
                    {
                        x: 9,
                        y: 9
                    },
                    {
                        x: 11,
                        y: 9
                    },
                    {
                        x: 13,
                        y: 9
                    }
                ]
            },
            { // 19 poison haut gauche sur désert
                canWalk: false, 
                isAnimation: true,
                position: [
                    {
                        x: 8,
                        y: 10
                    },
                    {
                        x: 10,
                        y: 10
                    },
                    {
                        x: 12,
                        y: 10
                    }
                ]
            },
            { // 20 poison haut droit sur désert
                canWalk: false, 
                isAnimation: true,
                position: [
                    {
                        x: 9,
                        y: 10
                    },
                    {
                        x: 11,
                        y: 10
                    },
                    {
                        x: 13,
                        y: 10
                    }
                ]
            },
            { // 21 poison bas gauche sur désert
                canWalk: false, 
                isAnimation: true,
                position: [
                    {
                        x: 8,
                        y: 11
                    },
                    {
                        x: 10,
                        y: 11
                    },
                    {
                        x: 12,
                        y: 11
                    }
                ]
            },
            { // 22 poison bas droit sur désert
                canWalk: false, 
                isAnimation: true,
                position: [
                    {
                        x: 9,
                        y: 11
                    },
                    {
                        x: 11,
                        y: 11
                    },
                    {
                        x: 13,
                        y: 11
                    }
                ]
            },
            { // 23 arbre dans poison
                canWalk: false, 
                isAnimation: true,
                position: [
                    {
                        x: 14,
                        y: 9
                    },
                    {
                        x: 14,
                        y: 10
                    },
                    {
                        x: 14,
                        y: 11
                    }
                ]
            },
            { // 24 bulle d'eau
                canWalk: false, 
                isAnimation: true,
                position: [
                    {
                        x: 14,
                        y: 6
                    },
                    {
                        x: 14,
                        y: 7
                    },
                    {
                        x: 14,
                        y: 8
                    }
                ]
            },
            { // 25 cascade gauche
                canWalk: false, 
                isAnimation: true,
                position: [
                    {
                        x: 6,
                        y: 6
                    },
                    {
                        x: 6,
                        y: 7
                    },
                    {
                        x: 6,
                        y: 8
                    }
                ]
            },
            { // 26 cascade droite
                canWalk: false, 
                isAnimation: true,
                position: [
                    {
                        x: 7,
                        y: 6
                    },
                    {
                        x: 7,
                        y: 7
                    },
                    {
                        x: 7,
                        y: 8
                    }
                ]
            },
            { // 27 bassin avec muret
                canWalk: false, 
                isAnimation: true,
                position: [
                    {
                        x: 8,
                        y: 6
                    },
                    {
                        x: 10,
                        y: 6
                    },
                    {
                        x: 12,
                        y: 6
                    }
                ]
            },
            { // 28 bassin
                canWalk: false, 
                isAnimation: true,
                position: [
                    {
                        x: 9,
                        y: 6
                    },
                    {
                        x: 11,
                        y: 6
                    },
                    {
                        x: 13,
                        y: 6
                    }
                ]
            },
            { // 29 eau
                canWalk: false, 
                isAnimation: true,
                position: [
                    {
                        x: 0.5,
                        y: 1.5
                    },
                    {
                        x: 2.5,
                        y: 1.5
                    },
                    {
                        x: 4.5,
                        y: 1.5
                    }
                ]
            },
            { // 30 lac haut gauche sur caillou
                canWalk: true, 
                isAnimation: true,
                position: [
                    {
                        x: 0,
                        y: 4
                    },
                    {
                        x: 2,
                        y: 4
                    },
                    {
                        x: 4,
                        y: 4
                    }
                ]
            },
            { // 31 lac haut droit sur caillou
                canWalk: true, 
                isAnimation: true,
                position: [
                    {
                        x: 1,
                        y: 4
                    },
                    {
                        x: 3,
                        y: 4
                    },
                    {
                        x: 5,
                        y: 4
                    }
                ]
            },
            { // 32 lac bas gauche sur caillou
                canWalk: true, 
                isAnimation: true,
                position: [
                    {
                        x: 0,
                        y: 5
                    },
                    {
                        x: 2,
                        y: 5
                    },
                    {
                        x: 4,
                        y: 5
                    }
                ]
            },
            { // 33 lac bas droit sur caillou
                canWalk: true, 
                isAnimation: true,
                position: [
                    {
                        x: 1,
                        y: 5
                    },
                    {
                        x: 3,
                        y: 5
                    },
                    {
                        x: 5,
                        y: 5
                    }
                ]
            },
        ]
    },
    { // 1
        path: "assets/sprites/spr_tileset/Outside_A2.png",
        data: [
            { // 0 herbe
                position: [
                    {
                        x: 0,
                        y: 0
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 1 sable sur herbe
                position: [
                    {
                        x: 2,
                        y: 0
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 2 sable sur herbe croisement
                position: [
                    {
                        x: 3,
                        y: 0
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 3 sable sur herbe haut gauche
                position: [
                    {
                        x: 2,
                        y: 1
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 4 sable sur herbe haut droit
                position: [
                    {
                        x: 3,
                        y: 1
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 5 sable sur herbe bas gauche
                position: [
                    {
                        x: 2,
                        y: 2
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 6 sable sur herbe bas droit
                position: [
                    {
                        x: 3,
                        y: 2
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 7 sable
                position: [
                    {
                        x: 0,
                        y: 3
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 8 herbe sur sable
                position: [
                    {
                        x: 2,
                        y: 3
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 9 herbe sur sable croisement
                position: [
                    {
                        x: 3,
                        y: 3
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 10 herbe sur sable haut gauche
                position: [
                    {
                        x: 2,
                        y: 4
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 11 herbe sur sable haut droit
                position: [
                    {
                        x: 3,
                        y: 4
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 12 herbe sur sable bas gauche
                position: [
                    {
                        x: 2,
                        y: 5
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 13 herbe sur sable bas droit
                position: [
                    {
                        x: 3,
                        y: 5
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 14 parquet
                position: [
                    {
                        x: 0,
                        y: 6
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 15 pierre sur herbe
                position: [
                    {
                        x: 4,
                        y: 0
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 16 pierre sur herbe croisement
                position: [
                    {
                        x: 5,
                        y: 0
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 17 pierre sur herbe haut gauche
                position: [
                    {
                        x: 4,
                        y: 1
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 18 pierre sur herbe haut droit
                position: [
                    {
                        x: 5,
                        y: 1
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 19 pierre sur herbe bas gauche
                position: [
                    {
                        x: 4,
                        y: 2
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 20 pierre sur herbe bas droit
                position: [
                    {
                        x: 5,
                        y: 2
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 21 pierre sur désert
                position: [
                    {
                        x: 4,
                        y: 3
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 22 pierre sur désert croisement
                position: [
                    {
                        x: 5,
                        y: 3
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 23 pierre sur désert haut gauche
                position: [
                    {
                        x: 4,
                        y: 4
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 24 pierre sur désert haut droit
                position: [
                    {
                        x: 5,
                        y: 4
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 25 pierre sur désert bas gauche
                position: [
                    {
                        x: 4,
                        y: 5
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 26 pierre sur désert bas droit
                position: [
                    {
                        x: 5,
                        y: 5
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 27 bosquet vert
                position: [
                    {
                        x: 8,
                        y: 0
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 28 bosquet vert croisement
                position: [
                    {
                        x: 9,
                        y: 0
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 29 bosquet vert haut gauche
                position: [
                    {
                        x: 8,
                        y: 1
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 30 bosquet vert haut droit
                position: [
                    {
                        x: 9,
                        y: 1
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 31 bosquet vert bas gauche
                position: [
                    {
                        x: 8,
                        y: 2
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 32 bosquet vert bas droit
                position: [
                    {
                        x: 9,
                        y: 2
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 33 bosquet jaune
                position: [
                    {
                        x: 8,
                        y: 3
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 34 hautes herbes
                position: [
                    {
                        x: 14,
                        y: 6
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 35 hautes herbes croisement
                position: [
                    {
                        x: 15,
                        y: 6
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 36 hautes herbes haut gauche
                position: [
                    {
                        x: 14,
                        y: 7
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 37 hautes herbes haut droit
                position: [
                    {
                        x: 15,
                        y: 7
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 38 hautes herbes bas gauche
                position: [
                    {
                        x: 14,
                        y: 8
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 39 hautes herbes bas droit
                position: [
                    {
                        x: 15,
                        y: 8
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 40 trou dans sable
                position: [
                    {
                        x: 14,
                        y: 9
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 41 esplanade
                position: [
                    {
                        x: 6,
                        y: 6
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 42 esplanade haut gauche
                position: [
                    {
                        x: 6,
                        y: 7
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 43 esplanade haut droit
                position: [
                    {
                        x: 7,
                        y: 7
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 44 esplanade bas gauche
                position: [
                    {
                        x: 6,
                        y: 8
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 45 esplanade bas droit
                position: [
                    {
                        x: 7,
                        y: 8
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 46 barrière
                position: [
                    {
                        x: 12,
                        y: 0
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 47 barrière croisement
                position: [
                    {
                        x: 13,
                        y: 0
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 48 barrière haut gauche
                position: [
                    {
                        x: 12,
                        y: 1
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 49 barrière haut droit
                position: [
                    {
                        x: 13,
                        y: 1
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 50 barrière bas gauche
                position: [
                    {
                        x: 12,
                        y: 2
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 51 barrière bas droit
                position: [
                    {
                        x: 13,
                        y: 2
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 52 plate-bande
                position: [
                    {
                        x: 10,
                        y: 0
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 53 plate-bande croisement
                position: [
                    {
                        x: 11,
                        y: 0
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 54 plate-bande haut gauche
                position: [
                    {
                        x: 10,
                        y: 1
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 55 plate-bande haut droit
                position: [
                    {
                        x: 11,
                        y: 1
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 56 plate-bande bas gauche
                position: [
                    {
                        x: 10,
                        y: 2
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 57 plate-bande bas droit
                position: [
                    {
                        x: 11,
                        y: 2
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
        ]
    },
    { // 2
        path: "assets/sprites/spr_tileset/Outside_A3.png",
        data: [
            { // 0 Toit jaune
                position: [
                    {
                        x: 3,
                        y: 0
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 1 Toit bois
                position: [
                    {
                        x: 8,
                        y: 0
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 2 Toit vert
                position: [
                    {
                        x: 0,
                        y: 2
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 3 Mur bois horizontal
                position: [
                    {
                        x: 8,
                        y: 2
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 4 Mur bois vertical
                position: [
                    {
                        x: 5,
                        y: 1
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 5 Mur pierre verdure
                position: [
                    {
                        x: 6,
                        y: 6
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 6 Mur jolies pierres
                position: [
                    {
                        x: 2,
                        y: 3
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
        ]
    },
    { // 3
        path: "assets/sprites/spr_tileset/Outside_A4.png",
        data: [
            { // 0 Mur donjon tour haut condensé
                position: [
                    {
                        x: 6,
                        y: 0
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 1 Mur donjon tour haut gauche
                position: [
                    {
                        x: 6,
                        y: 1
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 2 Mur donjon tour haut droit
                position: [
                    {
                        x: 7,
                        y: 1
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 3 Mur donjon tour bas gauche
                position: [
                    {
                        x: 6,
                        y: 2
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 4 Mur donjon tour bas droit
                position: [
                    {
                        x: 7,
                        y: 2
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 5 Mur donjon haut gauche
                position: [
                    {
                        x: 6,
                        y: 3
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 6 Mur donjon haut droit
                position: [
                    {
                        x: 7,
                        y: 3
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 7 Mur donjon bas gauche
                position: [
                    {
                        x: 6,
                        y: 4
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 8 Mur donjon bas droit
                position: [
                    {
                        x: 7,
                        y: 4
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 9 Marbre haut gauche
                position: [
                    {
                        x: 10,
                        y: 3
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 10 Marbre haut droit
                position: [
                    {
                        x: 11,
                        y: 3
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 11 Marbre bas gauche
                position: [
                    {
                        x: 10,
                        y: 4
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 12 Marbre bas droit
                position: [
                    {
                        x: 11,
                        y: 4
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 13 Forêt dense haut gauche
                position: [
                    {
                        x: 4,
                        y: 11
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 14 Forêt dense haut droit
                position: [
                    {
                        x: 5,
                        y: 11
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 15 Forêt dense bas gauche
                position: [
                    {
                        x: 4,
                        y: 12
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 16 Forêt dense bas droit
                position: [
                    {
                        x: 5,
                        y: 12
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 17 Forêt dense simple
                position: [
                    {
                        x: 11,
                        y: 11
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 18 Forêt haut arbre
                position: [
                    {
                        x: 4,
                        y: 13
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 19 Forêt bas arbre
                position: [
                    {
                        x: 4,
                        y: 14
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 20 Haie claire
                position: [
                    {
                        x: 2.5,
                        y: 11.5
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 21 Haie sombre
                position: [
                    {
                        x: 2.5,
                        y: 13
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 22 Mur petites pierres clair
                position: [
                    {
                        x: 2,
                        y: 0
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 23 Mur petites pierres foncé
                position: [
                    {
                        x: 2,
                        y: 3
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
        ]
    },
    { // 4
        path: "assets/sprites/spr_tileset/Outside_A5.png",
        data: [
            { // 0 Noir
                position: [
                    {
                        x: 0,
                        y: 0
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 1 Petites herbes sur sable
                position: [
                    {
                        x: 5,
                        y: 2
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 2 Pavés central
                position: [
                    {
                        x: 0,
                        y: 3
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 3 Falaise herbe haut gauche
                position: [
                    {
                        x: 0,
                        y: 11
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 4 Falaise herbe haut milieu
                position: [
                    {
                        x: 1,
                        y: 11
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 5 Falaise herbe haut droit
                position: [
                    {
                        x: 2,
                        y: 11
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 6 Falaise herbe milieu gauche
                position: [
                    {
                        x: 0,
                        y: 12
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 7 Falaise herbe milieu droit
                position: [
                    {
                        x: 2,
                        y: 12
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 8 Falaise herbe bas gauche
                position: [
                    {
                        x: 0,
                        y: 13
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 9 Falaise herbe bas milieu
                position: [
                    {
                        x: 1,
                        y: 13
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 10 Falaise herbe bas droit
                position: [
                    {
                        x: 2,
                        y: 13
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 11 Falaise haut gauche
                position: [
                    {
                        x: 0,
                        y: 14
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 12 Falaise haut milieu
                position: [
                    {
                        x: 1,
                        y: 14
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 13 Falaise haut droit
                position: [
                    {
                        x: 2,
                        y: 14
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 14 Falaise bas gauche herbe
                position: [
                    {
                        x: 0,
                        y: 15
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 15 Falaise bas milieu herbe
                position: [
                    {
                        x: 1,
                        y: 15
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 16 Falaise bas droit herbe
                position: [
                    {
                        x: 2,
                        y: 15
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 17 Joint falaise herbe bas droit
                position: [
                    {
                        x: 3,
                        y: 12
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 18 Joint falaise herbe bas gauche
                position: [
                    {
                        x: 4,
                        y: 12
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 19 Joint falaise herbe haut droit
                position: [
                    {
                        x: 3,
                        y: 13
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 20 Joint falaise herbe haut gauche
                position: [
                    {
                        x: 4,
                        y: 13
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 21 Joint falaise désert bas droit
                position: [
                    {
                        x: 3,
                        y: 14
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 22 Joint falaise désert bas gauche
                position: [
                    {
                        x: 4,
                        y: 14
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 23 Joint falaise désert haut droit
                position: [
                    {
                        x: 3,
                        y: 15
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 24 Joint falaise désert haut gauche
                position: [
                    {
                        x: 4,
                        y: 15
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 25 Falaise désert haut gauche
                position: [
                    {
                        x: 5,
                        y: 11
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 26 Falaise désert haut milieu
                position: [
                    {
                        x: 6,
                        y: 11
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 27 Falaise désert haut droit
                position: [
                    {
                        x: 7,
                        y: 11
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 28 Falaise désert milieu gauche
                position: [
                    {
                        x: 5,
                        y: 12
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 29 Falaise désert milieu droit
                position: [
                    {
                        x: 7,
                        y: 12
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 30 Falaise désert bas gauche
                position: [
                    {
                        x: 5,
                        y: 13
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 31 Falaise désert bas milieu
                position: [
                    {
                        x: 6,
                        y: 13
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 32 Falaise désert bas droit
                position: [
                    {
                        x: 7,
                        y: 13
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 33 Falaise bas gauche désert
                position: [
                    {
                        x: 5,
                        y: 15
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 34 Falaise bas milieu désert
                position: [
                    {
                        x: 6,
                        y: 15
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 35 Falaise bas droit désert
                position: [
                    {
                        x: 7,
                        y: 15
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 36 Prairie fleurie
                position: [
                    {
                        x: 4,
                        y: 2
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 37 Champs haut
                position: [
                    {
                        x: 5,
                        y: 10
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 38 Champs bas
                position: [
                    {
                        x: 5,
                        y: 9
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
        ]
    },
    { // 5
        path: "assets/sprites/spr_tileset/Outside_B.png",
        data: [
            { // 0 Escaliers vers le bas
                position: [
                    {
                        x: 2,
                        y: 1
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 1 pont en bois vertical
                position: [
                    {
                        x: 0,
                        y: 10
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 2 pont en bois horizontal
                position: [
                    {
                        x: 1,
                        y: 10
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 3 support de pont en bois
                position: [
                    {
                        x: 0,
                        y: 11
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 4 entrée arrondie
                position: [
                    {
                        x: 14,
                        y: 0
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 5 pavés
                position: [
                    {
                        x: 12,
                        y: 1
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 6 carottes
                position: [
                    {
                        x: 13,
                        y: 5
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 7 puit
                position: [
                    {
                        x: 11,
                        y: 1
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 8 sceau plein
                position: [
                    {
                        x: 10,
                        y: 2
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 9 Lampadaire haut
                position: [
                    {
                        x: 0,
                        y: 1
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 10 Lampadaire milieu
                position: [
                    {
                        x: 0,
                        y: 2
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
            { // 11 Lampadaire bas 
                position: [
                    {
                        x: 0,
                        y: 3
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 12 Nénuphare A 
                position: [
                    {
                        x: 13,
                        y: 15
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 13 Nénuphare B 
                position: [
                    {
                        x: 14,
                        y: 15
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 14 Buisson
                position: [
                    {
                        x: 14,
                        y: 4
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 15 Arbre haut gauche
                position: [
                    {
                        x: 8,
                        y: 6
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 16 Arbre haut droit
                position: [
                    {
                        x: 9,
                        y: 6
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 17 Arbre bas gauche
                position: [
                    {
                        x: 8,
                        y: 7
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 18 Arbre bas droit
                position: [
                    {
                        x: 9,
                        y: 7
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 19 Souche
                position: [
                    {
                        x: 12,
                        y: 3
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 20 Tronc couché
                position: [
                    {
                        x: 12,
                        y: 4
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 21 Rocher gris
                position: [
                    {
                        x: 15,
                        y: 3
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 22 Rocher beige
                position: [
                    {
                        x: 15,
                        y: 4
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 23 arbuste haut
                position: [
                    {
                        x: 13,
                        y: 3
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 24 arbuste bas
                position: [
                    {
                        x: 13,
                        y: 4
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
        ]
    },
    { // 6
        path: "assets/sprites/spr_tileset/Outside_C.png",
        data: [
            { // 0 Toit bois haut gauche
                position: [
                    {
                        x: 13,
                        y: 3
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 1 Toit bois haut
                position: [
                    {
                        x: 14,
                        y: 3
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 2 Toit bois haut droit
                position: [
                    {
                        x: 15,
                        y: 3
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 3 Toit bois milieu gauche
                position: [
                    {
                        x: 13,
                        y: 4
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 4 Toit bois milieu
                position: [
                    {
                        x: 14,
                        y: 4
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 5 Toit bois milieu droit
                position: [
                    {
                        x: 15,
                        y: 4
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 6 Toit bois bas gauche
                position: [
                    {
                        x: 13,
                        y: 5
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 7 Toit bois bas
                position: [
                    {
                        x: 14,
                        y: 5
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 8 Toit bois bas droit
                position: [
                    {
                        x: 15,
                        y: 5
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 9 Toit jaune haut gauche
                position: [
                    {
                        x: 8,
                        y: 3
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 10 Toit jaune haut
                position: [
                    {
                        x: 9,
                        y: 3
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 11 Toit jaune haut droit
                position: [
                    {
                        x: 10,
                        y: 3
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 12 Toit jaune milieu gauche
                position: [
                    {
                        x: 8,
                        y: 4
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 13 Toit jaune milieu
                position: [
                    {
                        x: 9,
                        y: 4
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 14 Toit jaune milieu droit
                position: [
                    {
                        x: 10,
                        y: 4
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 15 Toit jaune bas gauche
                position: [
                    {
                        x: 8,
                        y: 5
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 16 Toit jaune bas
                position: [
                    {
                        x: 9,
                        y: 5
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 17 Toit jaune bas droit
                position: [
                    {
                        x: 10,
                        y: 5
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 18 Toit bois angle droit
                position: [
                    {
                        x: 14,
                        y: 7
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 19 Toit bois angle gauche
                position: [
                    {
                        x: 15,
                        y: 7
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 20 Toit vert haut gauche
                position: [
                    {
                        x: 8,
                        y: 0
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 21 Toit vert haut
                position: [
                    {
                        x: 9,
                        y: 0
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 22 Toit vert haut droit
                position: [
                    {
                        x: 10,
                        y: 0
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 23 Toit vert milieu gauche
                position: [
                    {
                        x: 8,
                        y: 1
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 24 Toit vert milieu
                position: [
                    {
                        x: 9,
                        y: 1
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 25 Toit vert milieu droit
                position: [
                    {
                        x: 10,
                        y: 1
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 26 Toit vert bas gauche
                position: [
                    {
                        x: 8,
                        y: 2
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 27 Toit vert bas
                position: [
                    {
                        x: 9,
                        y: 2
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 28 Toit vert bas droit
                position: [
                    {
                        x: 10,
                        y: 2
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 29 Tour sommet haut gauche
                position: [
                    {
                        x: 8,
                        y: 6
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 30 Tour sommet haut droit
                position: [
                    {
                        x: 9,
                        y: 6
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 31 Tour sommet bas gauche
                position: [
                    {
                        x: 8,
                        y: 7
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 32 Tour sommet bas droit
                position: [
                    {
                        x: 9,
                        y: 7
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 33 Tour pleine gauche
                position: [
                    {
                        x: 8,
                        y: 8
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 34 Tour pleine droite
                position: [
                    {
                        x: 9,
                        y: 8
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 35 Tour avec fenêtre gauche
                position: [
                    {
                        x: 8,
                        y: 9
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 36 Tour avec fenêtre droite
                position: [
                    {
                        x: 9,
                        y: 9
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 37 Tour base gauche
                position: [
                    {
                        x: 8,
                        y: 10
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
            { // 38 Tour base droit
                position: [
                    {
                        x: 9,
                        y: 10
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
        ]
    },
];

const portraits = [
    { // 0
        name: 'Terra',
        path: "assets/sprites/spr_pictures/Terra_portrait.webp",
    },
    { // 1
        name: 'Entité mystérieuse',
        path: "assets/sprites/spr_pictures/Evil_8.png",
    },
    { // 2
        name: '@CentralSystem',
        path: "assets/sprites/spr_pictures/SF_Monster_6.png",
    },
    { // 3
        name: 'Papa',
        path: "assets/sprites/spr_pictures/People1_5.png",
    },
    { // 4
        name: 'Catherina',
        path: "assets/sprites/spr_pictures/People1_6.png",
    },
    { // 5
        name: 'Vincent',
        path: "assets/sprites/spr_pictures/People1_3.png",
    },
];
