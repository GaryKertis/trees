import { Sprite } from './sprite.js'

class Platform extends Sprite {
    constructor(x, y, width, height, angle) {
        super(x, y, width, height, angle);
        this.type = "Platform";
        this._color = "transparent";
    }

    draw(ctx) {
        super.draw(ctx);
        let rect = {
            a: this.a,
            b: this.b,
            c: this.c,
            d: this.d
        };

        ctx.beginPath();
        ctx.yMove(this.a);
        ctx.yRect(rect);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

}

export { Platform }
