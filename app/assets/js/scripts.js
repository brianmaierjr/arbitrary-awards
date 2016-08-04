/*!
 * arbitrary-awards
 * The best at being the most arbitrary
 * https://brianmaierjr.github.io/arbitrary-awards
 * @author Brian Maier Jr.
 * @version 1.0.0
 * Copyright 2016. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  var quotes = [
    'longest bong rip recorded on a flip phone',
    'best website in a category that is a subcategory of a random industry',
    'most clever logo containing an animal with 3-4 legs',
    'worst in-law to a snow leopard',
    'first runner-up for most staples in a packet on the third floor',
    'most audible treble in the church choir',
    'baldest tires during the winter',
    'sexiest stare into the eyes of a lover',
    'best one handed pushup while wearing a diaper',
    'sexiest website domain using the words quest and jello',
    'most stylish millennial in milwaukee',
    'most accurate portrayal of a lovable racist in a B level movie',
    'most confused drivers ed instructor from Belarus',
    'douchiest animal mascot in D3 College Football',
    'sexiest on screen kiss with an actor named leonard',
    'most touching tribute to el chapo',
    'most sexually charged cartoon from the 1950’s',
    'biggest advocate for freedom of speech in a school for the blind',
    'longest fast food order only from the dollar menu',
    'creepiest bear created at the build-a-bear workshop',
    'worst explanation of Michael Jackson’s pedophilia',
    'sandiest bag after a day at the beach',
    'fastest attainment of a black belt while doing the least amount of work',
    'proudest American while visiting a foreign country',
    'best actor in a trilogy based on taxidermy',
    'sexiest worker in the Fast Food court at the mall',
    'Sassiest Horseshoe Crab Halloween Outfit',
    'Best Me Without You Karaoke rendition while wearing a Stussy beanie',
    'Most convincing Nicholas Cage body double',
    'Best use of Tabasco Sauce for purposes other than eating or snorting',
    'Most underwhelming caption on a viral video',
    'Worst design agency in Louisville',
    'Most mediocre webinar about the benefits of Lavender',
    'Strongest Vegan in Vermont',
    'The #3 ranked Racquetball Player in the state of Kentucky',
    'Jaywalker with the most swag',
    'Most inspiring speech with Def Leopard playing in the background',
    'Creator of the largest make believe river in Idaho',
    'Least likely to perish from the talons of a Peacock',
    'Best fight scene involving a watermelon as a prop/weapon',
    'Most erotic cryer',
    'Best charades demonstration of Seal’s Kiss From a Rose',
    'Most influential golfer from Louisiana',
    'Most sexually indecisive polygamist',
    'Ugliest selfie face',
    'longest fart inside an enclosed car',
    'recipient of the most arbitrary award',
    'greasiest hands post waffle house',
    'hairiest eyebrows in your family',
    'worst dental hygiene habits of your immediate family',
    'best instagram comment on a photo with more than 100 likes',
    'steamiest imaginary shower scene',
    'grandest powerpoint presentation on how to use powerpoint',
    'most likely to vote for donald trump',
    'funniest avatar on your work IM client',
    'longest running joke about the Kardashians',
    'biggest complainer about back pain due to sexual activity',
    'most likely to be mauled by a dog in heat',
    'Dankest Meme Maker in the Continental U.S.',
    'Most grounded cornhole player',
    'Best usage of the words high-falutin in a casual conversation about pickles',
    'Kindest bounty hunter',
    'Most face tattoos while holding down a full time corporate job',
    'Best air guitar performance to a song that has no actual guitar in it',
    'Loudest audience member at a high school field hockey game',
    'Grandest entrance into a golden corral while drunk',
    'Best darth vader impression into the back of a fan',
    'Most bedazzled horse saddle east of the mississippi river',
    'Most painful yoda impression at a starbucks',
    'Frothiest cappuccino maker while high on life',
    'Grumpiest grandparent of an ugly duckling',
    'Shortest travel time to the nearest bathroom',
    'Most efficient use of toilet paper while going #2',
    'Creepiest stare while at a urinal',
    'Best gluten free side dish at a non gluten free potluck',
    'Least arousing spotify playlist',
    'Best comeback based on the Novel Push by sapphire',
    'Most disingenuous public cryer',
    'Worst lemon meringue pie recipe',
    'Most gripping use of IMHO',
    'Most aggressive softball player in a work league',
    'Strangest use of a fedora while underwater',
    'Most tempting use of asparagus in a dessert',
  ];
  var rand = quotes[Math.floor( Math.random() * quotes.length )];
  $('.randomAward').text(rand);
  $('.awardTrigger').click(function(){
    $('.randomAward').text(quotes[Math.floor( Math.random() * quotes.length )]);
    return false;
  });
  $('.printTrigger').click(function(){
    window.print();
    return false;
  });
  $('.tweet').click(function(){
    $('.tweet a').attr('href','https://twitter.com/intent/tweet?text='+encodeURIComponent(rand));
  });

  // jQuery.editable
  $('.nameTrigger').editable('click', function(e){
    return false;
  });

  // Social Sharing
  $('.shareTrigger').click(function() {
    $('#share').toggleClass('active');
    return false;
  });

  function windowPopup(url, width, height) {
    // Calculate the position of the popup so
    // it’s centered on the screen.
    var left = (screen.width / 2) - (width / 2),
        top = (screen.height / 2) - (height / 2);

    window.open(
      url,
      '',
      'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=' + width + ',height=' + height + ',top=' + top + ',left=' + left
    );
  }

  $('.js-social-share').on('click', function(e) {
    e.preventDefault();

    windowPopup($(this).attr('href'), 500, 300);
  });


})(jQuery, window, document);
