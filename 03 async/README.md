# async and await keywords
> This lesson covers the fundamentals of annotating a function as async. An async function gets the chance to use the `await` keyword. This lesson covers the usages of these keywords.

async / await should really be though as a better way to use Promises reliably and safely with less chances of programming errors.

* TODO:
  * Use async in function, in arrow functions, in class methods, in class properties.

* An async function always return a promise. This is just JavaScript.
```js
async function foo() {
  return 123;
}
```

* await values, or promises is okay.
