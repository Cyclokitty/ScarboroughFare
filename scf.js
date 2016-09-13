$(document).ready(function(){

  $('a.nav').click(function(e){
    e.preventDefault();
    $('a.nav').removeClass('active');
    $(this).addClass('active');
  });

  $('.nav-about').click(function(e) {
    e.preventDefault();
    $('#message').show().html('<div class="row"><div class="col-sm-9"><p>Our monastery was founded in 1100 in Ireland and survived peacefully separated from the world until the music of The Rolling Stones possessed our Abbot. He, with divine influence (Keith), made the decision to bring our brothers to North America because "Rock is the way!"</p></div></div>' + '<div class="row"><div class="col-sm-9"><p>After years of following concerts and festivals across North America, we settled in Scarborough. With all honesty, our VW camper broke down and we did not have the money to fix it. So, we squatted in an abandoned inn and made the best of it.</p></div></div>' + '<div class="row"><div class="col-sm-9"><p>Due to a rather abysmal food budget, we returned to our medieval roots and ate simply. Pottage from grains and legumes, stews made from our own vegetable garden, fresh cheese from our goat milk, and roasted meat on a spit.</p></div></div>' + '<div class="row"><div class="col-sm-9"><p> Now, we share our authentic medieval dishes with our guests.</p></div></div>');

  });

  $('.nav-menu').click(function(e) {
    e.preventDefault();
    $('#message').show().html('<div class="row"><div class="col-sm-9"><h3>Summer Menu</h3></div></div><div class="row"><div class="col-sm-9"><p>Starter: fresh mixed green salad with house dressing</p></div></div><div class="row"><div class="col-sm-9"><p>Bread: Fresh baked rye toast with a plum relish and smooth goat cheese</p></div></div><div class="row"><div class="col-sm-9"><p>Choice of Mains:</p></div></div><div class="row"><div class="col-sm-9"><p>Roast beef and onion gravy. Parsnip & turnip mash. Honeyed carrots.</p></div></div><div class="row"><div class="col-sm-9"><p>Poultry: Stewed hen with carrots and leeks. Peas pottage. Sauteed beet greens.</p></div></div><div class="row"><div class="col-sm-9"><p>Vegetarian: Peas pottage with greens. Honeyed carrots and garlic roasted parnsips</p></div></div><div class="row"><div class="col-sm-9"><p>Choice of Desserts:</p></div></div><div class="row"><div class="col-sm-9"><p>Sugared Almonds and Sweetmeats</p></div></div><div class="row"><div class="col-sm-9"><p>Selection of cheese, sesame crackers, and fruit</p></div></div><div class="row"><div class="col-sm-9"><p>Shortbread cookies</p></div></div><div class="row"><div class="col-sm-9"><p>Beer, wine and cider too!</p></div></div>');

  });

  $('.nav-contact').click(function(e) {
    e.preventDefault();
    $('#message').show().html('<div class="row"><div class="col-sm-9"><p>Located at the Scarborough Bluffs, behind our monastery in a grotto.</p></div></div>' + '<div class="row"><div class="col-sm-9"><p>To make reservations, leave a note with Brother Peter at the front gate. We will send a messenger pigeon with a confirmation.</p></div></div>');

  });

  $('.nav-reviews').click(function(e) {
    e.preventDefault();
    $('#message').show().html('<div class="row"><div class="col-sm-9"><p>My sister and I signed up for the annual "Goat Shearing & Cider Feast" and we were not disappointed! The wool from Esme the goat will make a lovely pair of slippers for my husband. He suffers from lousy blood circulation and only woolie slippers keep him cozy. We enjoyed  a large pewter mug filled with delicious cider made from the apples around the monastery and for an early dinner we ate hearty rye bread, onion soup, a marvellous cheeseplate, and fiery plum pudding! We will absolutely dine here again! </p></div></div>' + '<div class="row"><div class="col-sm-9"><p>Charmain from North Toronto</p></div></div>' + '<div class="row"><div class="col-sm-9"><p>My buddy Don watches far too much TVO and always talks about some tv program about old fashioned farms. When he found out about this medieval style restaurant he made it clear I would never get to use his riding mower again if I did not go with him. I guessed we would order smoked turkey drumsticks from tavern wenches except turkeys are a New  World bird and not found in medieval British Isles. And this place is run by monks so no pretty ladies in tight bodices. The food was okay except I had no idea that this place was that dedicated to eating all medieval. It was February when we went and we were served oat and pea porridge, smoked fish (it was Friday, naturally), and a heavy bread. Rye? At least the beer was excellent. Dessert was cheese and baked apples with goat milk custard. Don says we have to come back in autumn for their harvest feast. He does have a really good riding mower so that will be my autumn.  </p></div></div>' + '<div class="row"><div class="col-sm-9"><p>Gavin from Pefferlaw</p></div></div>' + '<div class="row"><div class="col-sm-9"><p>The meal was delicious and I\'ve never eaten a finer soft goat cheese or more robust mug of cider but I have many doubts about the monastery\'s strict adherence to the Rules of Saint Benedict. Most worryingly was the music because I was excited when the psaltery and lyre ensemble arrived. Except I think they were playing "Angie"? And then "Brown Sugar"? </p></div></div>' + '<div class="row"><div class="col-sm-9"><p>Curt from Hamilton, Ontario</p></div></div>');
  });



});
