/**
 * A function to add random spots to an object
 * @param  {Sprite} container
 * @param  {Sprite} shape  
 * @param  {Number} density
 * @param  {Number} minSize
 * @param  {Number} maxSize
 * @param  {String} color  
 */
function polkaDots(container, shape, density, minSize, maxSize, color) {

    for (let i = 0; i < density; i++) {
        let randomPoint1 = trees.getPointOnLine(container.a, trees.random(0, container.width), trees.getAngle(container.a, container.b));
        let randomPoint2 = trees.getPointOnLine(randomPoint1, trees.random(0, container.height), trees.getAngle(container.a, container.d));
        let x = randomPoint2.x;
        let y = randomPoint2.y;
        let size = trees.random(minSize, maxSize);
        let dot = new shape(x, y, size, size);
        dot.color = color;
        container.addShape(dot);
    }

}

export { polkaDots };
