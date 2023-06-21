import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div id="resto" class="resto"></div>
    <div id="likeButtonContainer" aria-label="like this Restaurant"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.getDetailRestaurant(url.id);
    const restoContainer = document.querySelector('#resto');

    restoContainer.innerHTML = createRestoDetailTemplate(resto);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: resto.id,
        pictureId: resto.pictureId,
        name: resto.name,
        address: resto.address,
        city: resto.city,
        rating: resto.rating,
        description: resto.description
      }
    });
  }
};

export default Detail;
