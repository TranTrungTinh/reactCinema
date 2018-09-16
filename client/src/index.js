import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//redux
import { Provider } from 'react-redux';
import store from './redux/store';

const root = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App/></Provider>, root);
registerServiceWorker();
