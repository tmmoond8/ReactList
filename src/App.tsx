import React from 'react';
import styled from '@emotion/styled';
import GlobalStyles from './styles/globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './pages/Products';
import WishProducts from './pages/WishProducts';
import Header from './components/Header';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Router>
        <Header />
        <Page>
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
        </Page>
      </Router>
    </React.Fragment>
  );
}

export default App;

const Page = styled.div`
  padding: 50px 0 0 0;
  height: 100%;
`;
