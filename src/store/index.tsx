import React, { ReactNode, useContext } from 'react';
import {
  Provider,
  MobXProviderContext,
  observer as _observer,
} from 'mobx-react';
import ProductStore, { ProductStoreInterface } from './product';

export interface Stores {
  product: ProductStoreInterface;
}

export const product = new ProductStore();
const rootStore: Stores = {
  product,
};

export const MobxProvider = (props: { children: ReactNode }): JSX.Element => (
  <Provider {...rootStore}>{props.children}</Provider>
);

export const useStore = () => useContext(MobXProviderContext) as Stores;

export const observer = _observer;
