import { observable, computed, action } from 'mobx';
import { PagePaths } from '../types';

export enum Page {
  Products = '/products',
  Wishs = '/wish-products',
}

export interface UiStoreInterface {
  page: Record<string, number>;
  scroll: Record<string, number>;
  productPage: number;
  wishProductPage: number;
  productPageUp: () => void;
  wishProductPageUp: () => void;
  productScroll: number;
  wishProductScroll: number;
  setScroll: (page: PagePaths, scroll: number) => void;
  clearScroll: () => void;
}

export default class UiStore implements UiStoreInterface {
  @observable page: Record<string, number>;
  @observable scroll: Record<string, number>;

  constructor() {
    this.page = {
      [Page.Products]: 1,
      [Page.Wishs]: 1,
    };
    this.scroll = {
      [Page.Products]: 0,
      [Page.Wishs]: 0,
    };
  }

  @computed
  get productPage() {
    return this.page[Page.Products];
  }

  @action
  productPageUp = () => {
    this.page[Page.Products] = this.page[Page.Products] + 1;
  };

  @computed
  get productScroll() {
    return this.scroll[Page.Products];
  }

  @action
  setScroll = (page: PagePaths, scroll: number) => {
    this.scroll[page] = scroll;
  };

  @computed
  get wishProductPage() {
    return this.page[Page.Wishs];
  }

  @action
  wishProductPageUp = () => {
    this.page[Page.Wishs] = this.page[Page.Wishs] + 1;
  };

  @computed
  get wishProductScroll() {
    return this.scroll[Page.Wishs];
  }

  @action
  clearScroll = () => {
    this.scroll = {
      [Page.Products]: 0,
      [Page.Wishs]: 0,
    };
  };
}
