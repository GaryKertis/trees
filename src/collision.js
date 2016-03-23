class Collision {
    constructor(x, y, width, height) {
        this._resolved = true;
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
    }

    test(x, y, width, height) {
        if (x < this._x + this._width &&
            x + width > this._x &&
            y < this._y + this._height &&
            height + y > this._y) {
            this.resolved = false;
            return true;
        } else {
            return false;
        }
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    get x2() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get resolved() {
        return this._resolved;
    }

    set x(x) {
        this._x = x;
    }

    set y(y) {
        this._y = y;
    }

    set x2(x) {
        this._width = x;
    }

    set height(y) {
        this._height = y;
    }

    set resolved(resolved) {
        this._resolved = resolved;
    }
}

export { Collision }
