/**
 * 
 * @param {*} obj 
 * @returns 类型值
 */
export const type = function type(obj) {
    return /^\[object (\w+)\]$/gi.exec(Object.prototype.toString.call(obj))[1];
}
export const isArray = function isArray(obj) {
    return type(obj) === 'Array';
}
export const isObject = function isObject(obj) {
    return type(obj) === 'Object';
}
export const isFunction = function isFunction(obj) {
    return type(obj) === 'Function';
}
export const isUndefined = function isUndefined(obj) {
    return type(obj) === 'Undefined';
}
export const isNull = function isNull(obj) {
    return type(obj) === 'Null';
}
export const isString = function isString(obj) {
    return type(obj) === 'String';
}
export const isNumber = function isNumber(obj) {
    return type(obj) === 'Number';
}
export const isBoolean = function isBoolean(obj) {
    return type(obj) === 'Boolean';
}
export const isSymbol = function isSymbol(obj) {
    return type(obj) === 'Symbol';
}
export const isPrimitive = function isPrimitive(obj) {
    return isBoolean(obj) || isSymbol(obj) || isNumber(obj) || isString(obj) || isNull(obj) || isUndefined(obj);
}
export default {
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
}