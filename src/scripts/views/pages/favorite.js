import FavoriteRestaurant from '../../data/favorite-idb';
import { createRestoItemTemplate } from '../templates/template-creator';
 
const Favorite = {
  async render() {
    return `
    <section class="content">
    <div class="headline-content">
      <h1 tabindex="0" class="headline-title">Restaurant Favorite Kamu</h1>
      <div id="restaurant" class="post"></div>
    </div>
    `;
  },
 
  async afterRender() {
    const restaurants = await FavoriteRestaurant.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant');
 
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  }
};
 
export default Favorite;
