/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useMemo } from 'react';
import List, {
  useScrollFetch,
  useMemoryScroll,
} from '../components/ProductList';
import { useStore, observer } from '../store';

export default observer(function Products(): JSX.Element {
  const {
    product: { products: allProducts, toggleWish, wishs },
    ui: { productPage, productPageUp, productScroll },
  } = useStore();

  const products = useMemo(() => {
    return allProducts.slice(0, productPage * 10);
  }, [allProducts, productPage]);

  useScrollFetch(productPageUp);
  useMemoryScroll(productScroll);

  return <List products={products} wishs={wishs} toggleWish={toggleWish} />;
});
