# Simplify asynchronous callback functions using async/await

> Learn how to write a promise based delay function and then use it in async await to see how much it simplifies code over setTimeout.

> Lets say you want to call a function after 1s, 2s, 3s. You can use setTimeout, or you can wrap it up into a simple delay function that works with async/await

Lets say we have a requirement to run a function after 1s, then 2s, then 3s.

* A quick way to write the run function is using  setTimeout.
* we can take are required function as a callback within our runner and internally we can just use settimeout to call this callback after a second.
* It takes a callback. Sets up our settimeout to call it after 1s. And then we repeat this pattern for 2s and 3s.
* Next we simply pass in a callback that logs the time when it gets called.

```ts
const run = (cb) => {
  setTimeout(() => {
    cb('1s');
    setTimeout(() => {
      cb('2s');
      setTimeout(() => {
        cb('3s');
      }, 1000);
    }, 1000);
  }, 1000);
}

run((time)=>console.log(time));
```

***Demo the file***
If we run this code now we can see that it follows the specification correctly in that the callback is called after 1 second, 2 seconds  and then three seconds

***Select the body of the function***
Even though it does satisfy our requirement you can see that the setTimeout nesting in our run function adds a lot of noise that makes the intent slightly difficult to figure out. We can make this much easier with async/await.

The only thing we need is a promise based delay function, and that is very easy to write. It simply takes a number of `ms` and returns a Promise that gets resolved using setTimeout after the given number of ms

```js
const delay = (ms) => new Promise(res => setTimeout(res, ms));
```

Now we can create our `runAsync` function which is now an `async` function which is still going to take the callback like before.

```js
const runAsync = async (cb) => {

}
```

And inside the function we now get to use `await` to pause function execution till the promise is resolved

```js
  await delay(1000);
```

and then we call the callback passing in the time

```js
cb('1s');
```

And we repeat this twice more, simply changing the argument to the callback.

***Demo the file***
Now if we copy over the previous call to run and this time call run async if we go ahead and execute the file you can see that it still behaves the same in that the callback is called after 1s, 2seconds and then 3seconds, but this time the code is much simpler thanks to our promise based delay function and async await.
