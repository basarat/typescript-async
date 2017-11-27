# Parallel and serial execution using async / await
> The great thing about asynchronous programming is that you can do multiple things in parallel. E.g. you can make multiple network requests, or read multiple files from the file system. This lesson covers how to write parallel as well as serial async code.

***Have demo window open***
We start off by bringing in a function `getUserDetails`.

The implementation of this function is not important beyond the fact that
* it takes a github user handle
* and returns a promise to the details which are resolved asynchronously.

```js
import { getUserDetails } from './getUserDetails';

```

Now in our main application we have an `async` `main` function that we will execute upfront.

```js
async function main() {

}

main();
```

We have a few github user handles that we want to get the details for.

```js
  const handles = [
    'basarat',
    'eggheadio',
    'joelhooks'
  ];
```

Getting details for each of these handles one by one is a very easy task with `async`/`await`
* We simply loop through the handles one by one with a simple `forof` loop
* We await the result of each `handle` with `getUserDetails`.
* Once the result comes back, we simply log it out.

```js
  for (const handle of handles) {
    const item = await getUserDetails(handle);
    console.log(`
Name: ${item.name}
Location: ${item.location}
    `);
  }
```

***Run the demo and show the sequential flow***
Doing this serial sequence of events is something that is way too easy thanks to async await.

***Delete the for loop***
Sometimes you might want to run a bunch of operations in parallel and wait for all of them to resolve. This can be done with `Promise.all`.

* We start off by running all the calls to `getUserDetails` in parallel. At this point we have an array of promises that will resolve independently.
* `Promise.all` is a native function that takes an array of promises and returns a new promise that resolves with an array of resolved values for each of the promise.
* Now that we have a single promise we can await it easily giving a single array of resolved values.
* Now we simply loop over the elements of the array and log it out.

```js
  const allPromises = handles.map(getUserDetails);
  const combinedPromise = Promise.all(allPromises);
  const details = await combinedPromise;
  for (const item of details) {
    console.log(`
Name: ${item.name}
Location: ${item.location}
    `);
  }
```
***Run the demo***
You can see that we get all the three results at the same time and that the overall process is much faster as we get the details in parallel.

***Delete everything starting from `const combinedPromise`***
One final native control flow worth mentioning is `Promise.race`.

* This function takes an array of promises just like `Promise.all` and returns a new promise.
* The fate of this new promise is equal to the fate of the first promise that resolves or rejects.
* Here we simply log out the result of the first promise that wins.

```js
  const resultOfPromiseThatWins = Promise.race(allPromises);
  const item = await resultOfPromiseThatWins;
  console.log(`
Name: ${item.name}
Location: ${item.location}
    `);
```

***Run the code***
In our case here the first promise resolves the fastest and hence that is the result of the item.
