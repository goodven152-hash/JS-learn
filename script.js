


// function Calculator(){
//     this.read = function() {
//         alert("Введите два числа для сложения")
//         this.num1 = prompt("Введите первое число", 0);
//         this.num2 = prompt("Введите второе число", 0);
//     };
//     this.sum = function() {
//         return this.num1 + this.num2;
//     };
// }

// let calculator = new Calculator();
// // calculator.read();

// alert("Сумма чисел " + calculator.num1 + " и " + calculator.num2 + " равна " + calculator.sum());


let button = document.querySelector('button');
button.onclick = function() {
  console.log('Кнопка нажата!');
};