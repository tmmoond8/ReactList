/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useMemo, useEffect } from 'react';
import List from '../components/ProductList';
import { useStore, observer } from '../store';
import { throttle } from 'throttle-debounce';

export default observer(function Products(): JSX.Element {
  const {
    product: { products: allProducts, toggleWish, wishs },
    ui,
  } = useStore();

  const products = useMemo(() => {
    return allProducts.slice(0, ui.productPage * 10);
  }, [ui.productPage, allProducts]);

  useEffect(() => {
    if (document) {
      const handleScroll = throttle(300, () => {
        const {
          scrollHeight,
          scrollTop,
          clientHeight,
        } = document.documentElement;
        if (scrollHeight - scrollTop === clientHeight) {
          ui.productPage = ui.productPage + 1;
        }
      });
      document.addEventListener('scroll', handleScroll);
    }
  }, [ui.productPage]);

  return <List products={products} wishs={wishs} toggleWish={toggleWish} />;
});
