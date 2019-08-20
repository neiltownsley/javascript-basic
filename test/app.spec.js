import {app} from "../src/app";

const chai = require('chai');

const expect = chai.expect;

describe( "bla", () => {
   it("bla", () => {
       expect(app()).to.equal('bla')
   });
});