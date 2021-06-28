class Personnage {
    constructor(x, y) {
        this.mapPosition = {
            x: x,
            y: y
        };
        this.animationSprite = {
            nbFPSSprite: 5,
            nbAnimationSprite: 0,
        };
        this.movePlayerDiv = {
            nbFPSPlayerDiv: 10,
            nbAnimationPlayerDiv: 0
        };
    }

    // Gère le déplacement du personnage
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
        
        // Si le joueur vient d'appuyer sur une touche, alors on lance les animations
        if (!this.enCoursDeDeplacement[direction].animationEnCours) {
            this.enCoursDeDeplacement[direction].animationEnCours = true;
            this.enCoursDeDeplacement[direction].identifiantAnimationImg = requestAnimationFrame(() => this.bougeSprite(direction, reverse, spritePosition));

            // On ne lance le déplacement de la div du joueur seulement si la caméra l'y autorise
            if (this.enCoursDeDeplacement[direction].canMove) this.enCoursDeDeplacement[direction].identifiantAnimationDiv = requestAnimationFrame(() => this.bougePlayerDiv(direction, proprieteDeStyle, increment));
        } else if (!this.enCoursDeDeplacement[direction].canMove) {
            // Si la caméra détecte qu'elle peut bouger et que le joueur est arrivé au centre de l'écran, on coupe le déplacement de la div
            cancelAnimationFrame(this.enCoursDeDeplacement[direction].identifiantAnimationDiv);
        } /* else {
            this.enCoursDeDeplacement[direction].identifiantAnimationDiv = requestAnimationFrame(bougePlayerDiv);
        } */
    }

    // Bouge le sprite (la position définit l'emplacement dans l'objet sprite, auquel on ajoute jusqu'à 3 images pour une animation)
    bougeSprite(direction, reverse, spritePosition) {
        if (0 == this.animationSprite.nbAnimationSprite % this.animationSprite.nbFPSSprite){
            this.choixImageSprite(spritePosition + (this.enCoursDeDeplacement[direction].derniereImage % 3), reverse);
            this.enCoursDeDeplacement[direction].derniereImage++;
        }
        
        this.animationSprite.nbAnimationSprite++;
        this.enCoursDeDeplacement[direction].identifiantAnimationImg = requestAnimationFrame(() => this.bougeSprite(direction, reverse, spritePosition));
    }

    // Bouge la div contenant le sprite du joueur
    bougePlayerDiv(direction, proprieteDeStyle, increment) {
        if (0 == this.movePlayerDiv.nbAnimationPlayerDiv % this.movePlayerDiv.nbFPSPlayerDiv){
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
        }
        this.movePlayerDiv.nbAnimationPlayerDiv++;
        this.enCoursDeDeplacement[direction].identifiantAnimationDiv = requestAnimationFrame(() => this.bougePlayerDiv(direction, proprieteDeStyle, increment));
    }

    // Annule le déplacement en cours (lorsque le joueur arrête d'appuyer sur la touche)
    annulerDeplacement(direction) {
        cancelAnimationFrame(this.enCoursDeDeplacement[direction].identifiantAnimationImg);
        cancelAnimationFrame(this.enCoursDeDeplacement[direction].identifiantAnimationDiv);
        this.enCoursDeDeplacement[direction].animationEnCours = false;
        this.enCoursDeDeplacement[direction].derniereImage = 0;
    }

    // Test si le joueur peut se déplacer sur la case suivante
    canWalk(xDir, yDir) {
        const x = this.gridPosition.x + xDir;
        const y = this.gridPosition.y + yDir;
        // Test si le joueur reste dans la camera
        if ( x >= 0 && y >= 0 && y < this.cameraSize.height && x < this.cameraSize.width ){
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