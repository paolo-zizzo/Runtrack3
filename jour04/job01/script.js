$( document ).ready(function() {
$("#button").click(function(){

    $.ajax({
        url:'expression.txt',
        type:'POST',
        datatype:'text',
    success: function(data){
        $('#texte').text(data);
    }
    });
});
});