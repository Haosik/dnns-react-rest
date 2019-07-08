// Polyfills for IE support
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

// CSS normalizer
import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
