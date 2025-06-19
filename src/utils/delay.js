import generateFakeData from "../data/fakeData";

export function fetchAnimals() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateFakeData());
    }, 1500); 
  });
}
