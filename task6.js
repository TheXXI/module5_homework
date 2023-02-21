/* 
    6е задание 
*/

const arr = [10,10,10];
const firstItem = arr[0];
let check = true;
arr.forEach(item => {
    if (item != firstItem) check = false
});
console.log(check);