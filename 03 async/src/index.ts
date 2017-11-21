process.on('unhandledRejection', () => null);

const notAPromise = 456;
const promiseThatWillResolve = new Promise(res => res(123));
const promiseThatWillReject = new Promise((res, rej) => rej(new Error('Hello')));

async function foo() {
  const res1 = await notAPromise;
  console.log({ forNotAPromise: res1 });
  const res2 = await promiseThatWillResolve;
  console.log({ forPromiseThatWillResolve: res2 });
  try {
    const res3 = await promiseThatWillReject;
    console.log('I will never get called');
  }
  catch (e) {
    console.log({ forPromiseThatWillReject: e.message });
  }
}

foo();
