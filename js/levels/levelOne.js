class LevelOne extends LevelCreator {
    constructor() {
        super();
        // Position du joueur sur la grille, où y sont les lignes et x les colonnes
        this.startMapPosition = {
            x: 0,
            y: 6
        };
        this.timePassed = 0;
        this.animationCounter = 0;
        this.levelOne = {
            width: 17,
            height: 13,
            bgm: {},
            scrollable: true,
            globalTilesetId: 0, // Correspond au pack de tilesets à utiliser
            /* 
            // data est constitué des lignes (ou ordonnées, ou y) et des colonnes (ou abscisses ou x) de la grille de jeu. Chaque case contient un ou plusieurs calques qui contiennent la référence à la tuile correspondante, et savoir si le joueur peut marcher dessus.
            */
            data: [ 
                [ // y =0
                    [ // x = 0
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 1
                        {
                            tilesetId: 0,
                            tileId: 1,
                            canWalk: true
                        },
                    ],
                    [ // x = 2
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 3
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 4
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 5
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 6
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 7
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 8
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 9
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 10
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 11
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 12
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 13
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 14
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 15
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 16
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                ],
                [ // y =1
                    [ // x = 0
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 1
                        {
                            tilesetId: 0,
                            tileId: 2,
                            canWalk: true
                        },
                    ],
                    [ // x = 2
                        {
                            tilesetId: 0,
                            tileId: 3,
                            canWalk: true
                        },
                    ],
                    [ // x = 3
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 4
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 5
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 6
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 7
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 8
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 9
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 10
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 11
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 12
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 13
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 14
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 15
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 16
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                ],
                [ // y =2
                    [ // x = 0
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 1
                        {
                            tilesetId: 0,
                            tileId: 4,
                            canWalk: true
                        },
                    ],
                    [ // x = 2
                        {
                            tilesetId: 0,
                            tileId: 5,
                            canWalk: true
                        },
                    ],
                    [ // x = 3
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 4
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 5
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 6
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 7
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 8
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 9
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 10
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 11
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 12
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 13
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 14
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 15
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 16
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                ],
                [ // y =3
                    [ // x = 0
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 1
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 2
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 3
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 4
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 5
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 6
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 7
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 8
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 9
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 10
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 11
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 12
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 13
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 14
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 15
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 16
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                ],
                [ // y =4
                    [ // x = 0
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 1
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 2
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 3
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 4
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 5
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 6
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 7
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 8
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 9
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 10
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 11
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 12
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 13
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 14
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 15
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 16
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                ],
                [ // y =5
                    [ // x = 0
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: false
                        },
                    ],
                    [ // x = 1
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 2
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 3
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 4
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 5
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 6
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 7
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 8
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 9
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 10
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 11
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 12
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 13
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 14
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 15
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 16
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                ],
                [ // y =6
                    [ // x = 0
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 1
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 2
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 3
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 4
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 5
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 6
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 7
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 8
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 9
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 10
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 11
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 12
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 13
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 14
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 15
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 16
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                ],
                [ // y =7
                    [ // x = 0
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 1
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 2
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 3
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 4
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 5
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 6
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 7
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 8
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 9
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 10
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 11
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 12
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 13
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 14
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 15
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 16
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                ],
                [ // y =8
                    [ // x = 0
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 1
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 2
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 3
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 4
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 5
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 6
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 7
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 8
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 9
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 10
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 11
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 12
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 13
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 14
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 15
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 16
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                ],
                [ // y =9
                    [ // x = 0
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 1
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 2
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 3
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 4
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 5
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 6
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 7
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 8
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 9
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 10
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 11
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 12
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 13
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 14
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 15
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 16
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                ],
                [ // y =10
                    [ // x = 0
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 1
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 2
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 3
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 4
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 5
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 6
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 7
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 8
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 9
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 10
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 11
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 12
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 13
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 14
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 15
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 16
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                ],
                [ // y =11
                    [ // x = 0
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 1
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 2
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 3
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 4
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 5
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 6
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 7
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 8
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 9
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 10
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 11
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 12
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 13
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 14
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 15
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 16
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                ],
                [ // y =12
                    [ // x = 0
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 1
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 2
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 3
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 4
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 5
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 6
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 7
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 8
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 9
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 10
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 11
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 12
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 13
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 14
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 15
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                    [ // x = 16
                        {
                            tilesetId: 0,
                            tileId: 0,
                            canWalk: true
                        },
                    ],
                ],
            ]
        };
    }

    init() {
        this.levelDiv = document.getElementById("level_container");
        this.levelDiv.style.display = "block";
        this.levelDiv.style.width = this.levelOne.width * this.grid.case + "px";
        this.levelDiv.style.height = this.levelOne.height * this.grid.case + "px";

        this.addGrid();
        //this.animateLevel();
    }
    // TODO : ajouter la gestion de la superposition des tiles 
    addGrid() {  
        for (let i=0; i<this.levelOne.height; i++) {
            for (let j=0; j<this.levelOne.width; j++) {
                const gridView = document.createElement("div");
                const gridImg = document.createElement("img");
                const currentTileSet = tileSets[this.levelOne.globalTilesetId];
                const currentTile = currentTileSet.tilesetNames[this.levelOne.data[i][j][0].tilesetId].data[this.levelOne.data[i][j][0].tileId];
               // gridView.style.border = "solid 1px black";
                gridView.classList.add("tile_container");
                gridView.style.top = i * this.grid.case + "px";
                gridView.style.left = j * this.grid.case + "px";
                gridView.style.width = this.grid.case + "px";
                gridView.style.height = this.grid.case + "px";
                gridImg.src = currentTileSet.path + currentTileSet.tilesetNames[this.levelOne.data[i][j][0].tilesetId].tilesetName + ".png";
                // 
                gridImg.style.left = currentTile.position.x;
                gridImg.style.top = currentTile.position.y;
                gridImg.setAttribute("data-row", i) ;
                gridImg.setAttribute("data-col", j) ;
                gridView.appendChild(gridImg);
                this.levelDiv.appendChild(gridView); 
            }
        } 
    }

    // Lance les animations du niveau
    animateLevel() {
        for (let i=0; i<this.levelOne.height; i++) {
            const rowImg = document.querySelectorAll('[data-row="' + i + '"]');
            for (let j=0; j<this.levelOne.width; j++) {
                const currentTileSet = tileSets[this.levelOne.globalTilesetId];
                const currentTile = currentTileSet.tilesetNames[this.levelOne.data[i][j][0].tilesetId].data[this.levelOne.data[i][j][0].tileId];
                if (currentTile.isAnimation) { 
                    const compteur = Math.floor(this.timePassed % currentTile.animation.length);
                    const gridImg = rowImg[j];
                    gridImg.style.left = - currentTile.animation[compteur].x * this.grid.case + "px";
                    gridImg.style.top = - currentTile.animation[compteur].y * this.grid.case + "px";
                }
            }
        }
    }

    update(secondsPassed) {
        this.timePassed += secondsPassed;
        this.animateLevel();
    }

    draw() {
        
    }
}