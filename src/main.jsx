import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { NhostClient, NhostProvider } from '@nhost/react';
import { NhostApolloProvider } from '@nhost/react-apollo';
import './index.css';

const nhost = new NhostClient({
  subdomain: 'noodbonidjwqpyyhkkas',
  region: 'ap-south-1',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NhostProvider nhost={nhost}>
      <NhostApolloProvider nhost={nhost}>
        <App />
      </NhostApolloProvider>
    </NhostProvider>
  </React.StrictMode>
);
