$( document ).ready(function() {
$("#button").click(function(){

    $.ajax({
        url:'pokemon.json',
        type:'GET',
    success: function(data){
        console.log(data)
    }
    });
});
});