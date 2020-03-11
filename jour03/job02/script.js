function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}







$(document).ready(function() {
 
    $('#button').click(function() {
   var tab=[1,2,3,4,5,6];
   shuffle(tab);

   for (j=0; j<tab.length; j++)
   {

    $("#" +tab[j]).prependTo("#melangees");

   }

   $("img").click(function(){
    $(this).appendTo("#rangees");

   });
    });
});

