import React from 'react';
import CommentActivity from './CommentActivity';
import { Wrapper } from './Activity.styles';
import user1 from '../../assets/users/1.png';

const activities = [
  {
    user: {
      image: user1,
      name: 'Frank Block'
    },
    type: 'comment',
    text: 'Very nice shot, love it!',
    date: '3h'
  }
];

const ACTIVITY_TYPES = {
  COMMENT: 'comment',
  FOLLOW: 'follow',
  LIKE: 'like'
};

class Activity extends React.Component {
  render() {
    return (
      <Wrapper>
        {activities.map(item => {
          if (item.type === ACTIVITY_TYPES.COMMENT) {
            return <CommentActivity comment={item} />;
          }
        })}
      </Wrapper>
    );
  }
}

export default Activity;
