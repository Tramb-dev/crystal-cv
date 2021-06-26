class Personnage {
    constructor(x, y) {
        this.mapPosition = {
            x: x,
            y: y
        };
    }

        // Gère le déplacement du personnage
    // TODO : prendre en compte le cas de l'appuie de 2 touches simultanées
    deplacement(direction){
        let reverse = false;
        let increment = this.grid;
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
            //let x = this.mapPosition.x, y = this.mapPosition.y;
            let x = 0, y = 0;
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
                this.mapPosition.x += x;
                this.mapPosition.y += y;
                this.gridPosition.x += x;
                this.gridPosition.y += y;
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
    canWalk(xDir, yDir) {
        const x = this.gridPosition.x + xDir;
        const y = this.gridPosition.y + yDir;
        // Test si le joueur reste dans la camera
        if ( x >= 0 && y >= 0 && y < this.cameraSize.height && y < this.cameraSize.width ){
            /* Si on a spécifié qu'une case peut être traversée malgré tout, comme un passage secret par exemple
            Regarde sur chaque layer s'il y a une restriction de mouvement. Une seule suffit pour stopper le joueur */
            for (const element of levelMap.data[this.mapPosition.y + yDir][this.mapPosition.x + xDir]) {
                if( 'object' == typeof element.tileId || !tileSets[element.tilesetId].data[element.tileId].canWalk && !element.canWalk ) return false;
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

}