var compteur = 0;

function addone()

{

	var div = document.getElementById('compteur');
	compteur ++;
	div.innerHTML = compteur;
}


var button= document.getElementById('button');
button.onclick= addone;