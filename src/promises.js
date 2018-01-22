//promises

const promise = new Promise((resolve, reject) => {
  //throw new Error('Alarm');

  setTimeout(() => {
    if (true) {
      resolve('hello world');
    } else {
      reject();
    }
  }, 2000);
});

// promise.then(
//   data => console.log('success: ', data),
//   error => console.log('error: ', error)
// );
  // .then(
  //   data => console.log('success2: ', data),
  //   error => console.log('error: ', error)
  // )
  //.catch(error => console.log('error: ', error));