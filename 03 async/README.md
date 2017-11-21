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

The promise resolves to the value that is returned by the function. 
```js
async function foo() {
}

foo().then(value => {
  console.log(value);
});
```

TODO: 
* await values `await 123` , or promises `await 456` is okay.
