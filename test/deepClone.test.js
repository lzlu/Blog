import test from 'ava';
import deepClone from '../src/blog-3/deepClone';
test('baseTest', t => {
    let target = 'ava';
    let result = deepClone(target);
    t.deepEqual(result,target);
});

test('deepArrayTest', t => {
    let target = {
        key1: [1,2,3,4],
        key2: {
            key3: {
                a: 2
            }
        },
        key4: 'string',
        key5: {
            key6:'shouldRemove'
        }
    }
    let result = deepClone(target);

    t.deepEqual(result, target);
    t.notDeepEqual(result['key1']===target['key1'], false);
})