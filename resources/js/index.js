import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './ReactApp';
import {Provider} from 'react-redux'
import store from './redux/store'

// https://reactnavigation.org/docs/navigating-without-navigation-prop/
// https://medium.com/@dariaruckaolszaska/navigate-from-your-redux-actions-with-react-navigation-in-your-react-native-app-d3bf1fbd4c08

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <Provider store={store()}>
    <App />
  </Provider>,
);
