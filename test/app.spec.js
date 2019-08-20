import {app} from "../src/app";

const chai = require('chai');

const expect = chai.expect;

describe( "app", () => {
   it("should return app", () => {
       expect(app()).to.equal('app')
   });
});