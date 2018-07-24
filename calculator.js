"use strict";

class Calculator {
  //write your code here
  constructor(num) {
    this.number = num || 1;
  }

  add(num) {
    this.number += num;
    return this;
  }

  substract(num) {
    this.number -= num;
    return this;
  }

  multiply(num) {
    this.number *= num;
    return this;
  }

  divide(num) {
    this.number /= num;
    return this;
  }

  square() {
    this.number *= this.number;
    return this;
  }

  toThePowerOf(n) {
    this.number = Math.pow(this.number, n);
    return this;
  }

  squareRoot() {
    this.number = Math.sqrt(this.number);
    return this;
  }

  nthRootOf(root) {
    this.number = Math.pow(this.number, 1 / root);
    return this;
  }

  pi() {
    this.number *= Math.PI;
    return this;
  }
}

module.exports = {
  Calculator
};
