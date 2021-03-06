import { observable, computed, action } from 'mobx';
import { fetchProducts } from '../apis';
import { Product } from '../types';

export enum SortOption {
  Default = 'Default',
  PriceASC = 'PriceASC',
  PriceDESC = 'PriceDESC',
}

export interface ProductStoreInterface {
  originProducts: Product[];
  products: Product[];
  wishs: Record<string, boolean | null>;
  toggleWish: (id: number) => void;
  removeWish: (id: number) => void;
  sortOption: SortOption;
  wishProducts: Product[];
}

class ProductStore implements ProductStoreInterface {
  @observable originProducts: Product[];
  @observable wishs: Record<string, boolean | null>;
  @observable sortOption: SortOption;

  constructor() {
    this.originProducts = [];
    this.wishs = {};
    this.sortOption = SortOption.Default;
    this.fetch();
  }

  async fetch() {
    try {
      const { data } = await fetchProducts();
      this.originProducts = data;
    } catch (error) {
      console.error(error);
    }
  }

  @computed
  get wishProducts() {
    return this.products.filter((product) => product.id in this.wishs);
  }

  @action
  toggleWish = (id: number) => {
    if (id in this.wishs) {
      const cloneWishs = { ...this.wishs };
      delete cloneWishs[id];
      this.wishs = cloneWishs;
    } else {
      this.wishs = {
        ...this.wishs,
        [id]: true,
      };
    }
  };

  @action
  removeWish = (id: number) => {
    const cloneWishs = { ...this.wishs };
    delete cloneWishs[id];
    this.wishs = cloneWishs;
  };

  @computed
  get products() {
    const sortFunction = (a: Product, b: Product) =>
      this.sortOption === SortOption.PriceASC
        ? a.price - b.price
        : b.price - a.price;
    if (this.sortOption === SortOption.Default) {
      return this.originProducts;
    } else {
      return [...this.originProducts].sort(sortFunction);
    }
  }
}

export default ProductStore;
