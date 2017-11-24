// import { increment } from './increment';

function* numbers() {
  let index = 1;
  while (true) {
    yield index;
    index = index + 1;
    if (index > 10) {
      break;
    }
  }
}

function main() {
  for (const num of numbers()) {
    console.log(num);
  }
}
main();


(Symbol as any).asyncIterator =
  (Symbol as any).asyncIterator
  || Symbol.for("Symbol.asyncIterator");

// async function main() {
//   for (const num of numbers()) {
//     console.log(num);
//   }
// }
// main();

// const delay = (ms) => new Promise(res => setTimeout(res, ms));

// async function* numbers() {
//   for (let index = 0; index < 10; index++) {
//     await delay(1000);
//     yield index;
//   }
// }

// async function main() {
//   for await (const num of numbers()) {
//     console.log(num);
//   }
// }
// main();
