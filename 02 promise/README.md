# Promise fundamentals using TypeScript
> Learn the fundamentals of creating, annotating, resolving, rejecting promises using TypeScript. We also cover the fundamentals of a *then chain*

At the heart of async/await is a Promise chain. To create a promise chain we need to start off by creating a Promise. 

* The promise constructor takes one generic type for its resolved value. Lets use the `number` type for now.
* The contructor takes an *executor* callback which will be called by the runtime with two arguments.
* The first argument is a resolve function that can be used to resolve the promise. 
* The second argument is a reject function that can be used to reject the promise.

```js
const example = new Promise<number>((resolve, reject) => {
  resolve(123);
});
```

* TODO:
Just like it is bad practice to throw a raw string, it is bad practice to reject a promise with a raw string. Always use the error constructor `new Error`
