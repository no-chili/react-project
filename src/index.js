import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/base.less";

import { BrowserRouter } from "react-router-dom";
import BaseRouter from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <BaseRouter></BaseRouter>
    </BrowserRouter>
);

