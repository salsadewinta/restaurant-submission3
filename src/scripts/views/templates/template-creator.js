import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
<section class="content">
<div class="detail">
    <h1 class="title" id="resto-title">${resto.name}</h1>
    <img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="gambar ${resto.name}">
    <div class="info">
        <h2>Information</h2>
        <ul>
          <li>

          </li>
          <li>

          </li>
          <li>
            <h3>Kota</h3>
            <p>${resto.city}</p>
          </li>
          <li>
            <h3>Alamat</h3>
            <p>${resto.address}</p>
          </li>
          <li>
            <h3>Rating</h3>
            <p>${resto.rating}</p>
          </li>
          <li>
            <h3>Menu Makanan</h3>
            <span id="food"><p>${resto.menus.foods.map((food) => food.name).join(', ')}</p></span>
          </li>
          <li>
            <h3>Menu Minuman</h3>
            <span id="drink"><p>${resto.menus.drinks.map((food) => food.name).join(', ')}</p></span>
          </li>
          <li>
          <h3>Overview</h3>
            <p>${resto.description}</p>
          </li>
          <li>
            <h3>Customer Reviews</h3>
            <div class="overview">
            ${resto.customerReviews.map(({ name, date, review }) => `
                <p>Nama: ${name}</p>
                <p>Tanggal: ${date}</p>
                <p>Review: ${review}</p>
                <br />`).join('')}
            </div>
        </li>
      </ul>
    </div>
</div>
</section
`;

const createRestoItemTemplate = (dataRest) => `
<section class="content">  
  <div class="post_item">
      <div class="post_item_content">
        <img class="post_item_thumb" loading="lazy" width="200px" height="200px" src="${dataRest.pictureId ? CONFIG.BASE_IMAGE_URL + dataRest.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${dataRest.name}" title="${dataRest.name}">
        <div class="city">
          ${dataRest.city}
        </div>
        <p class="post_item_rating">⭐️<span class="post_item_rating_value">${dataRest.rating}</span></p>
        <p><a href="/#/detail/${dataRest.id}" class="post_title">${dataRest.name}</a></p>
        <div class="post_item_desc">
          ${dataRest.description.slice(0, 150)}...
        </div>
      </div>
  </div>
</section>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this Restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this Restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate
};
