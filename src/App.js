import React from 'react';

import Header from './components/Header';
import Routes from './routes';

const App = () => (
  <div className="App">
    <Header />
    <div className="container">
      <Routes />
    </div>
  </div>
);

export default App;
