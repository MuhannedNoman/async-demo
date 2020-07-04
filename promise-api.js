// Settled Promises for uni testing

// const p = Promise.resolve({ id: 1 });
const p = Promise.reject(new Error('Failed'));
p.then((result) => console.log(result)).catch((err) =>
  console.log('Error', err)
);
