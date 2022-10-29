import { Display } from '../components/Display/Display.component';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import './App.css';
import { KeyBoard } from '../components/KeyBoard/KeyBoard.component';

function App() {
  return (
    <Provider store={store}>
      <div className='flex justify-center center full' >
        <div>
          <Display />
          <KeyBoard />
        </div>
      </div>
    </Provider>
  );
}

export default App;
