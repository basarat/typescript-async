# Parallel and serial execution using async / await
> The great thing about asynchronous programming is that you can do multiple things in parallel. E.g. you can make multiple network requests, or read multiple files from the file system. This lesson covers how to write parallel as well as serial async code.

***Have demo window open***
We start off by bringing in a function `getUserDetails`. 

The details of this function are not important beyond the fact that 
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
Doing this sequence of events is something that is way too easy thanks to async await. 

Sometimes you might want to run a bunch of operations in parallel and wait for all of them to resolve. This can be done with `Promise.all`