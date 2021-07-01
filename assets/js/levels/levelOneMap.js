/* 
// Objet contenant les tuiles correspondantes pour créer la map
*/
const levelMap = {
    width: 34,
    height: 40,
    bgm: {},
    // Position du joueur sur la grille, où y sont les lignes et x les colonnes
    startMapPosition: {
        x: 9,
        y: 22
    },
    /* 
    // data est constitué des lignes (ou ordonnées, ou y) et des colonnes (ou abscisses ou x) de la grille de jeu. Chaque case contient un ou plusieurs calques qui contiennent la référence à la tuile correspondante, et savoir si le joueur peut marcher dessus (pour un passage secret par exemple).
    */
    data: [ 
        [ // y = 0
            [ // x = 0
                { // Layer = 0
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 1,
                    tileId: 7,
                },
            ],
            [ // x = 2
                {
                    tilesetId: 1,
                    tileId: 7,
                },
            ],
            [ // x = 3
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 4
                {
                    tilesetId: 1,
                    tileId: 7,
                },
            ],
            [ // x = 5
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 6
                {
                    tilesetId: 1,
                    tileId: 7,
                },
            ],
            [ // x = 7
                {
                    tilesetId: 1,
                    tileId: 7,
                },
            ],
            [ // x = 8
                {
                    tilesetId: 1,
                    tileId: 7,
                },
            ],
            [ // x = 9
                {
                    tilesetId: 1,
                    tileId: 7,
                },
            ],
            [ // x = 10
                {
                    tilesetId: 1,
                    tileId: 7,
                },
            ],
            [ // x = 11
                {
                    tilesetId: 1,
                    tileId: 7,
                },
            ],
            [ // x = 12
                {
                    tilesetId: 1,
                    tileId: 7,
                },
            ],
            [ // x = 13
                {
                    tilesetId: 1,
                    tileId: 7,
                },
            ],
            [ // x = 14
                {
                    tilesetId: 1,
                    tileId: 7,   
                },
            ],
            [ // x = 15
                {
                    tilesetId: 1,
                    tileId: 7,   
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 20
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 21
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 22
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 23
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 24
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 25
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 26
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 27
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 28
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 29
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 30
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 31
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 32
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 33
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
        ],
        [ // y = 1
            [ // x = 0
                { // Layer = 0
                    tilesetId: 4,
                    tileId: 31,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 4,
                    tileId: 31,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 4,
                    tileId: 31,    
                },
            ],
            [ // x = 3
                {
                    tilesetId: 4,
                    tileId: 23,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 1,
                    tileId: 7,
                },
            ],
            [ // x = 5
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 6
                {
                    tilesetId: 1,
                    tileId: 7,
                },
            ],
            [ // x = 7
                {
                    tilesetId: 1,
                    tileId: 7,
                },
            ],
            [ // x = 8
                {
                    tilesetId: 1,
                    tileId: 7,
                },
            ],
            [ // x = 9
                {
                    tilesetId: 1,
                    tileId: 7,
                },
            ],
            [ // x = 10
                {
                    tilesetId: 4,
                    tileId: 24,    
                },
            ],
            [ // x = 11
                {
                    tilesetId: 4,
                    tileId: 31,    
                },
            ],
            [ // x = 12
                {
                    tilesetId: 4,
                    tileId: 31,    
                },
            ],
            [ // x = 13
                {
                    tilesetId: 4,
                    tileId: 31,    
                },
            ],
            [ // x = 14
                {
                    tilesetId: 4,
                    tileId: 31,     
                },
            ],
            [ // x = 15
                {
                    tilesetId: 4,
                    tileId: 31,     
                },
            ],
            [ // x = 16
                {
                    tilesetId: 4,
                    tileId: 31,    
                },
            ],
            [ // x = 17
                {
                    tilesetId: 4,
                    tileId: 31,    
                },
            ],
            [ // x = 18
                {
                    tilesetId: 4,
                    tileId: 31,    
                },
            ],
            [ // x = 19
                {
                    tilesetId: 4,
                    tileId: 31,    
                },
            ],
            [ // x = 20
                {
                    tilesetId: 4,
                    tileId: 23,    
                },
            ],
            [ // x = 21
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 22
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 23
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 24
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 25
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 26
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 27
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 28
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 29
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 30
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 31
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 32
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 33
                {
                    tilesetId: 4,
                    tileId: 21,    
                },
            ],
        ],
        [ // y = 2
            [ // x = 0
                { // Layer = 0
                    tilesetId: 4,
                    tileId: 12,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 4,
                    tileId: 12,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 4,
                    tileId: 12,    
                },
            ],
            [ // x = 3
                {
                    tilesetId: 4,
                    tileId: 30,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 4,
                    tileId: 23,
                },
            ],
            [ // x = 5
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 6
                {
                    tilesetId: 4,
                    tileId: 24,
                },
            ],
            [ // x = 7
                {
                    tilesetId: 4,
                    tileId: 31,
                },
            ],
            [ // x = 8
                {
                    tilesetId: 4,
                    tileId: 31,
                },
            ],
            [ // x = 9
                {
                    tilesetId: 4,
                    tileId: 31,
                },
            ],
            [ // x = 10
                {
                    tilesetId: 4,
                    tileId: 32,    
                },
            ],
            [ // x = 11
                {
                    tilesetId: 4,
                    tileId: 12,    
                },
            ],
            [ // x = 12
                {
                    tilesetId: 4,
                    tileId: 12,  
                },
            ],
            [ // x = 13
                {
                    tilesetId: 4,
                    tileId: 12,  
                },
            ],
            [ // x = 14
                {
                    tilesetId: 4,
                    tileId: 12,  
                },
            ],
            [ // x = 15
                {
                    tilesetId: 4,
                    tileId: 12,   
                },
            ],
            [ // x = 16
                {
                    tilesetId: 4,
                    tileId: 12,
                },
            ],
            [ // x = 17
                {
                    tilesetId: 4,
                    tileId: 12, 
                },
            ],
            [ // x = 18
                {
                    tilesetId: 4,
                    tileId: 12, 
                },
            ],
            [ // x = 19
                {
                    tilesetId: 4,
                    tileId: 12,  
                },
            ],
            [ // x = 20
                {
                    tilesetId: 4,
                    tileId: 30,    
                },
            ],
            [ // x = 21
                {
                    tilesetId: 4,
                    tileId: 23,
                },
            ],
            [ // x = 22
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 23
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 24
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 25
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 26
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 27
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 28
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 29
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 30
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 31
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 32
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 33
                {
                    tilesetId: 4,
                    tileId: 29,    
                },
            ],
            
        ],
        [ // y = 3
            [ // x = 0
                { // Layer = 0
                    tilesetId: 4,
                    tileId: 34,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 4,
                    tileId: 34,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 4,
                    tileId: 34,    
                },
            ],
            [ // x = 3
                {
                    tilesetId: 4,
                    tileId: 11,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 4,
                    tileId: 30,
                },
            ],
            [ // x = 5
                {
                    tilesetId: 4,
                    tileId: 31, 
                },
            ],
            [ // x = 6
                {
                    tilesetId: 4,
                    tileId: 32,
                },
            ],
            [ // x = 7
                {
                    tilesetId: 4,
                    tileId: 12,
                },
            ],
            [ // x = 8
                {
                    tilesetId: 4,
                    tileId: 12,
                },
            ],
            [ // x = 9
                {
                    tilesetId: 4,
                    tileId: 12,
                },
            ],
            [ // x = 10
                {
                    tilesetId: 4,
                    tileId: 13,    
                },
            ],
            [ // x = 11
                {
                    tilesetId: 4,
                    tileId: 34,    
                },
            ],
            [ // x = 12
                {
                    tilesetId: 4,
                    tileId: 34,  
                },
            ],
            [ // x = 13
                {
                    tilesetId: 4,
                    tileId: 34,  
                },
            ],
            [ // x = 14
                {
                    tilesetId: 4,
                    tileId: 34,  
                },
            ],
            [ // x = 15
                {
                    tilesetId: 4,
                    tileId: 34,   
                },
            ],
            [ // x = 16
                {
                    tilesetId: 4,
                    tileId: 34,
                },
            ],
            [ // x = 17
                {
                    tilesetId: 4,
                    tileId: 34, 
                },
            ],
            [ // x = 18
                {
                    tilesetId: 4,
                    tileId: 34, 
                },
            ],
            [ // x = 19
                {
                    tilesetId: 4,
                    tileId: 34,  
                },
            ],
            [ // x = 20
                {
                    tilesetId: 4,
                    tileId: 11,    
                },
            ],
            [ // x = 21
                {
                    tilesetId: 4,
                    tileId: 30,
                },
            ],
            [ // x = 22
                {
                    tilesetId: 4,
                    tileId: 23, 
                },
            ],
            [ // x = 23
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 24
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 25
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 26
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 27
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 28
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 29
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 30
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 31
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 32
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 33
                {
                    tilesetId: 4,
                    tileId: 29,    
                },
            ],
            
        ],
        [ // y = 4
            [ // x = 0
                { // Layer = 0
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 3
                {
                    tilesetId: 4,
                    tileId: 33,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 4,
                    tileId: 11,
                },
            ],
            [ // x = 5
                {
                    tilesetId: 4,
                    tileId: 12, 
                },
            ],
            [ // x = 6
                {
                    tilesetId: 4,
                    tileId: 13,
                },
            ],
            [ // x = 7
                {
                    tilesetId: 4,
                    tileId: 34,
                },
            ],
            [ // x = 8
                {
                    tilesetId: 4,
                    tileId: 34,
                },
            ],
            [ // x = 9
                {
                    tilesetId: 4,
                    tileId: 34,
                },
            ],
            [ // x = 10
                {
                    tilesetId: 4,
                    tileId: 35,    
                },
            ],
            [ // x = 11
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 12
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 13
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 14
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 15
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 20
                {
                    tilesetId: 4,
                    tileId: 33,    
                },
            ],
            [ // x = 21
                {
                    tilesetId: 4,
                    tileId: 11,
                },
            ],
            [ // x = 22
                {
                    tilesetId: 4,
                    tileId: 28, 
                },
            ],
            [ // x = 23
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 24
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 25
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 26
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 27
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 28
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 29
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 30
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 31
                {
                    tilesetId: 4,
                    tileId: 24, 
                },
            ],
            [ // x = 32
                {
                    tilesetId: 4,
                    tileId: 31, 
                },
            ],
            [ // x = 33
                {
                    tilesetId: 4,
                    tileId: 32,    
                },
            ],
            
        ],
        [ // y = 5
            [ // x = 0
                { // Layer = 0
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 3
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 4,
                    tileId: 33,
                },
            ],
            [ // x = 5
                {
                    tilesetId: 4,
                    tileId: 34, 
                },
            ],
            [ // x = 6
                {
                    tilesetId: 4,
                    tileId: 35,
                },
            ],
            [ // x = 7
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 8
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 9
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 10
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 11
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 12
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 13
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 14
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 15
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 20
                {
                    tilesetId: 1,
                    tileId: 7,      
                },
            ],
            [ // x = 21
                {
                    tilesetId: 4,
                    tileId: 33,
                },
            ],
            [ // x = 22
                {
                    tilesetId: 4,
                    tileId: 28, 
                },
            ],
            [ // x = 23
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 24
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 25
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 26
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 27
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 28
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 29
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 30
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 31
                {
                    tilesetId: 4,
                    tileId: 29, 
                },
            ],
            [ // x = 32
                {
                    tilesetId: 4,
                    tileId: 12, 
                },
            ],
            [ // x = 33
                {
                    tilesetId: 4,
                    tileId: 13,    
                },
            ],
            
        ],
        [ // y = 6
            [ // x = 0
                { // Layer = 0
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 3
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 5
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 6
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 7
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 8
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 9
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 10
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 11
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 12
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 13
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 14
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 15
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 20
                {
                    tilesetId: 1,
                    tileId: 7,      
                },
            ],
            [ // x = 21
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 22
                {
                    tilesetId: 4,
                    tileId: 28, 
                },
            ],
            [ // x = 23
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 24
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 25
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 26
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 27
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 28
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 29
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 30
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 31
                {
                    tilesetId: 4,
                    tileId: 29, 
                },
            ],
            [ // x = 32
                {
                    tilesetId: 4,
                    tileId: 34, 
                },
            ],
            [ // x = 33
                {
                    tilesetId: 4,
                    tileId: 35,    
                },
            ],
           
        ],
        [ // y = 7
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 3,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 3
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 5
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 6
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 7
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 8
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 9
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 10
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 11
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 12
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 13
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 14
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 15
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 7,  
                },
            ],
            [ // x = 20
                {
                    tilesetId: 1,
                    tileId: 7,      
                },
            ],
            [ // x = 21
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 22
                {
                    tilesetId: 4,
                    tileId: 28, 
                },
            ],
            [ // x = 23
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 24
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 25
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 26
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 27
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 28
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 29
                {
                    tilesetId: 4,
                    tileId: 24, 
                },
            ],
            [ // x = 30
                {
                    tilesetId: 4,
                    tileId: 31, 
                },
            ],
            [ // x = 31
                {
                    tilesetId: 4,
                    tileId: 32, 
                },
            ],
            [ // x = 32
                {
                    tilesetId: 4,
                    tileId: 7, 
                },
            ],
            [ // x = 33
                {
                    tilesetId: 4,
                    tileId: 7,    
                },
            ],
            
        ],
        [ // y = 8
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: [3, 5],    
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
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 0,  
                },
            ],
            [ // x = 20
                {
                    tilesetId: 1,
                    tileId: 0,       
                },
            ],
            [ // x = 21
                {
                    tilesetId: 1,
                    tileId: 0,  
                },
            ],
            [ // x = 22
                {
                    tilesetId: 4,
                    tileId: 30, 
                },
            ],
            [ // x = 23
                {
                    tilesetId: 4,
                    tileId: 23, 
                },
            ],
            [ // x = 24
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 25
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 26
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 27
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 28
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 29
                {
                    tilesetId: 4,
                    tileId: 29, 
                },
            ],
            [ // x = 30
                {
                    tilesetId: 4,
                    tileId: 12, 
                },
            ],
            [ // x = 31
                {
                    tilesetId: 4,
                    tileId: 13, 
                },
            ],
            [ // x = 32
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 33
                {
                    tilesetId: 1,
                    tileId: 0,  
                },
            ],
            
        ],
        [ // y = 9
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: [2, 3],    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 0,
                    tileId: 3,     
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
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 0,  
                },
            ],
            [ // x = 20
                {
                    tilesetId: 1,
                    tileId: 0,       
                },
            ],
            [ // x = 21
                {
                    tilesetId: 1,
                    tileId: 0,  
                },
            ],
            [ // x = 22
                {
                    tilesetId: 4,
                    tileId: 11, 
                },
            ],
            [ // x = 23
                {
                    tilesetId: 4,
                    tileId: 30, 
                },
            ],
            [ // x = 24
                {
                    tilesetId: 4,
                    tileId: 23, 
                },
            ],
            [ // x = 25
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 26
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 27
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 28
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 29
                {
                    tilesetId: 4,
                    tileId: 29, 
                },
            ],
            [ // x = 30
                {
                    tilesetId: 4,
                    tileId: 15, 
                },
            ],
            [ // x = 31
                {
                    tilesetId: 4,
                    tileId: 16, 
                },
            ],
            [ // x = 32
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 33
                {
                    tilesetId: 1,
                    tileId: 0,  
                },
            ],
            
        ],
        [ // y = 10
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 0,
                    tileId: 29,     
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
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 0,  
                },
            ],
            [ // x = 20
                {
                    tilesetId: 1,
                    tileId: 0,       
                },
            ],
            [ // x = 21
                {
                    tilesetId: 1,
                    tileId: 0,  
                },
            ],
            [ // x = 22
                {
                    tilesetId: 4,
                    tileId: 14, 
                },
            ],
            [ // x = 23
                {
                    tilesetId: 4,
                    tileId: 11, 
                },
            ],
            [ // x = 24
                {
                    tilesetId: 4,
                    tileId: 28, 
                },
            ],
            [ // x = 25
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 26
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 27
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 28
                {
                    tilesetId: 4,
                    tileId: 24, 
                },
            ],
            [ // x = 29
                {
                    tilesetId: 4,
                    tileId: 32, 
                },
            ],
            [ // x = 30
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 31
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 32
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 33
                {
                    tilesetId: 1,
                    tileId: 0,  
                },
            ],
            
        ],
        [ // y = 11
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 0,
                    tileId: 29,     
                },
            ],
            [ // x = 3
                {
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 0,
                    tileId: [2, 3],  
                },
            ],
            [ // x = 5
                {
                    tilesetId: 0,
                    tileId: [2, 3], 
                },
            ],
            [ // x = 6
                {
                    tilesetId: 0,
                    tileId: [2, 3], 
                },
            ],
            [ // x = 7
                {
                    tilesetId: 0,
                    tileId: [2, 3], 
                },
            ],
            [ // x = 8
                {
                    tilesetId: 0,
                    tileId: [2, 3], 
                },
            ],
            [ // x = 9
                {
                    tilesetId: 0,
                    tileId: [2, 3], 
                },
            ],
            [ // x = 10
                {
                    tilesetId: 0,
                    tileId: [2, 3], 
                },
            ],
            [ // x = 11
                {
                    tilesetId: 5,
                    tileId: 1,  
                },
            ],
            [ // x = 12
                {
                    tilesetId: 0,
                    tileId: [2, 3], 
                },
            ],
            [ // x = 13
                {
                    tilesetId: 0,
                    tileId: [2, 3], 
                },
            ],
            [ // x = 14
                {
                    tilesetId: 0,
                    tileId: [2, 3], 
                },
            ],
            [ // x = 15
                {
                    tilesetId: 0,
                    tileId: 3,   
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 0,  
                },
            ],
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 0,  
                },
            ],
            [ // x = 20
                {
                    tilesetId: 1,
                    tileId: 0,       
                },
            ],
            [ // x = 21
                {
                    tilesetId: 1,
                    tileId: 0,  
                },
            ],
            [ // x = 22
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 23
                {
                    tilesetId: 4,
                    tileId: 11, 
                },
            ],
            [ // x = 24
                {
                    tilesetId: 4,
                    tileId: 30, 
                },
            ],
            [ // x = 25
                {
                    tilesetId: 4,
                    tileId: 31, 
                },
            ],
            [ // x = 26
                {
                    tilesetId: 4,
                    tileId: 31, 
                },
            ],
            [ // x = 27
                {
                    tilesetId: 4,
                    tileId: 31, 
                },
            ],
            [ // x = 28
                {
                    tilesetId: 4,
                    tileId: 32, 
                },
            ],
            [ // x = 29
                {
                    tilesetId: 4,
                    tileId: 13, 
                },
            ],
            [ // x = 30
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 31
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 32
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 33
                {
                    tilesetId: 1,
                    tileId: 0,  
                },
            ],
            
        ],
        [ // y = 12
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 0,
                    tileId: 29,     
                },
            ],
            [ // x = 3
                {
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
            [ // x = 5
                {
                    tilesetId: 0,
                    tileId: 29, 
                },
            ],
            [ // x = 6
                {
                    tilesetId: 0,
                    tileId: [4, 5],   
                },
            ],
            [ // x = 7
                {
                    tilesetId: 0,
                    tileId: [4, 5],   
                },
            ],
            [ // x = 8
                {
                    tilesetId: 0,
                    tileId: [4, 5],   
                },
            ],
            [ // x = 9
                {
                    tilesetId: 0,
                    tileId: [4, 5],   
                },
            ],
            [ // x = 10
                {
                    tilesetId: 0,
                    tileId: [4, 5],   
                },
            ],
            [ // x = 11
                {
                    tilesetId: 5,
                    tileId: 1,   
                },
            ],
            [ // x = 12
                {
                    tilesetId: 0,
                    tileId: [4, 5],   
                },
            ],
            [ // x = 13
                {
                    tilesetId: 0,
                    tileId: [4, 5],   
                },
            ],
            [ // x = 14
                {
                    tilesetId: 0,
                    tileId: [4, 5],   
                },
            ],
            [ // x = 15
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
            [ // x = 16
                {
                    tilesetId: 0,
                    tileId: [2, 3],  
                },
            ],
            [ // x = 17
                {
                    tilesetId: 0,
                    tileId: 3,    
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 0,  
                },
            ],
            [ // x = 20
                {
                    tilesetId: 1,
                    tileId: 0,       
                },
            ],
            [ // x = 21
                {
                    tilesetId: 1,
                    tileId: 0,  
                },
            ],
            [ // x = 22
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 23
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 24
                {
                    tilesetId: 4,
                    tileId: 11, 
                },
            ],
            [ // x = 25
                {
                    tilesetId: 4,
                    tileId: 12, 
                },
            ],
            [ // x = 26
                {
                    tilesetId: 4,
                    tileId: 12, 
                },
            ],
            [ // x = 27
                {
                    tilesetId: 4,
                    tileId: 12, 
                },
            ],
            [ // x = 28
                {
                    tilesetId: 4,
                    tileId: 13, 
                },
            ],
            [ // x = 29
                {
                    tilesetId: 4,
                    tileId: 16, 
                },
            ],
            [ // x = 30
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 31
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 32
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 33
                {
                    tilesetId: 1,
                    tileId: 0,  
                },
            ],
            
        ],
        [ // y = 13
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 0,
                    tileId: 29,     
                },
            ],
            [ // x = 3
                {
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
            [ // x = 5
                {
                    tilesetId: 0,
                    tileId: 5, 
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
                    tilesetId: 0,
                    tileId: 4,   
                },
            ],
            [ // x = 16
                {
                    tilesetId: 0,
                    tileId: 29,  
                },
            ],
            [ // x = 17
                {
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 18
                {
                    tilesetId: 0,
                    tileId: [2, 3],   
                },
            ],
            [ // x = 19
                {
                    tilesetId: 0,
                    tileId: [2, 3],  
                },
            ],
            [ // x = 20
                {
                    tilesetId: 0,
                    tileId: [2, 3],    
                },
            ],
            [ // x = 21
                {
                    tilesetId: 0,
                    tileId: [2, 3],  
                },
            ],
            [ // x = 22
                {
                    tilesetId: 0,
                    tileId: 3, 
                },
            ],
            [ // x = 23
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 24
                {
                    tilesetId: 4,
                    tileId: 14, 
                },
            ],
            [ // x = 25
                {
                    tilesetId: 4,
                    tileId: 15, 
                },
            ],
            [ // x = 26
                {
                    tilesetId: 4,
                    tileId: 15, 
                },
            ],
            [ // x = 27
                {
                    tilesetId: 4,
                    tileId: 15, 
                },
            ],
            [ // x = 28
                {
                    tilesetId: 4,
                    tileId: 16, 
                },
            ],
            [ // x = 29
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 30
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 31
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 32
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 33
                {
                    tilesetId: 1,
                    tileId: 0,  
                },
            ],
            
        ],
        [ // y = 14
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
            [ // x = 2
                {
                    tilesetId: 0,
                    tileId: 29,  
                },
            ],
            [ // x = 3
                {
                    tilesetId: 0,
                    tileId: 29, 
                },
            ],
            [ // x = 4
                {
                    tilesetId: 0,
                    tileId: 5,   
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
                    tileId: 15,   
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
                    tilesetId: 0,
                    tileId: 4,  
                },
            ],
            [ // x = 17
                {
                    tilesetId: 0,
                    tileId: [4,5],    
                },
            ],
            [ // x = 18
                {
                    tilesetId: 0,
                    tileId: [4,5],     
                },
            ],
            [ // x = 19
                {
                    tilesetId: 0,
                    tileId: [4,5],   
                },
            ],
            [ // x = 20
                {
                    tilesetId: 0,
                    tileId: 29      
                },
            ],
            [ // x = 21
                {
                    tilesetId: 0,
                    tileId: 29,  
                },
            ],
            [ // x = 22
                {
                    tilesetId: 0,
                    tileId: 29, 
                },
            ],
            [ // x = 23
                {
                    tilesetId: 0,
                    tileId: [2, 3], 
                },
            ],
            [ // x = 24
                {
                    tilesetId: 0,
                    tileId: 3, 
                },
            ],
            [ // x = 25
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 26
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 27
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 28
                {
                    tilesetId: 1,
                    tileId: 0,  
                },
            ],
            [ // x = 29
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 30
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 31
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 32
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 33
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            
        ],
        [ // y = 15
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: 29, 
                },
            ],
            [ // x = 2
                {
                    tilesetId: 0,
                    tileId: 29,   
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
                    tilesetId: 4,
                    tileId: 36,   
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
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 0,       
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 0,        
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 20
                {
                    tilesetId: 0,
                    tileId: 4,         
                },
            ],
            [ // x = 21
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
            [ // x = 22
                {
                    tilesetId: 0,
                    tileId: [3,4],   
                },
            ],
            [ // x = 23
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
            [ // x = 24
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
            [ // x = 25
                {
                    tilesetId: 0,
                    tileId: [2,3],   
                },
            ],
            [ // x = 26
                {
                    tilesetId: 0,
                    tileId: [2,3],   
                },
            ],
            [ // x = 27
                {
                    tilesetId: 0,
                    tileId: [2,3],   
                },
            ],
            [ // x = 28
                {
                    tilesetId: 0,
                    tileId: [2,3],   
                },
            ],
            [ // x = 29
                {
                    tilesetId: 0,
                    tileId: [2,3],   
                },
            ],
            [ // x = 30
                {
                    tilesetId: 0,
                    tileId: [2,3],   
                },
            ],
            [ // x = 31
                {
                    tilesetId: 0,
                    tileId: [2,3],   
                },
            ],
            [ // x = 32
                {
                    tilesetId: 0,
                    tileId: [2,3],   
                },
            ],
            [ // x = 33
                {
                    tilesetId: 0,
                    tileId: [2,3],   
                },
            ],
            
        ],
        [ // y = 16
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 0,
                    tileId: 5,     
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
                    tileId: 7,  
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
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 0,       
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 0,        
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 20
                {
                    tilesetId: 1,
                    tileId: 0,         
                },
            ],
            [ // x = 21
                {
                    tilesetId: 0,
                    tileId: 4,   
                },
            ],
            [ // x = 22
                {
                    tilesetId: 0,
                    tileId: [3,4],   
                },
            ],
            [ // x = 23
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
            [ // x = 24
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
            [ // x = 25
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
            [ // x = 26
                {
                    tilesetId: 0,
                    tileId: 29, 
                },
            ],
            [ // x = 27
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
            [ // x = 28
                {
                    tilesetId: 0,
                    tileId: 29, 
                },
            ],
            [ // x = 29
                {
                    tilesetId: 0,
                    tileId: 29, 
                },
            ],
            [ // x = 30
                {
                    tilesetId: 0,
                    tileId: 29,  
                },
            ],
            [ // x = 31
                {
                    tilesetId: 0,
                    tileId: 29,  
                },
            ],
            [ // x = 32
                {
                    tilesetId: 0,
                    tileId: 29, 
                },
            ],
            [ // x = 33
                {
                    tilesetId: 0,
                    tileId: 29, 
                },
            ],
        ],
        [ // y = 17
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: [3, 5],    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 4,
                    tileId: 36,     
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
                    tileId: 7,  
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
                    tileId: 7,  
                },
            ],
            [ // x = 15
                {
                    tilesetId: 1,
                    tileId: 7,   
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 7,   
                },
                {
                    tilesetId: 5,
                    tileId: 9,   
                },
            ],
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 7,       
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 0,        
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 20
                {
                    tilesetId: 1,
                    tileId: 0,         
                },
            ],
            [ // x = 21
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 22
                {
                    tilesetId: 1,
                    tileId:0,   
                },
            ],
            [ // x = 23
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 24
                {
                    tilesetId: 0,
                    tileId: 4,   
                },
            ],
            [ // x = 25
                {
                    tilesetId: 0,
                    tileId: [4,5],   
                },
            ],
            [ // x = 26
                {
                    tilesetId: 0,
                    tileId: [4,5]  
                },
            ],
            [ // x = 27
                {
                    tilesetId: 0,
                    tileId: [4,5]
                },
            ],
            [ // x = 28
                {
                    tilesetId: 0,
                    tileId: [4,5]
                },
            ],
            [ // x = 29
                {
                    tilesetId: 0,
                    tileId: [4,5]
                },
            ],
            [ // x = 30
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
            [ // x = 31
                {
                    tilesetId: 0,
                    tileId: 29  
                },
            ],
            [ // x = 32
                {
                    tilesetId: 0,
                    tileId: 29 
                },
            ],
            [ // x = 33
                {
                    tilesetId: 0,
                    tileId: [4,5]
                },
            ],
            [ // x = 34
                {
                    tilesetId: 0,
                    tileId: [4,5] 
                },
            ],
        ],
        [ // y = 18
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: [3,5],    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 4,
                    tileId: 36,     
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
                {
                    tilesetId: 6,
                    tileId: 0, 
                }
            ],
            [ // x = 6
                {
                    tilesetId: 6,
                    tileId: 1,   
                },
            ],
            [ // x = 7
                {
                    tilesetId: 6,
                    tileId: 1,   
                },
            ],
            [ // x = 8
                {
                    tilesetId: 6,
                    tileId: 1,   
                },
            ],
            [ // x = 9
                {
                    tilesetId: 6,
                    tileId: 1,  
                },
            ],
            [ // x = 10
                {
                    tilesetId: 6,
                    tileId: 1,  
                },
            ],
            [ // x = 11
                {
                    tilesetId: 6,
                    tileId: 1,  
                },
            ],
            [ // x = 12
                {
                    tilesetId: 6,
                    tileId: 1,  
                },
            ],
            [ // x = 13
                {
                    tilesetId: 3,
                    tileId: 20,  
                },
                {
                    tilesetId: 6,
                    tileId: 2,  
                }
            ],
            [ // x = 14
                {
                    tilesetId: 3,
                    tileId: 20,  
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
                {
                    tilesetId: 5,
                    tileId: 10,   
                },
            ],
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 0,       
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 7,        
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 20
                {
                    tilesetId: 1,
                    tileId: 0,         
                },
                {
                    tilesetId: 6,
                    tileId: 9,         
                },
            ],
            [ // x = 21
                {
                    tilesetId: 6,
                    tileId: 10,   
                },
            ],
            [ // x = 22
                {
                    tilesetId: 6,
                    tileId: 10,     
                },
            ],
            [ // x = 23
                {
                    tilesetId: 6,
                    tileId: 10,   
                },
            ],
            [ // x = 24
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
                {
                    tilesetId: 6,
                    tileId: 11,   
                },
            ],
            [ // x = 25
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 26
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 27
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 28
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 29
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 30
                {
                    tilesetId: 0,
                    tileId: [2,4],   
                },
            ],
            [ // x = 31
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
            [ // x = 32
                {
                    tilesetId: 0,
                    tileId: [3,5],   
                },
            ],
            [ // x = 33
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
        ],
        [ // y = 19
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: [3,5],    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 4,
                    tileId: 36,     
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
                    tilesetId: 6,
                    tileId: 3, 
                },
            ],
            [ // x = 6
                {
                    tilesetId: 6,
                    tileId: 4,   
                },
            ],
            [ // x = 7
                {
                    tilesetId: 6,
                    tileId: 4,  
                },
            ],
            [ // x = 8
                {
                    tilesetId: 6,
                    tileId: 4,  
                },
            ],
            [ // x = 9
                {
                    tilesetId: 6,
                    tileId: 4, 
                },
            ],
            [ // x = 10
                {
                    tilesetId: 6,
                    tileId: 4, 
                },
            ],
            [ // x = 11
                {
                    tilesetId: 6,
                    tileId: 4, 
                },
            ],
            [ // x = 12
                {
                    tilesetId: 6,
                    tileId: 4, 
                },
            ],
            [ // x = 13
                {
                    tilesetId: 6,
                    tileId: 5,  
                },
            ],
            [ // x = 14
                {
                    tilesetId: 3,
                    tileId: 20,  
                },
            ],
            [ // x = 15
                {
                    tilesetId: 0,
                    tileId: 27,   
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
                {
                    tilesetId: 1,
                    tileId: 52,   
                },
                {
                    tilesetId: 5,
                    tileId: 11,   
                },
            ],
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 0,       
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 7,        
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 20
                {
                    tilesetId: 6,
                    tileId: 12,         
                },
            ],
            [ // x = 21
                {
                    tilesetId: 6,
                    tileId: 13,   
                },
            ],
            [ // x = 22
                {
                    tilesetId: 6,
                    tileId: 13,     
                },
            ],
            [ // x = 23
                {
                    tilesetId: 6,
                    tileId: 13,   
                },
            ],
            [ // x = 24
                {
                    tilesetId: 6,
                    tileId: 14,   
                },
            ],
            [ // x = 25
                {
                    tilesetId: 1,
                    tileId: 3,   
                },
            ],
            [ // x = 26
                {
                    tilesetId: 1,
                    tileId: [3,4],     
                },
            ],
            [ // x = 27
                {
                    tilesetId: 1,
                    tileId: 4,     
                },
            ],
            [ // x = 28
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 29
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 30
                {
                    tilesetId: 0,
                    tileId: [2,4],   
                },
            ],
            [ // x = 31
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
            [ // x = 32
                {
                    tilesetId: 0,
                    tileId: [3,5],   
                },
            ],
            [ // x = 33
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
        ],
        [ // y = 20
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: [3,5],    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 4,
                    tileId: 36,     
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
                    tilesetId: 6,
                    tileId: 3, 
                },
            ],
            [ // x = 6
                {
                    tilesetId: 6,
                    tileId: 4,   
                },
            ],
            [ // x = 7
                {
                    tilesetId: 6,
                    tileId: 19,  
                },
            ],
            [ // x = 8
                {
                    tilesetId: 6,
                    tileId: 7,  
                },
            ],
            [ // x = 9
                {
                    tilesetId: 6,
                    tileId: 7, 
                },
            ],
            [ // x = 10
                {
                    tilesetId: 6,
                    tileId: 7, 
                },
            ],
            [ // x = 11
                {
                    tilesetId: 6,
                    tileId: 18, 
                },
            ],
            [ // x = 12
                {
                    tilesetId: 6,
                    tileId: 4, 
                },
            ],
            [ // x = 13
                {
                    tilesetId: 6,
                    tileId: 5,  
                },
            ],
            [ // x = 14
                {
                    tilesetId: 3,
                    tileId: 20,  
                },
            ],
            [ // x = 15
                {
                    tilesetId: 0,
                    tileId: 28,   
                },
                {
                    tilesetId: 5,
                    tileId: 13,   
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
                {
                    tilesetId: 1,
                    tileId: 52,   
                },
                {
                    tilesetId: 5,
                    tileId: 14,   
                },
            ],
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 0,       
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 7,        
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 20
                {
                    tilesetId: 6,
                    tileId: 15,         
                },
            ],
            [ // x = 21
                {
                    tilesetId: 6,
                    tileId: 16,   
                },
            ],
            [ // x = 22
                {
                    tilesetId: 6,
                    tileId: 16,     
                },
            ],
            [ // x = 23
                {
                    tilesetId: 6,
                    tileId: 16,   
                },
            ],
            [ // x = 24
                {
                    tilesetId: 6,
                    tileId: 17,   
                },
            ],
            [ // x = 25
                {
                    tilesetId: 1,
                    tileId: [3, 5],   
                },
            ],
            [ // x = 26
                {
                    tilesetId: 1,
                    tileId: 7,     
                },
                {
                    tilesetId: 5,
                    tileId: 19,     
                },
            ],
            [ // x = 27
                {
                    tilesetId: 1,
                    tileId: [4,6],     
                },
            ],
            [ // x = 28
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 29
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 30
                {
                    tilesetId: 0,
                    tileId: [2,4],   
                },
            ],
            [ // x = 31
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
            [ // x = 32
                {
                    tilesetId: 0,
                    tileId: [3,5], 
                },
            ],
            [ // x = 33
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
        ],
        [ // y = 21
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: [3,5],    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 4,
                    tileId: 36,     
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
                    tilesetId: 6,
                    tileId: 6, 
                },
            ],
            [ // x = 6
                {
                    tilesetId: 6,
                    tileId: 7,   
                },
            ],
            [ // x = 7
                {
                    tilesetId: 6,
                    tileId: 8,  
                },
            ],
            [ // x = 8
                {
                    tilesetId: 6,
                    tileId: 27,  
                },
            ],
            [ // x = 9
                {
                    tilesetId: 6,
                    tileId: 27, 
                },
            ],
            [ // x = 10
                {
                    tilesetId: 6,
                    tileId: 27, 
                },
            ],
            [ // x = 11
                {
                    tilesetId: 6,
                    tileId: 6, 
                },
            ],
            [ // x = 12
                {
                    tilesetId: 6,
                    tileId: 7, 
                },
            ],
            [ // x = 13
                {
                    tilesetId: 6,
                    tileId: 8,  
                },
            ],
            [ // x = 14
                {
                    tilesetId: 3,
                    tileId: 20,  
                },
            ],
            [ // x = 15
                {
                    tilesetId: 0,
                    tileId: 28,   
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
                {
                    tilesetId: 1,
                    tileId: 52,   
                },
                {
                    tilesetId: 5,
                    tileId: 14,   
                },
                {
                    tilesetId: 5,
                    tileId: 9,   
                },
            ],
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 0,       
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 7,        
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 20
                {
                    tilesetId: 2,
                    tileId: 3,         
                },
            ],
            [ // x = 21
                {
                    tilesetId: 2,
                    tileId: 1,   
                },
            ],
            [ // x = 22
                {
                    tilesetId: 2,
                    tileId: 1,     
                },
            ],
            [ // x = 23
                {
                    tilesetId: 2,
                    tileId: 1,   
                },
            ],
            [ // x = 24
                {
                    tilesetId: 2,
                    tileId: 3,   
                },
            ],
            [ // x = 25
                {
                    tilesetId: 1,
                    tileId: [3,5],   
                },
                {
                    tilesetId: 6,
                    tileId: 20,   
                },
            ],
            [ // x = 26
                {
                    tilesetId: 6,
                    tileId: 21,     
                },
            ],
            [ // x = 27
                {
                    tilesetId: 6,
                    tileId: 21,     
                },
            ],
            [ // x = 28
                {
                    tilesetId: 6,
                    tileId: 21,    
                },
            ],
            [ // x = 29
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
                {
                    tilesetId: 6,
                    tileId: 22,     
                },
            ],
            [ // x = 30
                {
                    tilesetId: 0,
                    tileId: [2,4],   
                },
            ],
            [ // x = 31
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
            [ // x = 32
                {
                    tilesetId: 0,
                    tileId: [3,5],   
                },
            ],
            [ // x = 33
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
        ],
        [ // y = 22
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: [3,5],    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 4,
                    tileId: 36,     
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
                    tilesetId: 2,
                    tileId: 5, 
                },
            ],
            [ // x = 6
                {
                    tilesetId: 2,
                    tileId: 5,   
                },
            ],
            [ // x = 7
                {
                    tilesetId: 2,
                    tileId: 5,  
                },
            ],
            [ // x = 8
                {
                    tilesetId: 2,
                    tileId: 3,  
                },
            ],
            [ // x = 9
                {
                    tilesetId: 2,
                    tileId: 3, 
                },
                {
                    tilesetId: 5,
                    tileId: 4, 
                },
            ],
            [ // x = 10
                {
                    tilesetId: 2,
                    tileId: 3, 
                },
            ],
            [ // x = 11
                {
                    tilesetId: 2,
                    tileId: 5, 
                },
            ],
            [ // x = 12
                {
                    tilesetId: 2,
                    tileId: 5, 
                },
            ],
            [ // x = 13
                {
                    tilesetId: 2,
                    tileId: 5,  
                },
            ],
            [ // x = 14
                {
                    tilesetId: 3,
                    tileId: 20,  
                },
            ],
            [ // x = 15
                {
                    tilesetId: 0,
                    tileId: 28,   
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
                {
                    tilesetId: 1,
                    tileId: 52,   
                },
                {
                    tilesetId: 5,
                    tileId: 14,   
                },
                {
                    tilesetId: 5,
                    tileId: 10,   
                },
            ],
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 0,       
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 7,        
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 20
                {
                    tilesetId: 2,
                    tileId: 3,         
                },
            ],
            [ // x = 21
                {
                    tilesetId: 2,
                    tileId: 3,   
                },
            ],
            [ // x = 22
                {
                    tilesetId: 2,
                    tileId: 3,     
                },
                {
                    tilesetId: 5,
                    tileId: 4,     
                },
            ],
            [ // x = 23
                {
                    tilesetId: 2,
                    tileId: 3,   
                },
            ],
            [ // x = 24
                {
                    tilesetId: 2,
                    tileId: 3,   
                },
            ],
            [ // x = 25
                {
                    tilesetId: 6,
                    tileId: 23,   
                },
            ],
            [ // x = 26
                {
                    tilesetId: 6,
                    tileId: 24,     
                },
            ],
            [ // x = 27
                {
                    tilesetId: 6,
                    tileId: 24,      
                },
            ],
            [ // x = 28
                {
                    tilesetId: 6,
                    tileId: 24,   
                },
            ],
            [ // x = 29
                {
                    tilesetId: 6,
                    tileId: 25,     
                },
            ],
            [ // x = 30
                {
                    tilesetId: 0,
                    tileId: [2,4],   
                },
            ],
            [ // x = 31
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
            [ // x = 32
                {
                    tilesetId: 0,
                    tileId: [3,5],   
                },
            ],
            [ // x = 33
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
        ],
        [ // y = 23
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: [3,5],    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 4,
                    tileId: 36,     
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
                    tilesetId: 2,
                    tileId: 5, 
                },
            ],
            [ // x = 6
                {
                    tilesetId: 2,
                    tileId: 5,   
                },
            ],
            [ // x = 7
                {
                    tilesetId: 2,
                    tileId: 5,  
                },
            ],
            [ // x = 8
                {
                    tilesetId: 2,
                    tileId: 3,  
                },
            ],
            [ // x = 9
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
                {
                    tilesetId: 1,
                    tileId: 16, 
                },
            ],
            [ // x = 10
                {
                    tilesetId: 2,
                    tileId: 3, 
                },
            ],
            [ // x = 11
                {
                    tilesetId: 2,
                    tileId: 5, 
                },
            ],
            [ // x = 12
                {
                    tilesetId: 2,
                    tileId: 5, 
                },
            ],
            [ // x = 13
                {
                    tilesetId: 2,
                    tileId: 5,  
                },
            ],
            [ // x = 14
                {
                    tilesetId: 3,
                    tileId: 20,  
                },
            ],
            [ // x = 15
                {
                    tilesetId: 0,
                    tileId: 28,   
                },
                {
                    tilesetId: 5,
                    tileId: 12,   
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
                {
                    tilesetId: 1,
                    tileId: 52,   
                },
                {
                    tilesetId: 5,
                    tileId: 11,   
                },
            ],
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 3,       
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 7,        
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 4,     
                },
            ],
            [ // x = 20
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
                {
                    tilesetId: 1,
                    tileId: 52,   
                },
                {
                    tilesetId: 5,
                    tileId: 14,   
                },
            ],
            [ // x = 21
                {
                    tilesetId: 2,
                    tileId: 3,   
                },
            ],
            [ // x = 22
                {
                    tilesetId: 1,
                    tileId: 2,     
                },
                {
                    tilesetId: 5,
                    tileId: 5,     
                },
            ],
            [ // x = 23
                {
                    tilesetId: 2,
                    tileId: 3,   
                },
            ],
            [ // x = 24
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
                {
                    tilesetId: 1,
                    tileId: 52,   
                },
                {
                    tilesetId: 5,
                    tileId: 14,   
                },
            ],
            [ // x = 25
                {
                    tilesetId: 6,
                    tileId: 26,   
                },
            ],
            [ // x = 26
                {
                    tilesetId: 6,
                    tileId: 27,     
                },
            ],
            [ // x = 27
                {
                    tilesetId: 6,
                    tileId: 27,      
                },
            ],
            [ // x = 28
                {
                    tilesetId: 6,
                    tileId: 27,   
                },
            ],
            [ // x = 29
                {
                    tilesetId: 6,
                    tileId: 28,     
                },
            ],
            [ // x = 30
                {
                    tilesetId: 0,
                    tileId: [2,4],   
                },
            ],
            [ // x = 31
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
            [ // x = 32
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
            [ // x = 33
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
        ],
        [ // y = 24
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: [3,5],    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 4,
                    tileId: 36,     
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
                    tilesetId: 3,
                    tileId: 20, 
                },
            ],
            [ // x = 6
                {
                    tilesetId: 3,
                    tileId: 20,   
                },
            ],
            [ // x = 7
                {
                    tilesetId: 3,
                    tileId: 22,  
                },
            ],
            [ // x = 8
                {
                    tilesetId: 1,
                    tileId: 17,  
                },
            ],
            [ // x = 9
                {
                    tilesetId: 4,
                    tileId: 2, 
                },
            ],
            [ // x = 10
                {
                    tilesetId: 1,
                    tileId: 18, 
                },
            ],
            [ // x = 11
                {
                    tilesetId: 3,
                    tileId: 22, 
                },
            ],
            [ // x = 12
                {
                    tilesetId: 3,
                    tileId: 20, 
                },
            ],
            [ // x = 13
                {
                    tilesetId: 3,
                    tileId: 20, 
                },
            ],
            [ // x = 14
                {
                    tilesetId: 3,
                    tileId: 20,  
                },
            ],
            [ // x = 15
                {
                    tilesetId: 0,
                    tileId: 28,   
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 3,   
                },
            ],
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: [5, 6],       
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: [5, 6],       
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: [5, 6],    
                },
            ],
            [ // x = 20
                {
                    tilesetId: 1,
                    tileId: 2,   
                },
            ],
            [ // x = 21
                {
                    tilesetId: 1,
                    tileId: 7,   
                },
            ],
            [ // x = 22
                {
                    tilesetId: 1,
                    tileId: [4,6],     
                },
            ],
            [ // x = 23
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 24
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 25
                {
                    tilesetId: 2,
                    tileId: 3,   
                },
            ],
            [ // x = 26
                {
                    tilesetId: 2,
                    tileId: 1,     
                },
            ],
            [ // x = 27
                {
                    tilesetId: 2,
                    tileId: 1,      
                },
            ],
            [ // x = 28
                {
                    tilesetId: 2,
                    tileId: 1,   
                },
            ],
            [ // x = 29
                {
                    tilesetId: 2,
                    tileId: 3,     
                },
            ],
            [ // x = 30
                {
                    tilesetId: 0,
                    tileId: 4,   
                },
            ],
            [ // x = 31
                {
                    tilesetId: 0,
                    tileId: [4,5],   
                },
            ],
            [ // x = 32
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
            [ // x = 33
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
        ],
        [ // y = 25
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: [3,5],    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 4,
                    tileId: 36,     
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
                    tilesetId: 3,
                    tileId: 21, 
                },
            ],
            [ // x = 6
                {
                    tilesetId: 3,
                    tileId: 21,   
                },
            ],
            [ // x = 7
                {
                    tilesetId: 3,
                    tileId: 23,  
                },
            ],
            [ // x = 8
                {
                    tilesetId: 1,
                    tileId: [17,19],  
                },
            ],
            [ // x = 9
                {
                    tilesetId: 4,
                    tileId: 2, 
                },
            ],
            [ // x = 10
                {
                    tilesetId: 1,
                    tileId: [18,20], 
                },
            ],
            [ // x = 11
                {
                    tilesetId: 3,
                    tileId: 23, 
                },
            ],
            [ // x = 12
                {
                    tilesetId: 3,
                    tileId: 21, 
                },
            ],
            [ // x = 13
                {
                    tilesetId: 3,
                    tileId: 21, 
                },
            ],
            [ // x = 14
                {
                    tilesetId: 3,
                    tileId: 21,  
                },
            ],
            [ // x = 15
                {
                    tilesetId: 1,
                    tileId: 3,   
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: [4,6],   
                },
            ],
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 42,       
                },
                {
                    tilesetId: 5,
                    tileId: 8,       
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: [42,43],       
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 43,    
                },
            ],
            [ // x = 20
                {
                    tilesetId: 1,
                    tileId: 7,   
                },
            ],
            [ // x = 21
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 22
                {
                    tilesetId: 1,
                    tileId: 7,     
                },
            ],
            [ // x = 23
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 24
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 25
                {
                    tilesetId: 2,
                    tileId: 3,   
                },
            ],
            [ // x = 26
                {
                    tilesetId: 2,
                    tileId: 3,     
                },
            ],
            [ // x = 27
                {
                    tilesetId: 2,
                    tileId: 3,      
                },
                {
                    tilesetId: 5,
                    tileId: 4,      
                },
            ],
            [ // x = 28
                {
                    tilesetId: 2,
                    tileId: 3,   
                },
            ],
            [ // x = 29
                {
                    tilesetId: 2,
                    tileId: 3,     
                },
            ],
            [ // x = 30
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 31
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 32
                {
                    tilesetId: 0,
                    tileId: [2,4],   
                },
            ],
            [ // x = 33
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
        ],
        [ // y = 26
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: [3,5],    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 4,
                    tileId: 36,     
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
                    tilesetId: 4,
                    tileId: 37, 
                },
                {
                    tilesetId: 5,
                    tileId: 6, 
                },
            ],
            [ // x = 6
                {
                    tilesetId: 4,
                    tileId: 37,   
                },
                {
                    tilesetId: 5,
                    tileId: 6,   
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
                    tileId: [17,19],  
                },
            ],
            [ // x = 9
                {
                    tilesetId: 4,
                    tileId: 2, 
                },
            ],
            [ // x = 10
                {
                    tilesetId: 4,
                    tileId: 2, 
                },
            ],
            [ // x = 11
                {
                    tilesetId: 1,
                    tileId: [17,18], 
                },
            ],
            [ // x = 12
                {
                    tilesetId: 1,
                    tileId: [17,18], 
                },
            ],
            [ // x = 13
                {
                    tilesetId: 1,
                    tileId: [17,18], 
                },
            ],
            [ // x = 14
                {
                    tilesetId: 1,
                    tileId: 18,  
                },
            ],
            [ // x = 15
                {
                    tilesetId: 1,
                    tileId: [3,5],   
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: [4,6],   
                },
            ],
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: [42,44],       
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: [42,45],
                },
                {
                    tilesetId: 5,
                    tileId: 7,
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: [43,45],    
                },
            ],
            [ // x = 20
                {
                    tilesetId: 1,
                    tileId: 7,   
                },
            ],
            [ // x = 21
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 22
                {
                    tilesetId: 1,
                    tileId: 7,     
                },
            ],
            [ // x = 23
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 24
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 25
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
                {
                    tilesetId: 1,
                    tileId: 52,   
                },
                {
                    tilesetId: 5,
                    tileId: 14,   
                },
            ],
            [ // x = 26
                {
                    tilesetId: 2,
                    tileId: 3,     
                },
            ],
            [ // x = 27
                {
                    tilesetId: 1,
                    tileId: 2,      
                },
                {
                    tilesetId: 5,
                    tileId: 5,      
                },
            ],
            [ // x = 28
                {
                    tilesetId: 2,
                    tileId: 3,   
                },
            ],
            [ // x = 29
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
                {
                    tilesetId: 1,
                    tileId: 52,   
                },
                {
                    tilesetId: 5,
                    tileId: 14,   
                },
            ],
            [ // x = 30
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 31
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 32
                {
                    tilesetId: 0,
                    tileId: [2,4],   
                },
            ],
            [ // x = 33
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
        ],
        [ // y = 27
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: [3,5],    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 4,
                    tileId: 36,     
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
                    tilesetId: 4,
                    tileId: 38, 
                },
                {
                    tilesetId: 5,
                    tileId: 6, 
                },
            ],
            [ // x = 6
                {
                    tilesetId: 4,
                    tileId: 38,   
                },
                {
                    tilesetId: 5,
                    tileId: 6,   
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
                    tileId: 19,  
                },
            ],
            [ // x = 9
                {
                    tilesetId: 1,
                    tileId: [19,20], 
                },
            ],
            [ // x = 10
                {
                    tilesetId: 1,
                    tileId: [19,20], 
                },
            ],
            [ // x = 11
                {
                    tilesetId: 1,
                    tileId: [19,20], 
                },
            ],
            [ // x = 12
                {
                    tilesetId: 1,
                    tileId: [19,20], 
                },
            ],
            [ // x = 13
                {
                    tilesetId: 1,
                    tileId: [19,20], 
                },
            ],
            [ // x = 14
                {
                    tilesetId: 1,
                    tileId: 20,  
                },
            ],
            [ // x = 15
                {
                    tilesetId: 1,
                    tileId: 5,   
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: [4,6],   
                },
            ],
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 44,       
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: [44,45],       
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 45,    
                },
            ],
            [ // x = 20
                {
                    tilesetId: 1,
                    tileId: 7,   
                },
            ],
            [ // x = 21
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 22
                {
                    tilesetId: 1,
                    tileId: 5,     
                },
            ],
            [ // x = 23
                {
                    tilesetId: 1,
                    tileId: 7,   
                },
            ],
            [ // x = 24
                {
                    tilesetId: 1,
                    tileId: 7,   
                },
            ],
            [ // x = 25
                {
                    tilesetId: 1,
                    tileId: 7, 
                },
            ],
            [ // x = 26
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 27
                {
                    tilesetId: 1,
                    tileId: 6,      
                },
            ],
            [ // x = 28
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 29
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 30
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 31
                {
                    tilesetId: 0,
                    tileId: 2,     
                },
            ],
            [ // x = 32
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
            [ // x = 33
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
        ],
        [ // y = 28
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: [3,5],    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 4,
                    tileId: 36,     
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
                    tileId: 5,   
                },
            ],
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 7,       
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 7,       
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 20
                {
                    tilesetId: 1,
                    tileId: 6,   
                },
            ],
            [ // x = 21
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 22
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 23
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 24
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 25
                {
                    tilesetId: 3,
                    tileId: 13, 
                },
            ],
            [ // x = 26
                {
                    tilesetId: 3,
                    tileId: [13,14],    
                },
            ],
            [ // x = 27
                {
                    tilesetId: 3,
                    tileId: [13,14],       
                },
            ],
            [ // x = 28
                {
                    tilesetId: 3,
                    tileId: 14,     
                },
            ],
            [ // x = 29
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 30
                {
                    tilesetId: 0,
                    tileId: 2,   
                },
            ],
            [ // x = 31
                {
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 32
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
            [ // x = 33
                {
                    tilesetId: 0,
                    tileId: 29,   
                },
            ],
        ],
        [ // y = 29
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: [3,5],    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 4,
                    tileId: 36,     
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
                {
                    tilesetId: 6,
                    tileId: 29,  
                },
            ],
            [ // x = 6
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
                {
                    tilesetId: 6,
                    tileId: 30,    
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
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 0,      
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 7,       
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 20
                {
                    tilesetId: 3,
                    tileId: 13,   
                },
            ],
            [ // x = 21
                {
                    tilesetId: 3,
                    tileId: [13,14],   
                },
            ],
            [ // x = 22
                {
                    tilesetId: 3,
                    tileId: [13,14],  
                },
            ],
            [ // x = 23
                {
                    tilesetId: 3,
                    tileId: [13,14],  
                },
            ],
            [ // x = 24
                {
                    tilesetId: 3,
                    tileId: [13,14], 
                },
            ],
            [ // x = 25
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 26
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 27
                {
                    tilesetId: 4,
                    tileId: 0,  
                },
            ],
            [ // x = 28
                {
                    tilesetId: 3,
                    tileId: [14,16],     
                },
            ],
            [ // x = 29
                {
                    tilesetId: 1,
                    tileId: 0,   
                },
            ],
            [ // x = 30
                {
                    tilesetId: 0,
                    tileId: 4,   
                },
            ],
            [ // x = 31
                {
                    tilesetId: 0,
                    tileId: [4,5], 
                },
            ],
            [ // x = 32
                {
                    tilesetId: 0,
                    tileId: [4,5],
                },
            ],
            [ // x = 33
                {
                    tilesetId: 0,
                    tileId: [4,5],
                },
            ],
        ],
        [ // y = 30
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: [3,5],    
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
                    tilesetId: 6,
                    tileId: 31,  
                },
            ],
            [ // x = 6
                {
                    tilesetId: 6,
                    tileId: 32,    
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
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 0,      
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 2,       
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 20
                {
                    tilesetId: 3,
                    tileId: [13,15],   
                },
            ],
            [ // x = 21
                {
                    tilesetId: 4,
                    tileId: 0,   
                },
            ],
            [ // x = 22
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 23
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 24
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 25
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 26
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 27
                {
                    tilesetId: 4,
                    tileId: 0,  
                },
            ],
            [ // x = 28
                {
                    tilesetId: 3,
                    tileId: [14,16],     
                },
            ],
            [ // x = 29
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 30
                {
                    tilesetId: 3,
                    tileId: 13,     
                },
            ],
            [ // x = 31
                {
                    tilesetId: 3,
                    tileId: [13,14],    
                },
            ],
            [ // x = 32
                {
                    tilesetId: 3,
                    tileId: [13,14],    
                },
            ],
            [ // x = 33
                {
                    tilesetId: 3,
                    tileId: [13,14],    
                },
            ],
        ],
        [ // y = 31
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: [3,5],    
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
                    tilesetId: 6,
                    tileId: 33,  
                },
            ],
            [ // x = 6
                {
                    tilesetId: 6,
                    tileId: 34,    
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
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 3,      
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 6,       
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 20
                {
                    tilesetId: 3,
                    tileId: [13,15],   
                },
            ],
            [ // x = 21
                {
                    tilesetId: 4,
                    tileId: 0,   
                },
            ],
            [ // x = 22
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 23
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 24
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 25
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 26
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 27
                {
                    tilesetId: 4,
                    tileId: 0,  
                },
            ],
            [ // x = 28
                {
                    tilesetId: 3,
                    tileId: 16,     
                },
            ],
            [ // x = 29
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 30
                {
                    tilesetId: 3,
                    tileId: 15, 
                },
            ],
            [ // x = 31
                {
                    tilesetId: 3,
                    tileId: [15,16], 
                },
            ],
            [ // x = 32
                {
                    tilesetId: 3,
                    tileId: [15,16], 
                },
            ],
            [ // x = 33
                {
                    tilesetId: 3,
                    tileId: [15,16], 
                },
            ],
        ],
        [ // y = 32
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: [3,5],    
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
                    tilesetId: 6,
                    tileId: 35,  
                },
            ],
            [ // x = 6
                {
                    tilesetId: 6,
                    tileId: 36,    
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
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 2,     
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 0,       
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 20
                {
                    tilesetId: 3,
                    tileId: [13,15],   
                },
            ],
            [ // x = 21
                {
                    tilesetId: 4,
                    tileId: 0,   
                },
            ],
            [ // x = 22
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 23
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 24
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 25
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 26
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 27
                {
                    tilesetId: 3,
                    tileId: [14,16],  
                },
            ],
            [ // x = 28
                {
                    tilesetId: 3,
                    tileId: 18,     
                },
            ],
            [ // x = 29
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 30
                {
                    tilesetId: 3,
                    tileId: 18,    
                },
            ],
            [ // x = 31
                {
                    tilesetId: 3,
                    tileId: 18,
                },
            ],
            [ // x = 32
                {
                    tilesetId: 3,
                    tileId: 18, 
                },
            ],
            [ // x = 33
                {
                    tilesetId: 3,
                    tileId: 18,
                },
            ],
        ],
        [ // y = 33
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 0,
                    tileId: 3,     
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
                    tilesetId: 4,
                    tileId: 1,  
                },
                {
                    tilesetId: 6,
                    tileId: 37,  
                },
            ],
            [ // x = 6
                {
                    tilesetId: 4,
                    tileId: 1,    
                },
                {
                    tilesetId: 6,
                    tileId: 38,    
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
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 0,      
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 0,       
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 20
                {
                    tilesetId: 3,
                    tileId: [13,15],   
                },
            ],
            [ // x = 21
                {
                    tilesetId: 4,
                    tileId: 0,   
                },
            ],
            [ // x = 22
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 23
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 24
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 25
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 26
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 27
                {
                    tilesetId: 3,
                    tileId: [14,16],  
                },
            ],
            [ // x = 28
                {
                    tilesetId: 3,
                    tileId: 19,     
                },
            ],
            [ // x = 29
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 30
                {
                    tilesetId: 3,
                    tileId: 19,    
                },
            ],
            [ // x = 31
                {
                    tilesetId: 3,
                    tileId: 19,
                },
            ],
            [ // x = 32
                {
                    tilesetId: 3,
                    tileId: 19, 
                },
            ],
            [ // x = 33
                {
                    tilesetId: 3,
                    tileId: 19,
                },
            ],
        ],
        [ // y = 34
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 5,
                    tileId: 2,     
                },
            ],
            [ // x = 3
                {
                    tilesetId: 5,
                    tileId: 2,  
                },
            ],
            [ // x = 4
                {
                    tilesetId: 5,
                    tileId: 2,  
                },
            ],
            [ // x = 5
                {
                    tilesetId: 4,
                    tileId: 1,  
                },
            ],
            [ // x = 6
                {
                    tilesetId: 4,
                    tileId: 1,    
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
                    tilesetId: 3,
                    tileId: 13,  
                },
            ],
            [ // x = 14
                {
                    tilesetId: 3,
                    tileId: [13,14],  
                },
            ],
            [ // x = 15
                {
                    tilesetId: 3,
                    tileId: 14,  
                },
            ],
            [ // x = 16
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 2,     
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 0,       
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 20
                {
                    tilesetId: 3,
                    tileId: 15,   
                },
            ],
            [ // x = 21
                {
                    tilesetId: 3,
                    tileId: [15, 16],   
                },
            ],
            [ // x = 22
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 23
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 24
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 25
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 26
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 27
                {
                    tilesetId: 3,
                    tileId: [14,16],  
                },
            ],
            [ // x = 28
                {
                    tilesetId: 4,
                    tileId: 8,     
                },
            ],
            [ // x = 29
                {
                    tilesetId: 4,
                    tileId: 19,    
                },
            ],
            [ // x = 30
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 31
                {
                    tilesetId: 1,
                    tileId: 0,
                },
            ],
            [ // x = 32
                {
                    tilesetId: 0,
                    tileId: [2,4], 
                },
            ],
            [ // x = 33
                {
                    tilesetId: 0,
                    tileId: [3,5],
                },
            ],
        ],
        [ // y = 35
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 0,
                    tileId: 29,  
                },
                {
                    tilesetId: 5,
                    tileId: 3,  
                },
            ],
            [ // x = 3
                {
                    tilesetId: 0,
                    tileId: 29,  
                },
                {
                    tilesetId: 5,
                    tileId: 3,  
                },
            ],
            [ // x = 4
                {
                    tilesetId: 0,
                    tileId: 29,  
                },
                {
                    tilesetId: 5,
                    tileId: 3,  
                },
            ],
            [ // x = 5
                {
                    tilesetId: 0,
                    tileId: 9,  
                },
            ],
            [ // x = 6
                {
                    tilesetId: 4,
                    tileId: 1,    
                },
            ],
            [ // x = 7
                {
                    tilesetId: 4,
                    tileId: 1,  
                },
            ],
            [ // x = 8
                {
                    tilesetId: 4,
                    tileId: 1,   
                },
            ],
            [ // x = 9
                {
                    tilesetId: 4,
                    tileId: 1,  
                },
            ],
            [ // x = 10
                {
                    tilesetId: 4,
                    tileId: 1,  
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
                    tilesetId: 3,
                    tileId: [13,15],  
                },
            ],
            [ // x = 14
                {
                    tilesetId: 4,
                    tileId: 0,  
                },
            ],
            [ // x = 15
                {
                    tilesetId: 4,
                    tileId: 0,  
                },
            ],
            [ // x = 16
                {
                    tilesetId: 3,
                    tileId: 14, 
                },
            ],
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 5,      
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 4,       
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 20
                {
                    tilesetId: 3,
                    tileId: 18,   
                },
            ],
            [ // x = 21
                {
                    tilesetId: 3,
                    tileId: 18,   
                },
            ],
            [ // x = 22
                {
                    tilesetId: 3,
                    tileId: 15, 
                },
            ],
            [ // x = 23
                {
                    tilesetId: 3,
                    tileId: [15,16], 
                },
            ],
            [ // x = 24
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 25
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 26
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 27
                {
                    tilesetId: 3,
                    tileId: [14,16],  
                },
            ],
            [ // x = 28
                {
                    tilesetId: 4,
                    tileId: 12,     
                },
            ],
            [ // x = 29
                {
                    tilesetId: 4,
                    tileId: 8,    
                },
            ],
            [ // x = 30
                {
                    tilesetId: 4,
                    tileId: 19,    
                },
            ],
            [ // x = 31
                {
                    tilesetId: 1,
                    tileId: 0,
                },
            ],
            [ // x = 32
                {
                    tilesetId: 0,
                    tileId: [2,4], 
                },
            ],
            [ // x = 33
                {
                    tilesetId: 0,
                    tileId: [3,5],
                },
            ],
        ],
        [ // y = 36
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 0,
                    tileId: 29,      
                },
            ],
            [ // x = 3
                {
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 5
                {
                    tilesetId: 0,
                    tileId: 11,  
                },
            ],
            [ // x = 6
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 7
                {
                    tilesetId: 1,
                    tileId: 7,
                },
            ],
            [ // x = 8
                {
                    tilesetId: 1,
                    tileId: 7,
                },
            ],
            [ // x = 9
                {
                    tilesetId: 1,
                    tileId: 7,
                },
            ],
            [ // x = 10
                {
                    tilesetId: 1,
                    tileId: 7,
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
                    tilesetId: 3,
                    tileId: [13,15],  
                },
            ],
            [ // x = 14
                {
                    tilesetId: 4,
                    tileId: 0,  
                },
            ],
            [ // x = 15
                {
                    tilesetId: 4,
                    tileId: 0,  
                },
            ],
            [ // x = 16
                {
                    tilesetId: 3,
                    tileId: 16, 
                },
            ],
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 0,      
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 7,       
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 20
                {
                    tilesetId: 3,
                    tileId: 19,   
                },
            ],
            [ // x = 21
                {
                    tilesetId: 3,
                    tileId: 19,   
                },
            ],
            [ // x = 22
                {
                    tilesetId: 3,
                    tileId: 18, 
                },
            ],
            [ // x = 23
                {
                    tilesetId: 3,
                    tileId: 18, 
                },
            ],
            [ // x = 24
                {
                    tilesetId: 3,
                    tileId: [13,15], 
                },
            ],
            [ // x = 25
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 26
                {
                    tilesetId: 4,
                    tileId: 0, 
                },
            ],
            [ // x = 27
                {
                    tilesetId: 3,
                    tileId: [14,16],  
                },
            ],
            [ // x = 28
                {
                    tilesetId: 4,
                    tileId: 15,     
                },
            ],
            [ // x = 29
                {
                    tilesetId: 4,
                    tileId: 11,    
                },
            ],
            [ // x = 30
                {
                    tilesetId: 4,
                    tileId: 8,    
                },
            ],
            [ // x = 31
                {
                    tilesetId: 4,
                    tileId: 9,
                },
            ],
            [ // x = 32
                {
                    tilesetId: 0,
                    tileId: [2,4], 
                },
            ],
            [ // x = 33
                {
                    tilesetId: 0,
                    tileId: [3,5],
                },
            ],
        ],
        [ // y = 37
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 0,
                    tileId: 29,      
                },
            ],
            [ // x = 3
                {
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 0,
                    tileId: [9,11],  
                },
            ],
            [ // x = 5
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 6
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 7
                {
                    tilesetId: 0,
                    tileId: 19,
                },
            ],
            [ // x = 8
                {
                    tilesetId: 0,
                    tileId: [19,20],
                },
            ],
            [ // x = 9
                {
                    tilesetId: 0,
                    tileId: 20,
                },
            ],
            [ // x = 10
                {
                    tilesetId: 1,
                    tileId: 7,
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
                    tilesetId: 3,
                    tileId: 15,  
                },
            ],
            [ // x = 14
                {
                    tilesetId: 3,
                    tileId: [15,16],  
                },
            ],
            [ // x = 15
                {
                    tilesetId: 3,
                    tileId: 16,  
                },
            ],
            [ // x = 16
                {
                    tilesetId: 3,
                    tileId: 18, 
                },
            ],
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 0,      
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 7,       
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 20
                {
                    tilesetId: 4,
                    tileId: 8,   
                },
            ],
            [ // x = 21
                {
                    tilesetId: 4,
                    tileId: 19,   
                },
            ],
            [ // x = 22
                {
                    tilesetId: 3,
                    tileId: 19, 
                },
            ],
            [ // x = 23
                {
                    tilesetId: 3,
                    tileId: 19, 
                },
            ],
            [ // x = 24
                {
                    tilesetId: 3,
                    tileId: 15, 
                },
            ],
            [ // x = 25
                {
                    tilesetId: 3,
                    tileId: [15, 16], 
                },
            ],
            [ // x = 26
                {
                    tilesetId: 3,
                    tileId: [15, 16], 
                },
            ],
            [ // x = 27
                {
                    tilesetId: 3,
                    tileId: 16,  
                },
            ],
            [ // x = 28
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 29
                {
                    tilesetId: 4,
                    tileId: 14,    
                },
            ],
            [ // x = 30
                {
                    tilesetId: 4,
                    tileId: 11,    
                },
            ],
            [ // x = 31
                {
                    tilesetId: 4,
                    tileId: 12,
                },
            ],
            [ // x = 32
                {
                    tilesetId: 0,
                    tileId: 25,
                },
            ],
            [ // x = 33
                {
                    tilesetId: 0,
                    tileId: 26,
                },
            ],
        ],
        [ // y = 38
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 0,
                    tileId: 29,      
                },
            ],
            [ // x = 3
                {
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 0,
                    tileId: [9,11],  
                },
            ],
            [ // x = 5
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 6
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 7
                {
                    tilesetId: 0,
                    tileId: [19,21],
                },
            ],
            [ // x = 8
                {
                    tilesetId: 0,
                    tileId: 23,
                },
            ],
            [ // x = 9
                {
                    tilesetId: 0,
                    tileId: [20,22],
                },
            ],
            [ // x = 10
                {
                    tilesetId: 1,
                    tileId: 7,
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
                    tilesetId: 3,
                    tileId: 18,  
                },
            ],
            [ // x = 14
                {
                    tilesetId: 3,
                    tileId: 18,  
                },
            ],
            [ // x = 15
                {
                    tilesetId: 3,
                    tileId: 18,  
                },
            ],
            [ // x = 16
                {
                    tilesetId: 3,
                    tileId: [18,19], 
                },
            ],
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 0,      
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 0,       
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 1,     
                },
            ],
            [ // x = 20
                {
                    tilesetId: 4,
                    tileId: 11,   
                },
            ],
            [ // x = 21
                {
                    tilesetId: 4,
                    tileId: 8,   
                },
            ],
            [ // x = 22
                {
                    tilesetId: 4,
                    tileId: 19, 
                },
            ],
            [ // x = 23
                {
                    tilesetId: 1,
                    tileId: 0, 
                },
            ],
            [ // x = 24
                {
                    tilesetId: 3,
                    tileId: 18, 
                },
            ],
            [ // x = 25
                {
                    tilesetId: 3,
                    tileId: 18,
                },
            ],
            [ // x = 26
                {
                    tilesetId: 3,
                    tileId: 18,
                },
            ],
            [ // x = 27
                {
                    tilesetId: 3,
                    tileId: 18,
                },
            ],
            [ // x = 28
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 29
                {
                    tilesetId: 1,
                    tileId: 0,    
                },
            ],
            [ // x = 30
                {
                    tilesetId: 4,
                    tileId: 14,    
                },
            ],
            [ // x = 31
                {
                    tilesetId: 4,
                    tileId: 15,
                },
            ],
            [ // x = 32
                {
                    tilesetId: 0,
                    tileId: 25,
                },
            ],
            [ // x = 33
                {
                    tilesetId: 0,
                    tileId: 26,
                },
            ],
        ],
        [ // y = 39
            [ // x = 0
                { // Layer = 0
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 1
                {
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 2
                {
                    tilesetId: 0,
                    tileId: 29,      
                },
            ],
            [ // x = 3
                {
                    tilesetId: 0,
                    tileId: 29,    
                },
            ],
            [ // x = 4
                {
                    tilesetId: 0,
                    tileId: [9,11],  
                },
            ],
            [ // x = 5
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 6
                {
                    tilesetId: 1,
                    tileId: 7,    
                },
            ],
            [ // x = 7
                {
                    tilesetId: 0,
                    tileId: [19,21],
                },
            ],
            [ // x = 8
                {
                    tilesetId: 0,
                    tileId: [19,22],
                },
            ],
            [ // x = 9
                {
                    tilesetId: 0,
                    tileId: [20,22],
                },
            ],
            [ // x = 10
                {
                    tilesetId: 1,
                    tileId: 7,
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
                    tilesetId: 3,
                    tileId: [18, 19],  
                },
            ],
            [ // x = 14
                {
                    tilesetId: 3,
                    tileId: [18, 19], 
                },
            ],
            [ // x = 15
                {
                    tilesetId: 3,
                    tileId: [18, 19], 
                },
            ],
            [ // x = 16
                {
                    tilesetId: 3,
                    tileId: 19, 
                },
            ],
            [ // x = 17
                {
                    tilesetId: 1,
                    tileId: 0,      
                },
            ],
            [ // x = 18
                {
                    tilesetId: 1,
                    tileId: 0,       
                },
            ],
            [ // x = 19
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 20
                {
                    tilesetId: 4,
                    tileId: 14,   
                },
            ],
            [ // x = 21
                {
                    tilesetId: 4,
                    tileId: 11,   
                },
            ],
            [ // x = 22
                {
                    tilesetId: 4,
                    tileId: 8, 
                },
            ],
            [ // x = 23
                {
                    tilesetId: 4,
                    tileId: 19, 
                },
            ],
            [ // x = 24
                {
                    tilesetId: 3,
                    tileId: 19, 
                },
            ],
            [ // x = 25
                {
                    tilesetId: 3,
                    tileId: 19,
                },
            ],
            [ // x = 26
                {
                    tilesetId: 3,
                    tileId: 19,
                },
            ],
            [ // x = 27
                {
                    tilesetId: 3,
                    tileId: 19,
                },
            ],
            [ // x = 28
                {
                    tilesetId: 1,
                    tileId: 0,     
                },
            ],
            [ // x = 29
                {
                    tilesetId: 0,
                    tileId: 2,    
                },
            ],
            [ // x = 30
                {
                    tilesetId: 0,
                    tileId: [2,3],    
                },
            ],
            [ // x = 31
                {
                    tilesetId: 0,
                    tileId: [2,3],    
                },
            ],
            [ // x = 32
                {
                    tilesetId: 0,
                    tileId: 29,
                },
            ],
            [ // x = 33
                {
                    tilesetId: 0,
                    tileId: 29   
                },
            ],
        ],
    ],
    
};

const dialogues = [
    [ // 0
        {
            playerId: 0,
            message: "Bonjour tout le monde. Quelle agréable journée pour s'entrainer à la magie."
        },
        {
            playerId: 0,
            message: "Nom de Zeus, que se passe-t-il au lac de l'eau Réane ?<br>Direction le <em>Sud</em> éclaircir ce mystère."
        },
    ],
    [ // 1
        {
            playerId: 0,
            message: "Qu'est-il arrivé au lac, on dirait qu'il est empoisonné. Il va falloir que j'EXP au plus vite pour sauver le village !"
        },
        {
            playerId: 0,
            message: "Bon voyons voir où je peux trouver ces compétences. Il faut que je me souvienne ce que disait la vieille prophétie."
        },
        {
            playerId: 1,
            message: "<em>Le savoir aux quatres coins est réparti, les assembler est ton défi. Les éléments sont avec toi, voyage vers la mer, la terre, la vie.</em>"
        },
        {
            playerId: 0,
            message: "Mais qu'est-ce que ça veut bien vouloir dire tout ce charabia ?"
        },
        {
            playerId: 0,
            message: "Si je regarde la carte, j'ai la mer à ma gauche, facile. La terre, ça peut être au <em>Nord</em>. La vie, c'est le puit du village ? Ou la source dans la forêt ?"
        },
    ],
    [ // 2
        {
            playerId: 1,
            message: "<em>HTML, statique tu seras. Mais sans lui, point d'avenir.</em>"
        },
    ],
    [ // 3
        {
            playerId: 1,
            message: "<em>La cascade sera, et de la poussière sortira ton œuvre.</em>"
        },
    ],
    [ // 4
        {
            playerId: 1,
            message: "<em>L'infini te rejoint. Rien ne t'arrêtera.</em>"
        },
    ],
    [ // 5
        {
            playerId: 1,
            message: "<em>Caché dans les tréfonds du monde, il en est l'un des piliers.</em>"
        },
    ],
    [ // 6
        {
            playerId: 1,
            message: "<em>Scindé en mille morceaux, ce pouvoir dans l'obscurité les lie.</em>"
        },
    ],
    [ // 7
        {
            playerId: 2,
            message: "<em>Vous avez débloqué un nouveau succès.</em>"
        },
    ],
    [ // 8
        {
            playerId: 0,
            message: "Bien, je pense que j'ai tout ce qu'il me faut, je devrais peut-être retourner au lac."
        },
    ],
];

const scripts = {
    gameState: 'intro',
    wakeUpNeo: {
        state: false,
        position: null,
        action: function(player) {
            setTimeout(function() {
				player.gridPosition.needUpdate = 'versLeBas';
				player.gridPosition.y += 2;
                player.mapPosition.y += 2;
				setTimeout(function() {
					player.dialog(0);
				}, 500);
			}, 1000);
        }
    },
    displayCompetencies: {
        exp: false,
        formation: false,
        hobbies: false,
        contact: false
    }
};

// FIXME : pourquoi l'affichage ne s'actualise pas malgré le needUpdate ?
const events = [
    { // 0
        description: "affiche un dialogue lors du constat des dégâts du lac, puis active les compétences",
        executed: false,
        toDisplay: true,
        positions: [
            {
                x: 7,
                y: 34
            },
            {
                x: 8,
                y: 34
            },
            {
                x: 9,
                y: 34
            },
            {
                x: 10,
                y: 34
            },
            {
                x: 11,
                y: 34
            },
            {
                x: 12,
                y: 34
            },
        ],
        childElements: [1, 2, 3, 4, 5],
        action: function(player) {
            player.dialog(1);
            this.childElements.forEach(element => {
                events[element].toDisplay = true;
            });
            this.executed = true;
            this.toDisplay = false;
            player.levelDraw.needUpdate = true;
        }
    },
    { // 1
        image: "assets/sprites/spr_competencies/html5.png",
        description: "compétence html5",
        executed: false,
        toDisplay: false,
        positions: [{
            x: 2,
            y: 34
        }],
        parentElement: 0,
        action: function(player) {
            this.executed = true;
            player.levelDraw.needUpdate = true;
            const logo = document.getElementById('logos-content');
            const exp = document.createElement("img");
            exp.src = this.image;
            exp.classList.add("logo");
            logo.appendChild(exp);
            player.dialog(2);
            player.scoreUpdate(100);
        }
    },
    { // 2
        image: "assets/sprites/spr_competencies/css3.webp",
        description: "compétence css3",
        executed: false,
        toDisplay: false,
        positions: [{
            x: 31,
            y: 35
        }],
        parentElement: 0,
        action: function(player) {
            this.executed = true;
            player.levelDraw.needUpdate = true;
            player.dialog(3);
            const logo = document.getElementById('logos-content');
            const exp = document.createElement("img");
            exp.src = this.image;
            exp.classList.add("logo");
            logo.appendChild(exp);
            player.scoreUpdate(100);
        }
    },
    { // 3
        image: "assets/sprites/spr_competencies/angular.png",
        description: "compétence angular",
        executed: false,
        toDisplay: false,
        positions: [{
            x: 14,
            y: 4
        }],
        parentElement: 0,
        action: function(player) {
            this.executed = true;
            player.levelDraw.needUpdate = true;
            const logo = document.getElementById('logos-content');
            const exp = document.createElement("img");
            exp.src = this.image;
            exp.classList.add("logo");
            logo.appendChild(exp);
            player.dialog(6);
            player.scoreUpdate(100);
        }
    },
    { // 4
        image: "assets/sprites/spr_competencies/php.png",
        description: "compétence php",
        executed: false,
        toDisplay: false,
        positions: [{
            x: 31,
            y: 25
        }],
        parentElement: 0,
        action: function(player) {
            this.executed = true;
            player.levelDraw.needUpdate = true;
            const logo = document.getElementById('logos-content');
            const exp = document.createElement("img");
            exp.src = this.image;
            exp.classList.add("logo");
            logo.appendChild(exp);
            player.dialog(5);
            player.scoreUpdate(100);
        }
    },
    { // 5
        image: "assets/sprites/spr_competencies/js.png",
        description: "compétence js",
        executed: false,
        toDisplay: false,
        positions: [{
            x: 18,
            y: 25
        }],
        parentElement: 0,
        action: function(player) {
            this.executed = true;
            player.levelDraw.needUpdate = true;
            const logo = document.getElementById('logos-content');
            const exp = document.createElement("img");
            exp.src = this.image;
            exp.classList.add("logo");
            logo.appendChild(exp);
            player.dialog(4);
            player.scoreUpdate(100);
        }
    },
    { // 6
        description: "Rétablit le lac",
        executed: false,
        toDisplay: false,
        positions: [
            {
                x: 7,
                y: 34
            },
            {
                x: 8,
                y: 34
            },
            {
                x: 9,
                y: 34
            },
            {
                x: 10,
                y: 34
            },
            {
                x: 11,
                y: 34
            },
            {
                x: 12,
                y: 34
            },
        ],
        action: function(player) {
            /* player.dialog(1);
            this.childElements.forEach(element => {
                events[element].toDisplay = true;
            });
            this.executed = true;
            this.toDisplay = false;
            player.levelDraw.needUpdate = true; */
        }
    },
];