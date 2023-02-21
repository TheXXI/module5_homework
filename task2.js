/* 
    2е задание 
*/

const x = [];

switch (typeof(x)) {
    case "number":
        console.log('x - число');
        break;
    case "string":
        console.log('x - строка');
        break;
    case "boolean":
        console.log('x - логическая переменная');
        break;
    default:
        console.log('Тип x не определён');
}