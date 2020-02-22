import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='app-header'>
        <img src='junParLogo.png' alt='Main logo'/>
      </header>
      <nav className='app-navigation'>
        <ul>
          <li><a href='#'>News</a></li>
          <li><a href='#'>Friends</a></li>
          <li><a href='#'>Communities</a></li>
          <li><a href='#'>Messages</a></li>
          <li><a href='#'>Code review</a></li>
        </ul>
      </nav>
      <main className='app-content'>

      </main>
      <footer className='app-footer'>

      </footer>
    </div>
  );
}


export default App;
