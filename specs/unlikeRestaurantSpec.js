import FavoriteRestaurantIdb from '../src/scripts/data/favorite-idb';
import * as TestFactories from './helpers/testFactories';
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';

describe('Unliking A Restaurant', () => {
    const addLikeButtonContainer = () => {
      document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };
    
    beforeEach(async () => {
      addLikeButtonContainer();
      await FavoriteRestaurantIdb.putRestaurant({ id: "6c7bqjgi84kcowlqdz" });
    });
   
    afterEach(async () => {
      await FavoriteRestaurantIdb.deleteRestaurant("6c7bqjgi84kcowlqdz");
    });
   
    it('should display unlike widget when the restaurant has been liked', async () => {
      document.body.innerHTML = '<div id="likeButtonContainer"></div>';
      await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: "6c7bqjgi84kcowlqdz",
        },
      });
      expect(document.querySelector('[aria-label="like this Restaurant"]')).toBeFalsy();
    });
   
    it('should not display like widget when the restaurant has been liked', async () => {
      await TestFactories.createLikeButtonPresenterWithRestaurant({ id: "6c7bqjgi84kcowlqdz" });
   
      expect(document.querySelector('[aria-label="like this Restaurant"]'))
          .toBeFalsy();
    });
   
    it('should be able to remove liked restaurant from the list', async () => {
      await TestFactories.createLikeButtonPresenterWithRestaurant({ id: "6c7bqjgi84kcowlqdz" });
      
      document.querySelector('[aria-label="unlike this Restaurant"]').dispatchEvent(new Event('click'));
   
      expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    });
   
    it('should not throw error if the unliked restaurant is not in the list', async () => {
      await TestFactories.createLikeButtonPresenterWithRestaurant({ id: "6c7bqjgi84kcowlqdz" });
   
      // hapus dulu film dari daftar film yang disukai
      await FavoriteRestaurantIdb.deleteRestaurant("6c7bqjgi84kcowlqdz");
   
      // kemudian, simulasikan pengguna menekan widget batal menyukai film
      document.querySelector('[aria-label="unlike this Restaurant"]')
          .dispatchEvent(new Event('click'));
   
      expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    });
  });