// function name() {
//   if (true) {
//     let a = 1;
//   }
//   let a = 2;
//   console.log(a); //2
// }

// name();

let fs = [];

for(let i=0; i<10; i++) {
  fs.push(function() {
    //console.log(i);
  })
}

fs[0](); //0
fs[3](); //3

//переменная let доступна только внутри блока с функциями
//переменная let не определяется повторно
