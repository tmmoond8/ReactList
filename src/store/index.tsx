import React, { ReactNode } from 'react';
import { Provider, MobXProviderContext } from 'mobx-react';
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

export const StoreContext = MobXProviderContext;
