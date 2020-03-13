$(document).ready(function(){
	$("#button").click(function(){
	   $.ajax({
	         type: "POST",
	         url: "users.php",
	         error:function(msg){
	                 
	                  alert( "Erreur !: " + msg );
	                  },
	         success:function(data){
	         	
				var nbr=0;
	            for(i=0; i<Object.keys(data).length;i++)
	            {
		           	if(data[i] =="{")
		           	{
		           		nbr++;
		        	}
	            }

	            $("table").remove();
		        $("#site").append('<table id="table"></table>');
		        
		        
		        


		        
	            for(i=0; i < nbr; i++)
	          	{
	          		$("#table").append('<tr id='+i+'></tr>');
	          		var result = JSON.parse(data)[i]; 
	          	
		         	for(j=0;j <Object.keys(result).length; j++  )
		         	{
		         		var champ = Object.keys(result)[j];
		         		$("#"+i).append('<td>'+ result[champ]+'</td>');


		         	}

	         	}

	         	$("td").css('text-align', 'center'); 
	         	
	  		}
 		});	
 	});


});