import { ComplexShape } from './complexShape.js';
import { Liquid } from './liquid.js';
import { Stream } from './stream.js';
import { Container } from './container.js';

class ContainerComposite extends ComplexShape {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.type = "ContainerComposite";
        this._liquidColor = "transparent";
        this._containers = [];
        this._liquids = [];
        this._liquidLevel = y;
        this._empty = false;
        this._full = true;
    }

    get liquidColor() {
        return this._liquidColor;
    }

    set liquidColor(liquidColor) {
        this._liquidColor = liquidColor;
        this.liquids.forEach(shape => {
            shape.color = liquidColor;
        });
    }

    get liquidLevel() {
        return this._liquidLevel;
    }

    set liquidLevel(liquidLevel) {
        this._liquidLevel = liquidLevel;

        this.empty = this.liquidLevel >= this.boundary.d.y;
        this.full = this.liquidLevel <= this.boundary.a.y;
        this.liquids.forEach(shape => {
            shape.liquidLevel = liquidLevel;
        });
    }

    get containers() {
        return this._containers;
    }

    get liquids() {
        return this._liquids;
    }

    get pouringFromPoint() {
        let pouringFromPoint = null;
        this.liquids.forEach(liquid => {
            pouringFromPoint = pouringFromPoint || liquid.pouringFromPoint;
        });
        return pouringFromPoint;
    }

    get pouring() {
        let result = false;
        this.containers.forEach(container => {
            result = result || container.pouring;
        });
        return result;
    }

    get full() {
        return this._full;
    }

    set full(full) {
        this._full = full;
    }

    get empty() {
        return this._empty;
    }

    set empty(empty) {
        this._empty = empty;
    }

    rotate(deg, transformOrigin) {
        super.rotate(deg, transformOrigin);
        this.liquids.forEach(liquid => {
            liquid.level();
        });
        if (this.pouring) {
            let start = this.pouringFromPoint;
            if (!this.stream) {
                this.stream = new Stream(start.x, start.y, window.innerHeight - start.y, 5);
                super.addShape(this.stream);
            }
            this.stream.startPour();
            let timer = setInterval(() => {
                if (this.pouring && !this.empty) {
                    this.stream.shape[0].bend(-.1)
                    this.stream.x = this.pouringFromPoint.x;
                    this.stream.y = this.pouringFromPoint.y;
                    this.drain(.1);
                } else {
                    this.stream.stopPour();
                    clearInterval(timer);
                }
            }, 10);

        } else {
            if (this.stream) {
                this.stream.stopPour();
            }
        }
    }

    addShape(shape) {

        let container = Container(shape);
        let liquid = new Liquid(container);

        liquid.color = this.liquidColor;
        liquid.liquidLevel = this.liquidLevel;

        super.addShape(container);
        super.addShape(liquid);

        this.containers.push(container);
        this.liquids.push(liquid);

    }

    drain(amount) {
        if (typeof amount !== 'number' || amount < 0) {
            throw new Error('Tried to use drain function with invalid amount.')
        }
        if (!this.empty) {
            this.liquidLevel += amount;
        }

        this.empty = this.liquidLevel >= this.boundary.d.y;
        this.full = this.liquidLevel <= this.boundary.a.y;

    }

    fill(amount) {
        if (typeof amount !== 'number' || amount < 0) {
            throw new Error('Tried to use drain function with invalid amount.')
        }
        if (!this.full) {
            this.liquidLevel -= amount;
        }

        this.empty = this.liquidLevel >= this.boundary.d.y;
        this.full = this.liquidLevel <= this.boundary.a.y;
    }

}

export { ContainerComposite }
