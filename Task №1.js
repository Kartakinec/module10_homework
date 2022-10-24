let value = prompt('Введите значение')
let value2 = +value;
if (value2 % 2 === 0) {
    console.log("Число четное")
}
else if (value2 % 2 === 1) {
    console.log("Число нечетное")
}
else {
    console.log("Упс, кажется, вы ошиблись")
}