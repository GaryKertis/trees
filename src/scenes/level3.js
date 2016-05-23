import { engine } from '../engine/engine.js';

let shapes = engine.shapesRegistry;

function level3() {
    let width = engine.canvas.width;
    let height = engine.canvas.height;
    let x = 0;
    let y = 0;
    let box = new engine.complex.Box(x, y, width, height, 0);
    box.radius = width;
    box.color = "black";

    engine.patterns.randomSpotsOnCircle(box).forEach(spot => {
        spot.color = "black";
        spot.collidable = false;
        box.addShape(spot);
    });
    let i = 0;
    engine.patterns.polkaDots(box, engine.simples.Circle, 100, 1, 5, "white");
    shapes.add(box);
}

export { level3 };
