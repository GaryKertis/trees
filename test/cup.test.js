import { Cup } from '../src/engine/client/cup.js';

describe('Cup', () => {
    let cup;
    beforeEach(() => {
        cup = new Cup(100, 100, 100, 100, 80);
    });
    describe('interface', () => {
        it('should exist', () => {
            expect(Cup).to.exist;
        });
        it('should create a new object', () => {
            expect(cup).to.exist;
            expect(cup.type).to.equal("Cup");
        });
        it("should have a taper property", () => {
            expect(cup.taper).to.exist;
        });
        it("should add only two shapes", () => {
            expect(cup.shape).to.exist;
            expect(cup.shape.length).to.equal(2);
        });
        it("should have a lines function", () => {
            expect(cup.shape[0].lines).to.exist;
            expect(cup.shape[0].lines).to.be.a.function;
            expect(cup.shape[0].lines().length).to.equal(4);
        });
    });
});
