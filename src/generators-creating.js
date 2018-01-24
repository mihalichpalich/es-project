function* generator() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch(e) {
    console.log(e);
  }

}

let iterator = generator();
console.log(iterator.next());
console.log(iterator.throw(new Error('Error')));
console.log(iterator.next());