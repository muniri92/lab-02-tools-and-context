'use strict';

const
  expect = require('expect'),
  fp = require('../lib/fp.js');

let MAP_TEST = { original: [1, 2, 3, 4, 5], result: [2, 4, 6, 8, 10] };

describe('fp call methods', () => {

  describe('test map using call', () => {
    it('should return all idx * 2', () => {
      let results = fp.mapCall([1, 2, 3, 4, 5], n => n * 2);
      expect(results).toEqual([2, 4, 6, 8, 10]);
    });
  });

  describe('test map using apply', () => {
    it('should return all idx * 2', () => {
      let results = fp.mapApply(MAP_TEST.original, [n => n * 2]);
      expect(results).toEqual(MAP_TEST.result);
    });
  });

describe('fp filter methods', () => {

  describe('test filter using call', () => {
    it('should return all idx * 2', () => {
      let results = fp.map(MAP_TEST.original, [n => n * 2]);
      expect(results).toEqual(MAP_TEST.result);
    });
  });

	describe('test map using apply', () => {
    it('should return all idx * 2', () => {
      let results = fp.mapApply(MAP_TEST.original, [n => n * 2]);
      expect(results).toEqual(MAP_TEST.result);
    });

});
