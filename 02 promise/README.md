# Promise fundamentals using TypeScript
> Learn the fundamentals of creating, annotating, resolving, rejecting promises using TypeScript. We also cover the fundamentals of a *then chain*

***Have the demo window open***

At the heart of async/await is a Promise chain. To create a promise chain we need to start off by creating a Promise. 

* The promise constructor takes one generic type for its resolved value. Lets use the `number` type for now.
* The contructor takes an *executor* callback which will be called by the runtime with two arguments.
* The first argument is a resolve function that can be used to resolve the promise. 
* The second argument is a reject function that can be used to reject the promise.
* These functions are essentially used to control the fate of the promise. 
```js
const example = new Promise<number>((resolve, reject) => {
  // Use resolve or reject to determine the fate of the promise
});
```
Promises have two function's `.then` and `.catch` that are invoked depending upon the fate of the promise. 
```js
example.then(value => {
  console.log('then', value);
});

example.catch(error => {
  console.log('catch', error);
});
```
* If we `resolve` the promise, any `then` callbacks are executed. 
```js
  resolve(123);
```
* If we `reject` the promise, any `catch` callbacks are executed.
```js
  reject(new Error('failed'));
  // throw 'message' => bad 
  // throw new Error('message');  => good
```
A promise rejection should only be done in exceptional circumstances, and just like it is bad practice to throw a raw string, it is bad practice to reject a promise with a raw string. Always use the error constructor `new Error`. 

Alright, now that we understand the fundamentals of promise creation and its fate, lets look into the concept of a promise *chain*.

