import React from 'react';
import GlobalStyles from './styles/globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './pages/Products';
import WishProducts from './pages/WishProducts';
import Header from './components/Header';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header />
      <Router>
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/wish-products">
            <WishProducts />
          </Route>
          <Route path="/">
            <Products />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
