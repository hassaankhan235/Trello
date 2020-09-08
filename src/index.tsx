import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppStateProvider } from './AppStateContect'
import { sw } from './sw';

ReactDOM.render(
  <AppStateProvider>
    <App />
    </AppStateProvider>
   ,
  document.getElementById('root')
);
sw()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
