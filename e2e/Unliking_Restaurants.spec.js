Feature('Unliking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
  });



Scenario(' Membuka detil Restaurant',  ({ I }) => {

  I.amOnPage('/');

  I.seeElement('.post_title');
  I.click(locate('.post_title').first());

   
  I.seeElement('#likeButton');
  I.click('#likeButton');

});

Scenario('Melihat Restaurant Favorite',  ({ I }) => {

  I.amOnPage('/#/favorite');

   I.seeElement('.headline-title');
  
  I.seeElement('.post_title');
  I.click(locate('.post_title').first());

   
  I.seeElement('#likeButton');
  I.click('#likeButton');
});