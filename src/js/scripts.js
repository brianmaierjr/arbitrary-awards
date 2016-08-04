(function ($, window, document, undefined) {

  'use strict';

 // ID of the Google Spreadsheet
 var spreadsheetID = "1Jynmd4opq3SHzLCRP6ooQ5Uqll60Y9V83RpDsjJbqTA";

 // Make sure it is public or set to Anyone with link can view
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";

 $.getJSON(url, function(data) {

  var entry = data.feed.entry;

  $(entry).each(function(){
    $('#award-text').prepend('<p>'+this.gsx$award.$t+'</p>');
  });

 });
})(jQuery, window, document);



