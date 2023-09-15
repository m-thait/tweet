import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Display } from './Display';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
<Display />
);

reportWebVitals();
