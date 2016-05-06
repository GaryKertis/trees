import { Sprite } from '../sprite.js'

class ComplexShape extends Sprite {
    constructor(x, y, width, height, angle) {
        super(x, y, width, height, angle);
        this.type = "ComplexShape";
        this._shape = [];
    }

    addShape(shape) {
        shape.color = this.color;
        shape.rotate(this._angle, this.center);
        shape.relativeX = (shape.x - this.x) / this.width;
        shape.relativeY = (shape.y - this.y) / this.height;
        shape.relativeWidth = shape.width / this.width;
        shape.relativeHeight = shape.height / this.height;
        this.shape.push(shape);
    }

    get shape() {
        return this._shape;
    }

    set shape(shape) {
        this._shape = shape;
    }

    get color() {
        return super.color;
    }

    set color(color) {
        super.color = color;
        this.shape.forEach(shape => {
            shape.color = color;
        })
    }

    rotate(deg, transformOrigin) {
        super.rotate(deg, transformOrigin);
        this.shape && this.shape.forEach(shape => {
            shape.rotate(deg, transformOrigin);
        })
    }

    get x() {
        return super.x;
    }

    set x(x) {
        let oldX = this.x;
        let diffX = x - oldX;
        super.x = x;
        this.shape.forEach(shape => {
            shape.x += diffX;
        })
    }

    get y() {
        return super.y;
    }

    set y(y) {
        let oldY = this.y;
        let diffY = y - oldY;
        super.y = y;
        this.shape.forEach(shape => {
            shape.y += diffY;
        })
    }

    get width() {
        return super.width;
    }

    set width(width) {
        let oldwidth = this.width;
        let diffwidth = width - oldwidth;
        let percentage = width / oldwidth;
        super.width = width;
        this.shape.forEach(shape => {
            shape.width = width * shape.relativeWidth;

            //for each point, get that point's position relative to the origin
            //if the point shares an x with the origin, then its x should not change
            //otherwise, the point's x should be changing in exactly the same way that the center and other points change

            //starting with the x.
            
            
            console.log(this.x, shape.x, this.width, width, diffwidth, shape.relativeX)
            shape.x = shape.x + (diffwidth * shape.relativeX);
        })
    }

    get height() {
        return super.height;
    }

    set height(height) {
        let oldheight = this.height;
        let diffheight = height - oldheight;
        let percentage = height / oldheight;
        super.height = height;
        this.shape.forEach(shape => {
            shape.height = height * shape.relativeHeight;
            shape.y = shape.y + (diffheight * shape.relativeY);
        })
    }


    get angle() {
        return super.angle;
    }

    set angle(angle) {
        let oldAngle = this.angle;
        let diffAngle = angle - this.angle;
        super.angle = angle;
        this.shape && this.shape.length && this.shape.forEach(shape => {
            shape.angle += diffAngle;
        })
    }

    //merge all SAT objects into a single array.
    createSATObject() {
        let response = [];
        this.shape.forEach(shape => {
            response = response.concat(shape.createSATObject());
        });
        return response;
    }

}

export { ComplexShape }