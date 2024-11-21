import { IPlugin } from '@shell/core/types';
import { CUSTOM_PAGE_NAME, CUSTOM_PAGE_LABEL, YOUR_PRODUCT_NAME, BLANK_CLUSTER } from './constants';

export function init($plugin: IPlugin, store: any) {
  const { product, virtualType, basicType } = $plugin.DSL(store, YOUR_PRODUCT_NAME);

  product({
    icon: 'gear',
    inStore: 'management',
    weight: 100,
    to: {
      name: `${YOUR_PRODUCT_NAME}-c-cluster-${ CUSTOM_PAGE_NAME }`,
      path: `/${YOUR_PRODUCT_NAME}/c/:cluster/${ CUSTOM_PAGE_NAME }`,
      params: {
        product: YOUR_PRODUCT_NAME,
        cluster: BLANK_CLUSTER,
        pkg: YOUR_PRODUCT_NAME,
      },
    },
  });

  // this registers/creates the "dashboard" page
   virtualType({
    // @ts-ignore
    label:    CUSTOM_PAGE_LABEL,
    name:     CUSTOM_PAGE_NAME,
    route:    {
      name:   `${ YOUR_PRODUCT_NAME }-c-cluster-${ CUSTOM_PAGE_NAME }`,
      params: {
        product: YOUR_PRODUCT_NAME,
        cluster: BLANK_CLUSTER,
        pkg: YOUR_PRODUCT_NAME,
      }
    }
  });

  // this registers the "dashboard" page as a menu entry
  basicType([CUSTOM_PAGE_NAME])
}