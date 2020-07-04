console.log(`Before`);

// Example of a none-blocking-function
setTimeout(() => {
  console.log(`Reading user from DB...`);
}, 2000);

console.log(`After`);
