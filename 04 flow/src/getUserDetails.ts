const people = {
  basarat: {
    name: 'Basarat Ali Syed',
    location: 'Melbourne, Australia'
  },
  eggheadio: {
    name: 'egghead.io',
    location: 'Recording booth',
  },
  joelhooks: {
    name: 'Joel Hooks',
    location: 'Vancouver, WA'
  }
}

/** 
 * This is a mocked out version because github API throttling is pretty bad.
 * Also the code below means it will continue to work for a long long time (longer than github api 🌹) 
 * */
export async function getUserDetails(handle: string) {
  return new Promise<{ name: string, location: string }>(res => {
    setTimeout(() => {
      res(people[handle]);
    }, 1000);
  });
}
