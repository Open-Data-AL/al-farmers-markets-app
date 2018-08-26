import Vue from 'vue';
import Router from 'vue-router';
import MarketsList from '@/components/MarketsList';

Vue.use(Router);

export default new Router({
  routes: [
    {
        path: '/markets-list',
        name: 'MarketsList',
        component: MarketsList
    }
  ],
});
