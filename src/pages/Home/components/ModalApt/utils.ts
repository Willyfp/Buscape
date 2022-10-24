import { User } from '../../../../store/reducers/auth/types';
import { APType } from '../../../../utils/fakeApts';

export const verifyMatches = (user: User, aptLikes: APType['likes']) => {
  const likes = aptLikes?.filter(like => like.id !== user.id);

  if (likes && likes?.length > 0) {
    const comparision = likes.find(like => {
      const compareCarachteristics = user.myCaracteristics?.filter(
        caracteristic => {
          return like.myCaracteristics?.includes(caracteristic);
        },
      );

      if (compareCarachteristics && compareCarachteristics?.length >= 3) {
        return like;
      } else {
        return null;
      }
    });

    if (comparision) {
      return comparision;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
