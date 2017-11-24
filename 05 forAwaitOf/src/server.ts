/**
 * Returns the next number after a delay 
 * 
 * The objective is to simply demonstrate that you might want to observe 
 *  the value of a promise before determining if you should yield
 **/
export function magic(num: number) {
  return new Promise<number>(res => {
    setTimeout(() => res(num + 1), 1000);
  });
}