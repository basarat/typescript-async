const first = new Promise<number>((resolve, reject) => {
  resolve(123);
})
const second =
  first
    .then(value => {
      // Control the fate of second 
      return new Promise(res => res(789));
    });

second.then(value => {
  console.log('second then', value);
});
second.catch(error => {
  console.log('second catch', error);
});