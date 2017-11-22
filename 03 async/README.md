# Async functions and the await operator
> This lesson covers the fundamentals of annotating a function as async. An async function gets the chance to use the `await` keyword. This lesson covers the usages of these keywords.

***Have a demo window open***
async / await should really be thought as a better way to use Promises reliably and safely with less chances of programming errors.

* To make a function `async` all you need to do is prefix it with the async keyword.
* You can just as easily make async arrow functions, and async class methods.

```js
async function foo() {
}

const bar = async () => {
}

class Baz {
  async qux() {
  }
}

```
Lets discuss the nature of `async` functions in isolation by focusing in on a simple function.
***Delete the extra functions***

An async function *always* returns a promise.

```js
async function foo() {
}

console.log(foo());
```
***Show the output of the demo***

* The promise resolves to the value that is returned by the function.
* Here the function returns the implicit return of all JavaScript functions *undefined*.
```js
async function foo() {
}

foo().then(value => {
  console.log(value);
});

```
***Show the output of the demo***

* If we return a value, the promise will resolve to that value.
```js
async function foo() {
  return 123;
}

foo().then(value => {
  console.log(value);
});

```
***Show the output of the demo***

Of course in most cases TypeScript is smart enough to infer this for you.
***Show the return type information***

***delete the whole code***
With the return value of async functions out of the way lets focus in on the body of an async function.

* To kick off lets create a few promises to use as examples.
* We setup nodejs to ignore any unhandled rejections for now.
* We create a variable that is not a promise.
* We create a promise that will resolve,
* We also create a promise that will reject.


```js
process.on('unhandledRejection', () => null);

const notAPromise =
  456;
const promiseThatWillResolve =
  new Promise(res => res(123));
const promiseThatWillReject =
  new Promise((res, rej) => rej(new Error('Hello')));

```

async function get access to the `await` operator in their function bodies. The await operator can be applied to any variable.
* If the variable is not a promise the value returned from the await operator is same as the variable.
* If the variable is a promise execution in the function body pauses, till the fate of the promise is

the behavior will be different depending on the fate of the promise,
  * If the promise resolves, the value the await operator is the resolved value of the promise.
* If the variable is a promise that gets rejected, the await operator throws an error in the body of the async function which we can catch with the standard synchronous `try` / `catch` constructs.

```js
async function foo() {
  const res1 = await notAPromise;
  console.log({ forNotAPromise: res1 });
  const res2 = await promiseThatWillResolve;
  console.log({ forPromiseThatWillResolve: res2 });
  try {
    const res3 = await promiseThatWillReject;
    console.log('I will never get called as error is thrown in previous line');
  }
  catch (e) {
    console.log({ forPromiseThatWillReject: e.message });
  }
}

foo();
```
***run the code***
* Not lets call this function and verify its execution. As you can see it works as expected
* giving us the value for not a promise,
* the resolved value for a promise that will resolve
* and a try / catch error for promise that will reject.

Of course if a promise takes some time to settle in its fate, the execution at the await operator pauses till the fate is determined.
* Here we are going to wait for 5 seconds before determining the fate of a local promise.

```js
async function foo() {
  const res1 = await notAPromise;
  console.log({ forNotAPromise: res1 });
  const res2 = await promiseThatWillResolve;
  console.log({ forPromiseThatWillResolve: res2 });
  try {
    const res3 = await promiseThatWillReject;
    console.log('I will never get called as error is thrown in previous line');
  }
  catch (e) {
    console.log({ forPromiseThatWillReject: e.message });
  }
  console.log('Waiting 5 seconds');
  await new Promise(res => setTimeout(res, 5000));
  console.log('Done waiting!');
}

foo();
```

***Select the whole async function***
Essentially, an async function allows your to write asynchronous code based on promises in a very synchronous manner.
