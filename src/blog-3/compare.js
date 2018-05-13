const _toString = Object.prototype.toString;
const eq = (target, source) => {
    if(typeof target !== typeof source){
        return false;   
    }
    if(typeof target === 'object' &&  typeof source === 'object' && target !==null && source !==null ){
        return deepEq(target, source);    
    }
    return Object.is(target,source);
}


const deepEq = (target, source) => {
    if(_toString.call(target) !== _toString.call(source) ){
        return false;
    }else{
        if(_toString.call(target) === "[object Array]"){
            if(target.length !== source.length){
                return false;
            }
            let len = target.length;
            while(len--){
                if(!eq(target[len], source[len])){
                    return false;
                }
            }
        }
        if(_toString.call(target) === "[object Object]"){
            if(Object.keys(target).length !== Object.keys(source).length){
                return false;
            }
            for(let key in target){
                if(!eq(target[key], source[key])){
                    return false;
                }
            }
        }
    }
    return true;
}




const compare = (target, source) => {
    return eq(target, source);
}

export default compare;