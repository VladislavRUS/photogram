import faker from 'faker';
import users from './users';
import moment from 'moment';

export const ACTIVITY_TYPES = {
  COMMENT: 'comment',
  FOLLOW: 'follow',
  LIKE: 'like'
};

const getRandomType = () => {
  const keys = Object.keys(ACTIVITY_TYPES);
  return ACTIVITY_TYPES[keys[Math.floor(Math.random() * keys.length)]];
};

const getActivities = () => {
  let items = [];

  for (let i = 0; i < 20; i++) {
    const item = {
      user: {
        image: users[Math.floor(Math.random() * users.length)],
        name: faker.name.firstName() + ' ' + faker.name.lastName()
      },
      type: getRandomType(),
      text: faker.lorem.words(8),
      date: faker.date.recent()
    };

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

export default getActivities;
