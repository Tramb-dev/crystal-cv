/* 
// Objet contenant les différents tilesets avec les différents emplacements sur le tileset, et savoir si le joueur peut franchir ou non la case.
*/
const tileSets = [
    {
        path: "assets/sprites/spr_tileset/",
        name: "Outside",
        tilesetNames: [
            {
                tilesetName: "Outside_A1",
                data: [
                    { // 0 flaque sur herbe
                        position: {
                            x: 0,
                            y: 0
                        },
                        canWalk: true, // TODO : modifier cette valeur plus tard
                        isAnimation: true,
                        animation: [
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
                        position: {
                            x: 1,
                            y: 0
                        },
                        canWalk: false, 
                        isAnimation: true,
                        animation: [
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
                        position: {
                            x: 0,
                            y: 1
                        },
                        canWalk: false, 
                        isAnimation: true,
                        animation: [
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
                        position: {
                            x: 1,
                            y: 1
                        },
                        canWalk: false, 
                        isAnimation: true,
                        animation: [
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
                        position: {
                            x: 0,
                            y: 2
                        },
                        canWalk: false, 
                        isAnimation: true,
                        animation: [
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
                        position: {
                            x: 1,
                            y: 2
                        },
                        canWalk: false, 
                        isAnimation: true,
                        animation: [
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
            }
        ]
    }
];