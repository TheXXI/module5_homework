/* 
    8е задание 
*/

let map = new Map();
map.set('first',1);
map.set(2, 'number');
map.set(true, 'boolean');

for (let key of map.keys()) {
    console.log(`Ключ — ${key}, значение — ${map.get(key)}`);
}