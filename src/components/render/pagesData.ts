import Trends from './pages/trends/trends';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';

const renderingData = [
  {
    href: '/',
    text: 'Shop',
    renderClass: new Shop(),
  },
  {
    href: 'trends',
    text: 'Trends',
    renderClass: new Trends(),
  },
  {
    href: 'cart',
    text: 'Cart',
    renderClass: new Cart(),
  },
];
export default renderingData;
