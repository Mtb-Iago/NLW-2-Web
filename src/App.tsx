import React from 'react';
//import Routes from './routes';
import Now from './router/Now';

import './assets/styles/global.css';

import{ AuthProvider } from '../src/contents/auth'


function App() {
  
  return (
    < AuthProvider>
    <Now />
    </AuthProvider>

  );
}

export default App;
