//стрелочные функции

var getTrack = (...args) => {
  //console.log(args);
  return args[0] + ' ' + args[1];
}

//console.log(getTrack("Artist", "Track"));

function API() {
  this.url = 'http://google.com';
}

API.prototype.get = function() {
  return [1,2,3].map(number => {
    //console.log('this', this);
    return number;
  })
}

var api = new API();
api.get();

//у стрелочных функций нет контекста


//const

const PI = 3.14;
//PI = 9.8;

const URLS = {
  google: 'http://google.com',
}

URLS.google = 'http://youtube.com';
//console.log(URLS.google);

//как и let описывается только внутри скобок
//свойства объекта const можно перезаписывать
//имена переменных пишутся с большой буквы
//const обычно не переопределяется

