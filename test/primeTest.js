const chai = require('chai');
const assert = require('chai').assert;
const expect = require('chai').expect;
const myApp = require('../src/prime.js');

describe('Rain Drops', function() {
    describe("Pling", () => {
        it("Should return Pling", () => {
            expect(myApp.rainDrops(9)).to.be.equal("pling");
        });
        it("Should return Pling", () => {
            expect(myApp.rainDrops(3)).to.be.equal("pling");
        });
        it("Should return Pling", () => {
            expect(myApp.rainDrops(18)).to.be.equal("pling");
        });
        it("Should return Pling", () => {
            expect(myApp.rainDrops(12)).to.be.equal("pling");
        });
        it("Should return Pling", () => {
            expect(myApp.rainDrops(24)).to.be.equal("pling");
        });
        it("Should return Pling", () => {
            expect(myApp.rainDrops(6)).to.be.equal("pling");
        });
    });
    describe("Plang", () => {
        it("Should return Plang", () => {
            expect(myApp.rainDrops(5)).to.be.equal("plang");
        });
        it("Should return Plang", () => {
            expect(myApp.rainDrops(20)).to.be.equal("plang");
        });
        it("Should return Plang", () => {
            expect(myApp.rainDrops(25)).to.be.equal("plang");
        });
        it("Should return Plang", () => {
            expect(myApp.rainDrops(40)).to.be.equal("plang");
        });
        it("Should return Plang", () => {
            expect(myApp.rainDrops(95)).to.be.equal("plang");
        });
    });
    describe("Plong", () => {
        it("Should return Plong", () => {
            expect(myApp.rainDrops(7)).to.be.equal("plong");
        });
        it('Should return Plong', () => {
            expect(myApp.rainDrops(49)).to.be.equal('plong');
        });
    });
    describe("PlingPlang", () => {
        it("Should return PlingPlang", () => {
            expect(myApp.rainDrops(15)).to.be.equal('plingplang');
        });
        it("Should return PlingPlang", () => {
            expect(myApp.rainDrops(45)).to.be.equal('plingplang');
        });
    });
    describe("PlingPlong", () => {
        it("Should return PlingPlong", () => {
            expect(myApp.rainDrops(21)).to.be.equal('plingplong');
        });
        it("Should return PlingPlong", () => {
            expect(myApp.rainDrops(63)).to.be.equal('plingplong');
        });
    });
    describe("PlangPlong", () => {
        it("Should return PlangPlong", () => {
            expect(myApp.rainDrops(35)).to.be.equal('plangplong');
        });
        it("Should return PlangPlong", () => {
            expect(myApp.rainDrops(245)).to.be.equal('plangplong');
        });
    });
    describe("PlingPlangPlong", () => {
        it("Should return PlingPlangPlong", () => {
            expect(myApp.rainDrops(105)).to.be.equal('plingplangplong');
        });
    });
});
