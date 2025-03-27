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