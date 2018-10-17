import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory as history } from 'react-router';



const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route component={Account} />
    <Route component={Contact} />
    <Route component={Billing} />
    <Route component={Confirm} />
  </Route>
);

ReactDOM.render()

// export default App;