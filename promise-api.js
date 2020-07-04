// Settled Promises for uni testing

// const p = Promise.resolve({ id: 1 });
// const p = Promise.reject(new Error('Failed'));
// p.then((result) => console.log(result)).catch((err) =>
//   console.log('Error', err)
// );

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Async Op1...');
    resolve(1);
    // reject(new Error('Failed'));
  }, 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Async Op2...');
    resolve(2);
  }, 2000);
});

// Promise.all([p1, p2])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err.message));

Promise.race([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));
