var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc == 'Benja/images/mexico.png') {
      miImage.setAttribute('src','Benja/images/brasil.png');
  }
    
else if (miSrc == 'Benja/images/brasil.png') {
      miImage.setAttribute('src','Benja/images/china.png');
  }
else if (miSrc == 'Benja/images/china.png') {
      miImage.setAttribute('src','/images/argentina.png');
  }  
else if (miSrc == 'Benja/images/argentina.png') {
      miImage.setAttribute('src','images/alemania.png');
  } 
else if (miSrc == 'images/alemania.png') {
      miImage.setAttribute('src','images/estados unidos.png');
  }   

else if (miSrc == 'images/estados unidos.png') {
      miImage.setAttribute('src','images/uruguay.png');
  } 

else if (miSrc == 'images/uruguay.png') {
      miImage.setAttribute('src','images/costarica.png');
  }  

else{
miImage.setAttribute('src','images/mexico.png');
}	 
	 
}

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');
function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');

if(!miNombre){
estableceNombreUusario();
}else{
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Paises con mas Importación y exportación: ' + miNombre;
}
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Paises con mas Importación y exportación: ' + nombreAlmacenado;
}
miBoton.onclick = function() {
    estableceNombreUsuario();

}
 
