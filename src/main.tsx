// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import React from 'react'

// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import {makeStore} from './store/store'

// const store = createStore(makeStore)
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>,

//   </StrictMode>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { makeStore } from './store/store';
import './index.css'
import App from './App'

const store = makeStore();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)