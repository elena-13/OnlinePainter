import React from 'react';
import Canvas from './components/Canvas/Canvas';
import SettingsBar from './components/SettingsBar/SettingsBar';
import Toolbar from './components/Toolbar/Toolbar';
import './styles/index.scss';

function App() {
  return (
    <div className="app">
      <Toolbar />
      <SettingsBar/>
      <Canvas/>
    </div>
  );
}

export default App;
