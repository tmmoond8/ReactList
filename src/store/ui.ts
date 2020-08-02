import { observable, computed, action } from 'mobx';

export interface UiStoreInterface {
  page: Record<string, number>;
  scroll: Record<string, number>;
  productPage: number;
  wishProductPage: number;
  productPageUp: () => void;
  wishProductPageUp: () => void;
}

enum Page {
  Products = '/products',
  Wishs = '/wish-products',
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
      [Page.Products]: 100,
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
  setProductScroll(scroll: number) {
    this.scroll[Page.Products] = scroll;
  }

  @computed
  get wishProductPage() {
    return this.page[Page.Wishs];
  }

  @action
  wishProductPageUp = () => {
    this.page[Page.Wishs] = this.page[Page.Wishs] + 1;
  };
}
