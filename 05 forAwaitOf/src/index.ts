import { getUserDetails } from './getUserDetails';
(Symbol as any).asyncIterator =
  (Symbol as any).asyncIterator
  || Symbol.for("Symbol.asyncIterator");

function* getUsers() {
  yield getUserDetails('basarat');
  yield getUserDetails('eggheadio');
  yield getUserDetails('joelhooks');
}
const delay = (ms) => new Promise(res => setTimeout(res, ms));

async function main() {
  for (const promise of getUsers()) {
    const item = await promise;
    console.log(`
Name: ${item.name}
Location: ${item.location}
    `);
  }
}

main();