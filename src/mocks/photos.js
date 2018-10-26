import users from './users';
import images from './images';
import faker from 'faker';
import moment from 'moment';

const getRandomUserPhoto = () =>
  users[Math.floor(Math.random() * users.length)];

const photos = () => {
  let items = [];

  for (let i = 0; i < 10; i++) {
    const item = {};
    item.user = {
      name: faker.name.firstName() + ' ' + faker.name.lastName(),
      img: getRandomUserPhoto()
    };

    item.image = images[Math.floor(Math.random() * images.length)];

    const randomInt = Math.min(Math.floor(Math.random() * users.length) + 1, 7);

    item.likes = [];

    for (let j = 0; j < randomInt; j++) {
      item.likes.push({
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        img: getRandomUserPhoto()
      });
    }

    item.date = faker.date.recent();
    items.push(item);
  }

  items = items
    .sort((first, second) => second.date.getTime() - first.date.getTime())
    .map(item => ({
      ...item,
      date: moment(item.date).fromNow()
    }));

  return items;
};

export default photos();
