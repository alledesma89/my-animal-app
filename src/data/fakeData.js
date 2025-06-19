import { faker } from '@faker-js/faker';

const animalImageMap = {
  bird: 'https://placehold.co/300x300/png?text=Bird',
  cat: 'https://placehold.co/300x300/png?text=cat',
  dog: 'https://placedog.net/300/300',
  fish: 'https://media.giphy.com/media/l0MYB8Ory7Hqefo9a/giphy.gif',
  snake: 'https://placehold.co/300x300/png?text=Snake',
  horse: 'https://placehold.co/300x300/png?text=Horse',
  cow: 'https://placehold.co/300x300/png?text=Cow',
  bear: 'https://placehold.co/300x300/png?text=bear',
};

const getImage = (type) => {
  return animalImageMap[type] || 'https://via.placeholder.com/300x300?text=Animal';
};

const getType = () => faker.animal.type();
const getUrl = () => faker.internet.url();
const getText = () => faker.lorem.sentences();

const animalTitleMap = {
  bird: () => faker.animal.bird(),
  cat: () => faker.animal.cat(),
  dog: () => faker.animal.dog(),
  fish: () => faker.animal.fish(),
  snake: () => faker.animal.snake(),
  horse: () => faker.animal.horse(),
  cow: () => faker.animal.cow(),
  bear: () => faker.animal.bear(),
};

const getTitle = (type) => {
  if (animalTitleMap[type]) {
    return animalTitleMap[type]();
  }
  return type.charAt(0).toUpperCase() + type.slice(1);
};

const generateFakeData = (filterType = '') => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [...Array(100)].map((_, index) => {
        let type = getType();

        
        if (filterType && Object.keys(animalImageMap).includes(filterType)) {
          type = filterType;
        }

        return {
          id: index + 1,
          type,
          title: getTitle(type),
          description: getText(),
          image: getImage(type),
          url: getUrl(),
        };
      });
      resolve(data);
    }, 1500);
  });
};

export default generateFakeData;
