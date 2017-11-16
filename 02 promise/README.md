# Promise fundamentals using TypeScript
> Learn the fundamentals of creating, resolving and rejecting promises using TypeScript. We also cover the fundamentals of a *then chain*.

***Have the demo window open***

At the heart of async/await is a Promise chain. To create a promise chain we need to start off by creating a Promise.

* The promise constructor takes one generic type for its resolved value. Lets use the `number` type for now.
* The constructor takes an *executor* callback which will be called by the runtime with two arguments.
* The first argument is a resolve function that can be used to resolve the promise.
* The second argument is a reject function that can be used to reject the promise.
```js
const example = new Promise<number>((resolve, reject) => {
  // Use resolve or reject to determine the fate of the promise
});

```
* There are two fates of a promise, resolved or rejected.
* Promises have two member function's `.then` and `.catch` that are invoked depending upon the fate of the promise.
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
***Select the new Error***
A promise rejection should only be done in exceptional circumstances, and just like it is bad practice to throw a raw string, it is bad practice to reject a promise with a raw string. Always use the error constructor `new Error` when rejecting a promise.

***Delete all the code***
Alright, now that we understand the fundamentals of promise creation and its resolved/rejected fate, lets look into the concept of a promise *chain*.

* The `then` function creates a new promise.
* This new promise is distinct from the original promise
* We can verify that by simply comparing it to the original promise.
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

* This second promise is entitled to its own then and catch callbacks if you want.
```js
second.then(value => {
  console.log('second then', value);
});
second.catch(error => {
  console.log('second catch', error);
});
```

***Select the body of first then***
If the original first promise resolves, the fate of this second promise is determined by the body of the `then` callback.

* If you return a value from the callback, that becomes the resolved value of the second promise
```js
      // Control the fate of second
      return 456;
```
* Ofcourse if you don't return a value, JavaScript implicitly returns `undefined` and that becomes the resolved value.
```js
      // Control the fate of second

```
If you return a promise from this callback, the resolution of this second promise is determined by the fate of this promise.

* If the promise resolved, its resolved value is also resolved value the second promise

```js
      // Control the fate of second
      return new Promise((res) => res(789));
```
* And if that return promise is rejected, then the second promise is also rejected.

```js
      // Control the fate of second
      return new Promise((res, rej) => rej(new Error('example')));
```
Any runtime exceptions in the then callback also result in a rejection of the promise.

* A quick example would to be to explicitly  *throw* an error.
```js
      // Control the fate of second
      throw new Error('example');
```
* Another possibility of a runtime exception is programming errors, like using an undeclared variable.

```js
      // Control the fate of second
      foo.bar;
```

***Delete everything***
One very useful and fundamental behavior of promises is how rejection is propagated.

Lets say we have a chain of promises with a few `then`'s followed by a `catch`

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

Of course if there is no error in the preceding chain, the catch handler is never called.

There is more to promises, but the understanding of these then chains and catch cascading is sufficient for using async / await.

> NOTE: there is more to promises, but this is more that enough to cover async await.
