import { observable, computed, action } from 'mobx';
import { Product } from '../types';
import products from '../components/ProductList/lists.json';

export interface ProductStoreInterface {
  originProducts: Product[];
  page: number;
  products: Product[];
  wishs: Record<string, number>;
  toggleWish: (id: number) => void;
  wishProducts: Product[];
}

class ProductStore implements ProductStoreInterface {
  @observable originProducts: Product[] = [];
  @observable wishs: Record<string, number> = {};
  @observable page = 1;

  constructor() {
    this.originProducts = products;
  }

  @computed
  get products() {
    return this.originProducts.slice(0, this.page * 10);
  }

  @computed
  get wishProducts() {
    return this.originProducts.filter((product) => product.id in this.wishs);
  }

  @action
  toggleWish = (id: number) => {
    if (id in this.wishs) {
      console.log('wish remove');
      const cloneWishs = { ...this.wishs };
      delete cloneWishs[id];
      this.wishs = cloneWishs;
    } else {
      console.log('wish add');
      this.wishs = {
        ...this.wishs,
        [id]: true,
      };
    }
  };
}

export default ProductStore;
