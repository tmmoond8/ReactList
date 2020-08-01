import { observable, computed } from 'mobx';
import { Product } from '../types';
import products from '../components/ProductList/lists.json';

export interface ProductStoreInterface {
  originProducts: Product[];
  page: number;
  products: Product[];
}

export default class ProductStore implements ProductStoreInterface {
  @observable originProducts: Product[] = [];
  @observable page = 1;

  constructor() {
    this.originProducts = products;
  }

  @computed
  get products() {
    return this.originProducts.slice(0, this.page * 10);
  }
}
