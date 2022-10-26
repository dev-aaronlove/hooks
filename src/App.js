import './App.css';
import React, {createContext} from 'react';
import Context from './components/Context';

export const ProfileContext = createContext(); //export to put in any components


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Context />
      </header>
    </div>
  );
}

export default App;
