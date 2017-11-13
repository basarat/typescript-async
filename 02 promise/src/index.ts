const first = new Promise<number>((resolve, reject) => {
  reject(123);
})
const second =
  first
    .then(value => {
      // Control the fate of second 
      
    })
    .catch(error => {
      console.log('here')
    });

second.then(value => {
  console.log('second then', value);
});
second.catch(error => {
  console.log('second catch', error);
});