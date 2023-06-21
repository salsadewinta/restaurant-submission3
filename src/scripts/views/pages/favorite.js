import FavoriteRestaurant from '../../data/favorite-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section class="content">
    <div class="headline-content">
      <h1 tabindex="0" class="headline-title">Let's Visit to Organic's Kitchen</h1>
      <div id="restaurant" class="post">
      </div>
    </div>
    `;
  },
};

export default Favorite;
