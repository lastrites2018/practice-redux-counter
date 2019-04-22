import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

// redux 불러오기 start
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

// store 생성
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// redux part end

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
