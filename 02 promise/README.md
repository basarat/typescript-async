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

***Delete all the code***
Alright, now that we understand the fundamentals of promise creation and its fate, lets look into the concept of a promise *chain*.

* The `then` function creates a new promise. 
* This new promise is distinct from the original promise
```js
const first = new Promise<number>((resolve, reject) => {
  resolve(123);
})
const second =
  first
    .then(value => {
      // Control the fate of second 
    });

console.log(first === second); // false
```

***Delete console.log(first === second); // false***
* The fate of this promise is determined by the body of the `then` callback.
```js
second.then(value => {
  console.log('second then', value);
});
second.catch(error => {
  console.log('second catch', error);
});
```
* If you return a value from the callback, that becomes the resolved value of the second promise
```js
      // Control the fate of second 
      return 456;
```
* Ofcourse if you don't return a value, JavaScript implicitly returns `undefined` and that becomes the resolved value. 
```js
      // Control the fate of second 
  
```
* If you return a promise, then the value becomes the resolved value of the second promise

```js
      // Control the fate of second 
      return new Promise((res) => res(789));
```
* And if that return promise is rejected, then the second promise is also rejected.

```js
      // Control the fate of second 
      return new Promise((res, rej) => rej(new Error('example')));
```

* If you *throw* an error, then the second promise is rejected.
```js
      // Control the fate of second 
      throw new Error('example');
```
* If the runtime throws an error, then again the second promise is rejected e.g. I'm going to use an undeclared variable.

```js
      // Control the fate of second 
      foo.bar;
```

***Delete everything***
One very useful and fundamental behavior of promises is how rejection is propogated. 

Lets say we have a chain of promises with a few `thens`'s followed by a `catch`

```js
new Promise<number>((res, rej) => {
  res(123);
})
  .then(res => {
    console.log(res);
    return 456;
  })
  .then(res => {
    console.log(res);
    return 789;
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log('ERROR:', err.message);
  });
```
***Run to show 123,456,789***
A promise rejection at any point in the chain will result in all subsequent `then` handlers to be skipped and execution will jump directly to the catch handler: 

***Run and show error on each step***
```js
new Promise<number>((res, rej) => {
  res(123);
})
  .then(res => {
    console.log(res);
    // foo.bar;
    return 456;
  })
  .then(res => {
    console.log(res);
    // foo.bar;
    return 789;
  })
  .then(res => {
    console.log(res);
    // foo.bar;
  })
  .catch(err => {
    console.log('ERROR:', err.message);
  });
```
