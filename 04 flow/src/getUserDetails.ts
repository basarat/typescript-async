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
export async function getUserDetails(handle: string) {
  return new Promise<{ name: string, location: string }>(res => {
    setTimeout(() => {
      res(people[handle]);
    }, 1000);
  });
}
