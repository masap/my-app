import Dashboard from '../pages/index.vue';
import { CUSTOM_PAGE_NAME, YOUR_PRODUCT_NAME, BLANK_CLUSTER } from '../constants';

const routes = [
  {
    name: `${YOUR_PRODUCT_NAME}-c-cluster-${ CUSTOM_PAGE_NAME }`,
    path: `/${YOUR_PRODUCT_NAME}/c/:cluster/${ CUSTOM_PAGE_NAME }`,
    component: Dashboard,
    meta: {
      product: YOUR_PRODUCT_NAME,
      cluster: BLANK_CLUSTER,
      pkg: YOUR_PRODUCT_NAME,
    },
  },
];

export default routes;