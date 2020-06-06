var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc == '../web/images/mexico.png') {
      miImage.setAttribute('src','../web/images/brasil.png');
  }
    
else if (miSrc == '../web/images/brasil.png') {
      miImage.setAttribute('src','../web/images/china.png');
  }
else if (miSrc == '../web/images/china.png') {
      miImage.setAttribute('src','../web/images/argentina.png');
  }  
else if (miSrc == '../web/images/argentina.png') {
      miImage.setAttribute('src','../web/images/alemania.png');
  } 
else if (miSrc == '../web/images/alemania.png') {
      miImage.setAttribute('src','../web/images/estados unidos.png');
  }   

else if (miSrc == '../web/images/estados unidos.png') {
      miImage.setAttribute('src','../web/images/uruguay.png');
  } 

else if (miSrc == '../web/images/uruguay.png') {
      miImage.setAttribute('src','../web/images/costarica.png');
  }  

else{
miImage.setAttribute('src','../web/images/mexico.png');
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
 
