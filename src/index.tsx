import * as React from 'react';
import * as  ReactDom from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './pages/app';
import store from './store';

require('antd/dist/antd.css');
require('./index.scss');

ReactDom.render(
    (
        <Provider store={ store }>
          <BrowserRouter>
            <Route component={ App }/>
          </BrowserRouter>
        </Provider>

    ),
    document.getElementById('root'),
);
