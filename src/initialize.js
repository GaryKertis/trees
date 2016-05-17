import { engine } from './engine/engine.js';
import { scenes } from './scenes/scenes.js';

function load() {
    engine.levels.push(scenes.level0);
    engine.levels.push(scenes.level1);
    engine.levels.push(scenes.octopus);
    engine.levels.push(scenes.dot);
    scenes.level1();
}


function initialize() {
    engine.go(load);
}

export { initialize };
