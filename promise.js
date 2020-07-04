const p = new Promise((resolve, reject) => {
  // Async work, Db connect for ex..
  // ....
  setTimeout(() => {
    // resolve(1); // pending => resolved
    reject(new Error('Failed')); // pending => rejected
  }, 2000);
});

p.then((result) => {
  console.log('Result', result);
}).catch((err) => {
  console.log('Error', err.message);
});
