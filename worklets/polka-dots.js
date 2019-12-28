class PolkaDots {

    static get inputArguments() {
        return [
            '<number>',
        ];
    }

    static get inputProperties() { 
        return ['--polka-dots-radius']; 
    }

    paint(ctx, geom, properties, args) {

        let step = Number(args[0]);
        let radius = properties.get('--polka-dots-radius');

        for (let indexX = 0; indexX < geom.height; indexX++) {
            if(indexX %  step  == 0) {

                let offset = 0;
                if(indexX % ( step * 2 ) == 0) {
                    offset = step;
                }

                for (let indexY = 0; indexY < geom.width; indexY++) {
                    
                    if( ( indexY + offset ) % ( step * 2 ) == 0 ) {

                        ctx.fillStyle = "white";
                        ctx.beginPath();
                        ctx.arc( indexX, indexY, radius, 0, 2*Math.PI);
                        ctx.fill();

                    }
                    
                }
            }
        }
    
      }
}
registerPaint('polka-dots', PolkaDots);