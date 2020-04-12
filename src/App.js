import React from 'react';
//import logo from './assets/images/logo.svg';
import Menu from './components/Menu'

function App() {
  return (
    <div className="App">
      <header className="text-center">
        <h3>Restaurant Menu</h3>
      </header>
      <main role="main">
        <Menu/>
      </main>
    </div>
  );
}

export default App;
