function jsonValueKey(key, value) {

    return key[value];

}
    
$(document).ready(function(){
	$("#button").click(function(){

   

var chaine = {name: "La Plateforme_", address: "8 rue d'hozier", city: "Marseille", nb_staff: "11", creation:"2019"};
console.log(jsonValueKey(chaine, "nb_staff"));


  });
});