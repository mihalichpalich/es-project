//стрелочные функции

var getTrack = (...args) => {
  //console.log(args);
  return args[0] + ' ' + args[1];
}

//console.log(getTrack("Artist", "Track"));

// function API() {
//   this.url = 'http://google.com';
// }

// API.prototype.get = function() {
//   return [1,2,3].map(number => {
//     console.log('this', this);
//     return number;
//   })
// }

// var api = new API();
// api.get();

//у стрелочных функций нет контекста