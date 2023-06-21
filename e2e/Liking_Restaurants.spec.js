Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
  });

Scenario(' Membuka dan menyukai Restaurant di halaman detail',  ({ I }) => {

  I.amOnPage('/');

  I.seeElement('.post_title');
  I.click(locate('.post_title').first());
  
  I.seeElement('#likeButton');
  I.click('#likeButton');

});

Scenario('Melihat Restaurant Favorite',  ({ I }) => {

   I.seeElement('.post');
});