import axios from 'axios';

async function getUserDetails(handle: string) {
  const res = await axios.get(`https://api.github.com/users/${handle}`);
  return {
    name: res.data.name,
    location: res.data.location
  };
}

async function main() {
  const handles = [
    'basarat',
    'eggheadio',
    'johnnyreilly'
  ];
  for (const handle of handles) {
    const res = await getUserDetails(handle);
    console.log(`
      Handle ${handle}:
        Name: ${res.name}
        Location: ${res.location}
    `);
  }
}
main();