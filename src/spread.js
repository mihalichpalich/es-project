//spread

// const getText = (a,...args) => {
//   //console.log(a, args);
// }

//getText('a', 'b', 'c');

const arr1 = [1,2,3];
const arr2 = [4,5,6];

arr1.push(...arr2);
//console.log(arr1);

const args = ['a', 'b', 'c'];

const getText = (a, b, c) => {
  //console.log(a, b, c);
}

getText(...args);

//args - оператор spread, массив аргументов функции или значений массива
//spread в функциях удобен когда количество аргументов неизвестно
//с помощью spread можно переносить значения из одного массива в другой
//а также передавать массив в качестве параметров