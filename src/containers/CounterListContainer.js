import CounterList from '../components/CounterList';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';

const mapStateToProps = state => ({
  counters: state.get('counters')
});

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: index => dispatch(actions.increment(index)),
    onDecrement: index => dispatch(actions.decrement(index)),
    onSetColor: index => {
      const color = getRandomColor();
      dispatch(actions.setColor({ index, color }));
    }
  };
};

const CounterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterList);

export default CounterListContainer;
