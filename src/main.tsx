import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css'; // Make sure to import a CSS file for styling

const queryClient = new QueryClient();


ReactDOM.render(
  <React.StrictMode>
    

    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
