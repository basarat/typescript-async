# `async`/`await` using TypeScript

Docs / Code to an accompanying video course on async/await with TypeScript.

# Setup 
```
npm install
```

## Lessons

* [Simplify callbacks with async await](https://egghead.io/lessons/typescript-simplify-asynchronous-callback-functions-using-async-await)
* [02 Promise](https://egghead.io/lessons/promise-fundamentals-using-typescript)
* [03 Async Await]()
* [04 Parallel and serial execution]()
* [05 Asynchronous iteration using for-await-of]()


## Future

### Why use TypeScript quiz:

What does this function return?

async function foo() {
   return 123;
}

TypeScript knows :)

What does this function return:

declare function backend(): Promise<{key: string}>;
async function foo() {
   return backend()
     .catch(err => {
       console.log('Backend failure:', err);
     });
}

I see this code out in the wild all the time.

Hopefully you can see that even for really simple codebases, when dealing with async await and promises, it is great to have TypeScript on your side.

### utils.promisify
Worth mentioning.