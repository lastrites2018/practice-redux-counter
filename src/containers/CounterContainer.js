import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';

// store 안의 state 값을 props로 연결
const mapStateToProps = state => ({
  color: state.colorData.color,
  // color: state.color,
  number: state.numberData.number
  // number: state.number
});

// 액션 생성자로 액션 만들고, 액션을 dispatch 하는 함수를 만든 후 props로 연결
const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement()),
  onSetColor: () => {
    const color = getRandomColor();
    console.log('color', color);
    dispatch(actions.setColor(color));
  }
});

const CountContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CountContainer;
