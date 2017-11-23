import { getUserDetails } from './getUserDetails';

async function main() {
  const handles = [
    'basarat',
    'eggheadio',
    'joelhooks'
  ];
  /** In series */
  for (const handle of handles) {
    const item = await getUserDetails(handle);
    console.log(`
        Name: ${item.name}
        Location: ${item.location}
    `);
  }
  /** In parallel */
  const details = await Promise.all(handles.map(getUserDetails));
  for (const item of details) {
    console.log(`
        Name: ${item.name}
        Location: ${item.location}
    `);
  }
  /** First one wins! */
  const item = await Promise.race(handles.map(getUserDetails));
  console.log(`
        Name: ${item.name}
        Location: ${item.location}
  `);
}
main();