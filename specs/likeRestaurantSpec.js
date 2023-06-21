import FavoriteRestaurantIdb from '../src/scripts/data/favorite-idb';
import * as TestFactories from './helpers/testFactories';
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';


describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };
 
  beforeEach(() => {
    addLikeButtonContainer();
  });
 
  it('should show the like button when the restaurant has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: "6c7bqjgi84kcowlqdz",
      },
    });
    expect(document.querySelector('[aria-label="like this Restaurant"]'))
    .toBeTruthy();
  });
  

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: "6c7bqjgi84kcowlqdz",
      },
    });
    expect(document.querySelector('[aria-label="unlike this Restaurant"]'))
        .toBeFalsy();
  });


  it('should be able to like the restaurant', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: "6c7bqjgi84kcowlqdz",
      },
    });
 
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    
    const restaurant = await FavoriteRestaurantIdb.getRestaurant("6c7bqjgi84kcowlqdz");
    expect(restaurant).toEqual({ id: "6c7bqjgi84kcowlqdz" });
 
    FavoriteRestaurantIdb.deleteRestaurant("6c7bqjgi84kcowlqdz");
  });
 
  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: "6c7bqjgi84kcowlqdz" });
 
    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteRestaurantIdb.putRestaurant({id: "6c7bqjgi84kcowlqdz" });
 
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
 
    // tidak ada film yang ganda
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: "6c7bqjgi84kcowlqdz" }]);
 
    FavoriteRestaurantIdb.deleteRestaurant("6c7bqjgi84kcowlqdz");
  });
 
  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});
    
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});