import { isPrimitive, isArray, isObject, type, isUndefined } from '../helper/Type';
const deepClone = (target) => {
    //判断是否是原始类型
    if(isPrimitive(target)){
        return target;
    }else{
        if(isObject(target)){
            for (const key in target) {
                if (target.hasOwnProperty(key)) {
                    target[key] = deepClone(target[key]);
                }
            }
            return target;
        }
        if(isArray(target)){
            target.forEach((element,index) => {
                target[index] = deepClone(element);
            });
            return target;
        }
    }
};
export default deepClone;