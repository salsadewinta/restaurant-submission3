import RestaurantSource from '../../data/source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="content">
    <div class="headline-content">
      <h1 tabindex="0" class="headline-title">What is Organic's Kitchen</h1>
      <p>
        Organic's Kitchen a.k.a Meal's Bar adalah sebuah restoran yang menyediakan makanan organik seperti sayur dan buah segar yang ditanam 
        menggunakan metode Hydroponic tanpa menggunakan pupuk buatan sehingga makanan yang kami buat terjaga kesehatan dan kualitasnya. 
        Organic's kitchen mempunyai 9 toko cabang di Indonesia sehingga masyarakat Indonesia bisa merasakan makanan sehat yang dibuat oleh organic's kitchen.
    </div>
  </section>
<section class="content">
  <div class="headline-content">
    <h1 tabindex="0" class="headline-title">Let's Visit to Organic's Kitchen</h1>
    <div id="restaurant" class="post"></div>
  </div>
    `;
  },
  async afterRender() {
    const restaurants = await RestaurantSource.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  }
};

export default Home;
