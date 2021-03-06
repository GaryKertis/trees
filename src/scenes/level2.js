import { engine } from '../engine/engine.js';

let shapes = engine.shapesRegistry;

function createBubble() {
    let size = trees.random(10, 30);
    let thickness = trees.random(1, 6);
    let times = trees.random(-1,1);
    let box = new engine.complex.Arch(trees.random(1, shapes.staticBackgroundCanvas.width), -size, size, size/2, thickness);
    box.rotate(trees.random(0,360), box.center);
    box.color = trees.randomColor();
    box.ySpeed = size / 10;
    box.callback = function() {
        this.y += this.ySpeed;
        this.rotate(this.ySpeed * times, this.center);
    }
    box.collidable = false;
    shapes.addToDynamicBackground(box);
}

function level2() {
    engine.timer = setInterval(createBubble, 100)
}

export { level2 };
