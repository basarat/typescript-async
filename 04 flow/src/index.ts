import axios from 'axios';

async function getUserDetails(handle: string) {
  const res = await axios.get<{ name: string, location: string }>(
    `https://api.github.com/users/${handle}`
  );
  return res.data;
}

async function main() {
  const handles = [
    'basarat',
    'eggheadio',
    'johnnyreilly'
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