import test from 'ava';
import {
    type,
    isBoolean,
    isNumber,
    isString,
    isSymbol,
    isNull,
    isUndefined,
    isArray,
    isObject,
    isFunction,
    isPrimitive
} from '../src/Type';
const fn = ()=>{
    return 123;  
  };
test('testBoolean', t => {
   t.deepEqual(isBoolean(false), true);
   t.deepEqual(isBoolean(true), true);
   t.deepEqual(isBoolean(1), false);
});

test('testNumber', t => {
   t.deepEqual(isNumber(1), true); 
   t.deepEqual(isNumber(NaN), true);
   t.deepEqual(isNumber('1'), false);
   t.deepEqual(isNumber({}), false);
});

test('testString', t => {
    t.deepEqual(isString(1), false); 
    t.deepEqual(isString(NaN), false);
    t.deepEqual(isString('string'), true);
    t.deepEqual(isString({}), false);
 });
 
 test('testSymbol', t => {
    t.deepEqual(isSymbol(Symbol()), true); 
    t.deepEqual(isSymbol({}), false);
 });
 
 test('testNull', t => {
    t.deepEqual(isNull(null), true); 
    t.deepEqual(isNull(undefined),false);
 });
 
test('testUndefined', t => {
    t.deepEqual(isUndefined(null), false); 
    t.deepEqual(isUndefined(undefined),true);
 });
 
 test('testArray', t => {
    t.deepEqual(isArray([null]), true); 
    t.deepEqual(isArray(1024),false);
 });
 
 
 test('testObject', t => {
    t.deepEqual(isObject({}), true); 
    t.deepEqual(isObject([]), false); 
    t.deepEqual(isObject(1024),false);
 });
 
 test('testFunction', t => {
    t.deepEqual(isFunction(fn), true); 
    t.deepEqual(isFunction([]), false); 
    t.deepEqual(isFunction(1024),false);
 });
 
 test('testPrimitive', t => {
     t.deepEqual(isPrimitive(1), true);
     t.deepEqual(isPrimitive(NaN), true);
     t.deepEqual(isPrimitive(null), true);
     t.deepEqual(isPrimitive(undefined), true);
     t.deepEqual(isPrimitive('1'), true);
     t.deepEqual(isPrimitive(false), true);
     t.deepEqual(isPrimitive(Symbol()), true);
     t.deepEqual(isPrimitive({}), false);
     t.deepEqual(isPrimitive([]), false);
     t.deepEqual(isPrimitive(fn), false);
 });