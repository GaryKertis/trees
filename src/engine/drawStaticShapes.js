import { ShapesRegistry } from './shapesregistry.js';

let shapesRegistry = new ShapesRegistry();

function drawStaticShapes() {

    requestAnimationFrame(() => {
        if (shapesRegistry.length) {
            if (!shapesRegistry.blur) {
                shapesRegistry.staticBackgroundCanvas.ctx.clearRect(0, 0, shapesRegistry.staticBackgroundCanvas.width, shapesRegistry.staticBackgroundCanvas.height);
                shapesRegistry.staticForegroundCanvas.ctx.clearRect(0, 0, shapesRegistry.staticForegroundCanvas.width, shapesRegistry.staticForegroundCanvas.height);
            }

            shapesRegistry.staticShapes.forEach(shape => {
                if (shape.visible) shape.draw();
            });

        }
    });


}

export { drawStaticShapes }