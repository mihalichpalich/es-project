//строки

//конкатенация
const name = 'Alex';
const hello = `Hello ${name}`;

//console.log(hello);

//запись html кода в строку
const html = `
  <div>
    <h1>${name}</h1>
  </div>
`;
//const message = `This equals to ${100/4}`;

//console.log(message);

const tag = (strings, ...values) => {
  //console.log(strings, values); //["Its ", " and Im ", "", raw: Array(3)] и [15, "sleepy"]
  if (values[0] < 20) {
    values[1] = 'awake';
  }

  return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
}

const message = tag`Its ${new Date().getHours()} and Im ${'sleepy'}`;

//console.log(message);