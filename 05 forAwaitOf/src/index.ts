(Symbol as any).asyncIterator =
  (Symbol as any).asyncIterator
  || Symbol.for("Symbol.asyncIterator");

const delay = (ms) => new Promise(res => setTimeout(res, ms));

// function* numbers() {
//   for (let index = 0; index < 10; index++) {
//     yield index;
//   }
// }

// async function main() {
//   for (const num of numbers()) {
//     console.log(num);
//   }
// }
// main();

async function* numbers() {
  for (let index = 0; index < 10; index++) {
    await delay(1000);
    yield index;
  }
}

async function main() {
  for await (const num of numbers()) {
    console.log(num);
  }
}
main();
