import React from 'react';
import Router from './Router'
import './common/font.js'
import './common/reset.css'
import './common/style.css'
import './common/bootstrap-3.3.7-dist/css/bootstrap.css'
import store from './store'
import {Provider} from 'react-redux'
    
function App() {
  return <Provider store={store}>
        <Router/>
  </Provider>
}

export default App;
