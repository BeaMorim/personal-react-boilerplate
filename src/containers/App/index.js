import React from "react";
import { BrowserRouter, Switch } from 'react-router-dom';
import routes from '../../routes/public';

const App = () => (
  <BrowserRouter>
    <Switch>
      {
        routes.map(({ layout: Layout, ...restProps}) => (
          <Layout key={restProps.path} {...restProps} />
        ))
      }
    </Switch>
  </BrowserRouter> 
);

export default App;
