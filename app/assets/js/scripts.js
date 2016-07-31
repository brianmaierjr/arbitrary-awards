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

 // ID of the Google Spreadsheet
 var spreadsheetID = "1Jynmd4opq3SHzLCRP6ooQ5Uqll60Y9V83RpDsjJbqTA";

 // Make sure it is public or set to Anyone with link can view
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";

 $.getJSON(url, function(data) {

  var entry = data.feed.entry;

  $(entry).each(function(){
    $('#award-text').prepend('<h2>'+this.gsx$award.$t+'</h2>');
  });

 });

})(jQuery, window, document);



