import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
  <App />
  </Router>,
  document.getElementById('root'));
registerServiceWorker();

// https://itnext.io/so-you-want-to-host-your-single-age-react-app-on-github-pages-a826ab01e48
