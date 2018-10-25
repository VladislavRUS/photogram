import React from 'react';
import CommentActivity from './CommentActivity';
import { Wrapper } from './Activity.styles';
import FollowActivity from './FollowActivity';
import LikeActivity from './LikeActivity';
import getActivities, { ACTIVITY_TYPES } from '../../mocks/activities';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

const LOADING_DELAY = 100;

@observer
class Activity extends React.Component {
  @observable
  isLoading = false;
  @observable
  activities = null;

  constructor(props) {
    super(props);

    this.activities = getActivities();
  }

  onRefresh = () => {
    this.isLoading = true;

    setTimeout(() => {
      this.activities = getActivities();
      this.isLoading = false;
    }, LOADING_DELAY);
  };

  render() {
    return (
      <Wrapper
        data={this.activities}
        onRefresh={this.onRefresh}
        refreshing={this.isLoading}
        renderItem={({ item }) => {
          if (item.type === ACTIVITY_TYPES.COMMENT) {
            return <CommentActivity comment={item} />;
          } else if (item.type === ACTIVITY_TYPES.FOLLOW) {
            return <FollowActivity follow={item} />;
          } else if (item.type === ACTIVITY_TYPES.LIKE) {
            return <LikeActivity like={item} />;
          }
        }}
      />
    );
  }
}

export default Activity;
