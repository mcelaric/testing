// 13
import React from 'react';
import ReactDOM from 'react-dom';

// 47 - Comment out as we now have Root.js to provide Redux functionality for testing
// 43 - Redux
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducers from 'reducers';

import Root from 'Root';

import App from 'components/App';

// 47 - Remove store from here and put in Root.js
// ReactDOM.render(
//   <Provider store={createStore(reducers, {})}>
//     <App />
//   </Provider>, 
//   document.querySelector('#root')
// );
ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector('#root')
);
