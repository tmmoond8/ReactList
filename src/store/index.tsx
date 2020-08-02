import React, { ReactNode, useContext } from 'react';
import {
  Provider,
  MobXProviderContext,
  observer as _observer,
} from 'mobx-react';
import ProductStore, { ProductStoreInterface } from './product';
import UiStore, { UiStoreInterface } from './ui';

export interface Stores {
  product: ProductStoreInterface;
  ui: UiStoreInterface;
}

export const product = new ProductStore();
export const ui = new UiStore();

const rootStore: Stores = {
  product,
  ui,
};

export const MobxProvider = (props: { children: ReactNode }): JSX.Element => (
  <Provider {...rootStore}>{props.children}</Provider>
);

export const useStore = () => useContext(MobXProviderContext) as Stores;

export const observer = _observer;
