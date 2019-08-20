//const app = require('../src/app');
import {app} from "../src/app";
import chai from 'chai';

const expect = chai.expect;

describe("app", () => {
    it("should return app", () => {
        expect(app()).to.equal('app')
    });
});