/* 
// Objet contenant les différents tilesets avec les différents emplacements sur le tileset, et savoir si le joueur peut franchir ou non la case.
*/
const tileSets = [
    {
        path: "assets/sprites/spr_tileset/Outside_A1.png",
        data: [
            { // 0 flaque sur herbe
                canWalk: true, // TODO : modifier cette valeur plus tard
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
        ]
    },
    {
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
        ]
    },
    {
        path: "assets/sprites/spr_tileset/Outside_A3.png",
        data: [
            { // 0 Toit coloré
                position: [
                    {
                        x: 0,
                        y: 0
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
        ]
    },
    {
        path: "assets/sprites/spr_tileset/Outside_A4.png",
        data: [
            { // 0 Mur de pierre
                position: [
                    {
                        x: 0,
                        y: 0
                    },
                ],
                canWalk: false,
                isAnimation: false,
            },
        ]
    },
    {
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
        ]
    },
    {
        path: "assets/sprites/spr_tileset/Outside_B.png",
        data: [
            { // 0 Escalier
                position: [
                    {
                        x: 1,
                        y: 0
                    },
                ],
                canWalk: true,
                isAnimation: false,
            },
        ]
    },
];