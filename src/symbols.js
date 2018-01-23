// let symbol = Symbol.for('name');
// let name = Symbol.keyFor(symbol);

// console.log(name);

let password = Symbol();

let user = {
  username: 'r2d2',
  [password]: 'c3po',
  password: 'dzfdfhj'
};

// console.log(user.password, Object.keys(user), Object.getOwnPropertyNames(user));

// let password = user[Symbol.for('password')];
// console.log(password);
// console.log(Object.getOwnPropertySymbols(user));

let object = {
  iterator: 0,
  [Symbol.iterator]() {}
};

