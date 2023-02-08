import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import store from './redux/store';
import { StyleGlobal } from './style/style';


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <StyleGlobal/>
      <App />
    </Provider>
  </React.StrictMode>
)
