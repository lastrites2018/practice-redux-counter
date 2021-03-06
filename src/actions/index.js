import * as types from './ActionTypes';

// declare action creators for making action object

export const create = color => ({
  type: types.CREATE,
  color
});

export const remove = () => ({
  type: types.REMOVE
});

export const increment = index => ({
  type: types.INCREMENT,
  index
});

export const decrement = index => ({
  type: types.DECREMENT,
  index
});

// 주의 : destruction 실수

// export const setColor = (index, color) => ({ // 이렇게 해서 에러 발생
//   type: types.SET_COLOR,
//   index,
//   color
// });

export const setColor = ({ index, color }) => ({
  type: types.SET_COLOR,
  index,
  color
});

// 리덕스의 3가지 원칙에서 변화는 Pure funtcion으로만 이루어져야 함, 늘 같은 값을 환환해야 함
