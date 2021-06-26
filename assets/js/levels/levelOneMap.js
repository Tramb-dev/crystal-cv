/* 
// Objet contenant les tuiles correspondantes pour créer la map
*/
const levelMap = {
    width: 17,
    height: 15,
    bgm: {},
    // Position du joueur sur la grille, où y sont les lignes et x les colonnes
    startMapPosition: {
        x: 0,
        y: 2
    },
    /* 
    // data est constitué des lignes (ou ordonnées, ou y) et des colonnes (ou abscisses ou x) de la grille de jeu. Chaque case contient un ou plusieurs calques qui contiennent la référence à la tuile correspondante, et savoir si le joueur peut marcher dessus (pour un passage secret par exemple).
    */
    data: [ 
        [ // y =0
            [ // x = 0
                { // Layer = 0
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: 1,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 3
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 5
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 6
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 7
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 8
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 9
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 10
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 11
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 12
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 13
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 14
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 15
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
        ],
        [ // y =1
            [ // x = 0
                {
                    tilesetId: 1,
                    tileId: 0,    
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
                    tileId: [2, 3],
                },
            ],
            [ // x = 3
                {
                    tilesetId: 0,
                    tileId: 3,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 5
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 6
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 7
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 8
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 9
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 10
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 11
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 12
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 13
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 14
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 15
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
        ],
        [ // y =2
            [ // x = 0
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: 4,
                    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 0,
                    tileId: [4, 5],
                },
            ],
            [ // x = 3
                {
                    tilesetId: 0,
                    tileId: 5,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 5
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 6
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 7
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 8
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 9
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 10
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 11
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 12
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 13
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 14
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 15
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
        ],
        [ // y =3
            [ // x = 0
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 3
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 5
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 6
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 7
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 8
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 9
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 10
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 11
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 12
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 13
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 14
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 15
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
        ],
        [ // y =4
            [ // x = 0
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 3
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 5
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 6
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 7
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 8
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 9
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 10
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 11
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 12
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 13
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 14
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 15
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
        ],
        [ // y =5
            [ // x = 0
                {
                    tilesetId: 1,
                    tileId: 0,
                    canWalk: false
                },
            ],
            [ // x = 1
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 3
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 5
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 6
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 7
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 8
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 9
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 10
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 11
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 12
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 13
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 14
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 15
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
        ],
        [ // y =6
            [ // x = 0
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 3
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 5
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 6
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 7
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 8
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 9
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 10
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 11
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 12
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 13
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 14
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 15
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
        ],
        [ // y =7
            [ // x = 0
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 3
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 5
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 6
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 7
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 8
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 9
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 10
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 11
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 12
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 13
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 14
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 15
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
        ],
        [ // y =8
            [ // x = 0
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 3
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 5
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 6
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 7
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 8
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 9
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 10
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 11
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 12
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 13
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 14
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 15
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
        ],
        [ // y =9
            [ // x = 0
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 3
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 5
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 6
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 7
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 8
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 9
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 10
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 11
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 12
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 13
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 14
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 15
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
        ],
        [ // y =10
            [ // x = 0
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 3
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 5
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 6
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 7
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 8
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 9
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 10
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 11
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 12
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 13
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 14
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 15
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
        ],
        [ // y =11
            [ // x = 0
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 3
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 5
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 6
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 7
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 8
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 9
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 10
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 11
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 12
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 13
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 14
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 15
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
        ],
        [ // y =12
            [ // x = 0
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 3
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 5
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 6
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 7
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 8
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 9
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 10
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 11
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 12
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 13
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 14
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 15
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
        ],
        [ // y =13
            [ // x = 0
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 3
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 5
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 6
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 7
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 8
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 9
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 10
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 11
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 12
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 13
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 14
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 15
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
        ],
        [ // y =14
            [ // x = 0
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 3
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 5
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 6
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 7
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 8
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 9
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 10
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 11
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 12
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 13
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 14
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 15
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
        ],
    ]
};