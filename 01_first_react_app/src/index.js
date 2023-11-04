import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Heading from './Heading';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='parent'>
    <Heading />
    <App />
    </div>
);
reportWebVitals();
