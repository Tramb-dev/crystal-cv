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
                    {
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
                ]
            }
        ]
    }
];