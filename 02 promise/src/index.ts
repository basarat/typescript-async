const example = new Promise<number>((resolve, reject) => {
  // Use resolve or reject to determine the fate of the promise
});

example.then(value => {
  console.log(value);
});

example.catch(error => {
  console.log(error);
});
