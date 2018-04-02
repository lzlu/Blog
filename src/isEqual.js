//对比两个对象是否相等
import { isPrimitive, isArray, isObject, type, isUndefined } from './Type';
const eq = (target, source) => {
    if (isPrimitive(target)) {
        if (Object.is(target, source)) return true;
        else return false;
    } 
    return deepEq(target, source);
};
const deepEq = (target, source) => {
    if (type(target) !== type(source)) return false;
    if (isArray(target)) {
        if (target.length !== source.length) return false;
        let len = target.length;
        while(len --){
            if(!eq(target[len], source[len])) return false;
        }
    }
    if (isObject(target)) {
        let keys = Object.keys(target),
            len = keys.length;
        while (len--) {
            let key = keys[len];
            if (isUndefined(source[key])) return false;
            if (!eq(target[key], source[key])) return false;
        }
    }
    return true;
};
function isEqual(target, source) {
    return eq(target, source);
}
export default isEqual;
