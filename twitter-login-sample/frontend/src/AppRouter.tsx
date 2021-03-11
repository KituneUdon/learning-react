import React, { FC } from 'react';
import HomePage from './HomePage';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <Route exact path="/" >
            <HomePage />
          </Route>
        </div>
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter;
