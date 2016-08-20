/**
 * A SMALL utilities library using Underscore-like functions.
 * @return {Object}
 */

let d;

function trees() {

    return {
        random: random,
        randomColor: randomColor,
        posNeg: posNeg,
        getRGB: getRGB,
        setOpacity: setOpacity,
        getCenterX: getCenterX,
        getBezierDistance: getBezierDistance,
        degToRad: degToRad
    }

    /**
     * Returns a random number between min and max, inclusive
     * @param  {Number} min
     * @param  {Number} max
     */
    function random(min, max) {
        if (max == null) {
            max = min;
            min = 0;
        }
        return min + Math.floor(Math.random() * (max - min + 1));
    };

    /**
     * Returns a random hex color
     * @return {String} 
     */
    function randomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    function posNeg() {
        if (random(0, 1) === 0) return -1;
        else return 1;
    }

    function getRGB(color) {
        d = document.createElement("div");
        d.style.color = color;
        document.body.appendChild(d)
        return window.getComputedStyle(d).color
    }

    function setOpacity(color, opacity) {
        let rgb = getRGB(color).replace("rgb", "rgba");
        return [rgb.slice(0, rgb.length - 1), ", " + opacity.toString(), rgb.slice(rgb.length - 1)].join("");
    }

    function getCenterX(inner, outer) {
        let outerCenter = outer.x + outer.width / 2;
        let innerOffset = inner / 2;
        let innerX = outerCenter - innerOffset;
        console.log(innerX);
        return innerX;
    }

    function getBezierDistance(n) {
        return (n / 2) * 0.552284749831;
    }

    function degToRad(deg) {
        return deg * (Math.PI / 180);
    }

}

export { trees };
