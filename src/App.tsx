import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Canvas from './components/Canvas/Canvas';
import SettingsBar from './components/SettingsBar/SettingsBar';
import Toolbar from './components/Toolbar/Toolbar';
import './styles/index.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Toolbar />
        <SettingsBar/>
        <Canvas/>
      </div>
    </Provider>
  );
}

export default App;
