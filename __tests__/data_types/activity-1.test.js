/**
 * Test file for data_types/activity-1.js
 * 
 * Tests student implementations for Activity 1: Primitive Data Types
 */

const path = require('path');

describe('Activity 1: Primitive Data Types', () => {
  let activity;
  
  beforeEach(() => {
    // Clear cache and reload the activity file
    delete require.cache[require.resolve(path.join(__dirname, '../../data_types/activity-1.js'))];
    try {
      activity = require(path.join(__dirname, '../../data_types/activity-1.js'));
    } catch (error) {
      activity = {};
    }
  });
  
  describe('Problem 1: numberInfo function', () => {
    test('numberInfo function exists', () => {
      expect(typeof activity.numberInfo).toBe('function');
    });
    
    test('numberInfo returns correct info for positive integer', () => {
      if (typeof activity.numberInfo === 'function') {
        const result = activity.numberInfo(42);
        expect(result).toHaveProperty('type');
        expect(result).toHaveProperty('isInteger');
        expect(result).toHaveProperty('isPositive');
        expect(result).toHaveProperty('isFinite');
        expect(result).toHaveProperty('value');
        expect(result.type).toBe('number');
        expect(result.isInteger).toBe(true);
        expect(result.isPositive).toBe(true);
        expect(result.isFinite).toBe(true);
        expect(result.value).toBe(42);
      } else {
        throw new Error('numberInfo function not implemented');
      }
    });
    
    test('numberInfo handles negative numbers', () => {
      if (typeof activity.numberInfo === 'function') {
        const result = activity.numberInfo(-5);
        expect(result.isPositive).toBe(false);
        expect(result.value).toBe(-5);
      } else {
        throw new Error('numberInfo function not implemented');
      }
    });
    
    test('numberInfo handles NaN', () => {
      if (typeof activity.numberInfo === 'function') {
        const result = activity.numberInfo(NaN);
        expect(result.type).toBe('number');
        expect(result.isFinite).toBe(false);
      } else {
        throw new Error('numberInfo function not implemented');
      }
    });
    
    test('numberInfo handles Infinity', () => {
      if (typeof activity.numberInfo === 'function') {
        const result = activity.numberInfo(Infinity);
        expect(result.type).toBe('number');
        expect(result.isFinite).toBe(false);
      } else {
        throw new Error('numberInfo function not implemented');
      }
    });
  });
  
  describe('Problem 2: stringAnalyzer function', () => {
    test('stringAnalyzer function exists', () => {
      expect(typeof activity.stringAnalyzer).toBe('function');
    });
    
    test('stringAnalyzer returns correct info for non-empty string', () => {
      if (typeof activity.stringAnalyzer === 'function') {
        const result = activity.stringAnalyzer('Hello');
        expect(result).toHaveProperty('length');
        expect(result).toHaveProperty('firstChar');
        expect(result).toHaveProperty('lastChar');
        expect(result).toHaveProperty('isEmpty');
        expect(result).toHaveProperty('type');
        expect(result.length).toBe(5);
        expect(result.firstChar).toBe('H');
        expect(result.lastChar).toBe('o');
        expect(result.isEmpty).toBe(false);
        expect(result.type).toBe('string');
      } else {
        throw new Error('stringAnalyzer function not implemented');
      }
    });
    
    test('stringAnalyzer handles empty string', () => {
      if (typeof activity.stringAnalyzer === 'function') {
        const result = activity.stringAnalyzer('');
        expect(result.isEmpty).toBe(true);
        expect(result.length).toBe(0);
      } else {
        throw new Error('stringAnalyzer function not implemented');
      }
    });
  });
  
  describe('Problem 3: isTruthy function', () => {
    test('isTruthy function exists', () => {
      expect(typeof activity.isTruthy).toBe('function');
    });
    
    test('isTruthy correctly identifies truthy values', () => {
      if (typeof activity.isTruthy === 'function') {
        expect(activity.isTruthy(1)).toBe(true);
        expect(activity.isTruthy('hello')).toBe(true);
        expect(activity.isTruthy(true)).toBe(true);
        expect(activity.isTruthy([])).toBe(true);
        expect(activity.isTruthy({})).toBe(true);
      } else {
        throw new Error('isTruthy function not implemented');
      }
    });
    
    test('isTruthy correctly identifies falsy values', () => {
      if (typeof activity.isTruthy === 'function') {
        expect(activity.isTruthy(0)).toBe(false);
        expect(activity.isTruthy('')).toBe(false);
        expect(activity.isTruthy(false)).toBe(false);
        expect(activity.isTruthy(null)).toBe(false);
        expect(activity.isTruthy(undefined)).toBe(false);
      } else {
        throw new Error('isTruthy function not implemented');
      }
    });
  });
});

