import * as types from './ActionTypes';

export const increment = () => ({
  type: types.INCREMENT
});

export const decrement = () => ({
  type: types.DECREMENT
});

export const setColor = color => ({
  type: types.SET_COLOR,
  color
});

// 리덕스의 3가지 원칙에서 변화는 Pure funtcion으로만 이루어져야 함, 늘 같은 값을 환환해야 함
