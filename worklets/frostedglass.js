class FrostedGlass {
    static get inputProperties() { 
        return ['--my-image']; 
    }
    paint(ctx, geom, properties) {

        const img = properties.get('--my-image');

        ctx.drawImage(img,10,10,150,180);

        ctx.strokeStyle = 'white';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc( 200, 200, 50, 0, 2*Math.PI);
        ctx.stroke();
        ctx.closePath();
    
      }
}
registerPaint('frostedglass', FrostedGlass);