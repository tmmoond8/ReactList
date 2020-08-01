/** @jsx jsx */
import { jsx } from '@emotion/core';
import List from '../components/ProductList';
import { useStore, observer } from '../store';

export default observer(function Products(): JSX.Element {
  const {
    product: { products, toggleWish, wishs },
  } = useStore();
  return <List products={products} wishs={wishs} toggleWish={toggleWish} />;
});
