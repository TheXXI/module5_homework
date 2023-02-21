/* 
    1е задание 
*/


let getNum = prompt("Введите число:");
getNum = +getNum;
if (typeof(getNum) == 'number' && !isNaN(getNum)) {
    if (getNum % 2 == 0) {
        console.log('Чётное число');
    } else {
        console.log('Нечётное число');
    }
} else {
    console.log("Упс, кажется, вы ошиблись");
}