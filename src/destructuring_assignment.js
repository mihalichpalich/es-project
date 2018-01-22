//деструктуризация

function generateObj() {
  return {
    width: 100,
    height: 200,
  }
}

var {width: containerWidth, height: containerHeight} = generateObj();

// var {width, height} = {
//   width: 100,
//   height: 200,
// };

var obj = {
  id: '123',
  attributes: {
  }
}

var {id, attributes: {width = 50, height = 60}} = obj;

//console.log(width, height);

var [first, , , , fifth] = ['red', 'yellow', 'green', 'blue', 'orange'];

//console.log(first, fifth);

function getSizes({width = 50, height = 60}) {
  //console.log(width, height);
}

getSizes({

});

//ключ объекта и сам объект можно сделать локальной переменной
//можно переопределять значения свойств объекта, если они не заданы по умолчанию
//также деструктуризацию можно применять и к массивам и функциям
//если доступ нужен к определенным значениям, остальные можно не указывать