import test from 'ava';
import isEqual from '../src/blog-1/isEqual';
test('trueEqualTest', t => {
    let a = {
        a: 1,
        b: {
            c: 2,
            d: NaN
        },
        e: [
            3,
            4,
            {
                f: 5
            }
        ],
        g: {
            h: {
                i: 6
            }
        }
    };
    let b = {
        a: 1,
        b: {
            c: 2,
            d: NaN
        },
        e: [
            3,
            4,
            {
                f: 5
            }
        ],
        g: {
            h: {
                i: 6
            }
        }
    };
    let result = isEqual(a, b);
    t.deepEqual(result,true);
});

test('nullTest', t => {
    let a = null;
    let b = null; 
    let result = isEqual(a, b);
    t.deepEqual(result,true);
});

test('nullTest2', t => {
    let a = {
        a: -0,
        c: null
    };
    let b = {
        a: +0,
        c: null
    }; 
    let result = isEqual(a, b);
    t.deepEqual(result,false);
});

test('nullTest3', t => {
    let a = {
        a: 0,
        c: null
    };
    let b = {
        a: 0,
        c: null
    }; 
    let result = isEqual(a, b);
    t.deepEqual(result,true);
});
test('undefinedTest', t => {
    let a = {
        a: 0,
        c: null,
        e: 1
    };
    let b = {
        a: 0,
        c: null
    }; 
    let result = isEqual(a, b);
    t.deepEqual(result,false);
});