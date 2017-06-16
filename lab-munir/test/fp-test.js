'use strict';

const
  expect = require('expect'),
  fp = require('../lib/fp.js');


describe('fp call methods', () => {

  // TEST MAP
  describe('test map using call', () => {
    it('should return all idx * 2', () => {
      let results = fp.map([1, 2, 3, 4, 5], n => n * 2);
      expect(results).toEqual([2, 4, 6, 8, 10]);
    });
  });

  // TEST FILTER
  describe('test filter using call', () => {
    it('should return all idx * 2', () => {
      let results = fp.filter([1, 2, 3, 4, 5, 6], n => n % 2 === 0);
      expect(results).toEqual([2, 4, 6]);
    });
  });

  // TEST REDUCE
  describe('test reduce using call', () => {
    it('should return all idx * 2', () => {
      let results = fp.reduce([1, 2, 3, 4, 5], (a, c) => a + c);
      expect(results).toEqual(15);
    });
  });

  // TEST SPLICE
  describe('test splice using apply', () => {
    it('should return everything after the 4 index', () => {
      let results = fp.splice([1, 2, 3, 4, 5, 6, 7, 8, 9], [(4)]);
      expect(results).toEqual([5, 6, 7, 8, 9]);
    });
  });

  describe('test concat using apply', () => {
    it('should return two list combined', () => {
      let results = fp.concat([1, 2, 3], [4, 5, 6]);
      expect(results).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

});
