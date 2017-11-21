# async and await keywords
> This lesson covers the fundamentals of annotating a function as async. An async function gets the chance to use the `await` keyword. This lesson covers the usages of these keywords.

***Have a demo window open***
async / await should really be though as a better way to use Promises reliably and safely with less chances of programming errors.

* To make a function `async` all you need to do is prefix it with the async keyword. 
* You can just as easily make async arrow functions, and async class methods.

```js
async function foo(){
}

const bar = async () => {
}

class Baz{
  async qux(){
  }
} 

```

***Delete the extra functions***
Lets focus in on a simple async function. An async function *always* returns a promise. 

```js
async function foo() {
}

console.log(foo());
```

* The promise resolves to the value that is returned by the function. 
* Here the function returns the implicit return of all JavaScript functions *undefined*.
```js
async function foo() {
}

foo().then(value => {
  console.log(value);
});

```
* If we return a value, the promise will resolve to that value. 
```js
async function foo() {
  return 123;
}

foo().then(value => {
  console.log(value);
});

```
***delete the whole code***
With the return value of async functions out of the way lets focus in on the body of an async function.

* To kick off lets create a few promises to use as examples. 
* We setup nodejs to ignore any unhandled rejections for now.
* We create a promise that will resolve, 
* A promise that will reject. 
* And something that is not a promise.

```js
process.on('unhandledRejection', () => null);

const notAPromise = 123;
const promiseThatWillResolve = new Promise(res => res(456));
const promiseThatWillReject = new Promise((res, rej) => rej(new Error('Hello')));
```

async function get access to the `await` operator in their function bodies. The await operator can be applied to any variable.
* If the variable is not a promise the value returned from the await operator is same as the variable.
* If the variable is a promise execution in the function body pauses, till the fate of the promise is 

the behavior will be different depending on the fate of the promise, 
  * If the promise resolves, the value the await operator is the resolved value of the promise. 
* If the variable is a promise that gets rejects, the await operator throws an error in the body of the async function which we can catch with the standard synchronous `try` / `catch` constructurs.
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
When we run this it works as expected, giving us the value for not a promise, the resolved value for a promise that will resolve, and a try / catch error for promise that will reject.

Essentially, an async function allows your to write asynchronous code based on promises in a very synchronous manner.
