import { getUserDetails } from './getUserDetails';

function* getUsers() {
  yield getUserDetails('basarat');
  yield getUserDetails('eggheadio');
  yield getUserDetails('joelhooks');
}

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