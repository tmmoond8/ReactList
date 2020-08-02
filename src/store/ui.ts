import { observable, computed, action } from 'mobx';

export interface UiStoreInterface {
  productPage: number;
  productScrollHeight: number;
  wishPage: number;
  wishScrollHeight: number;
}

export default class UiStore implements UiStoreInterface {
  @observable productPage: number;
  @observable productScrollHeight: number;
  @observable wishPage: number;
  @observable wishScrollHeight: number;

  constructor() {
    this.productPage = 1;
    this.productScrollHeight = 0;
    this.wishPage = 1;
    this.wishScrollHeight = 0;
  }
}
