//----JS-------

//capturamos el pie de texto que indica la edad y establecemos un valor de edad por defecto, que se corresponde con la ilustración incluida en la parte estática del HTML 
let primero = document.querySelector("#valor");
primero.innerHTML="Thirty Years";


let value = document.querySelector("#valor");
let input = document.querySelector("#age");

//añadimos un listener al input de edad, que ejecuta una serie de acciones

input.addEventListener("input", (event) => {

  //guardamos el resultado del input en una variable
  let resultado = input.value;

  //capturamos la ilustración en el HTML y pintamos la que correponde a ese resultado en función del contenido de esa variable.
  //Creando primero una función
  let dibujamelo = (a) => {
    let pinta = document.querySelector("#dibujo");
    pinta.src=`assets/images/range_0${a}.svg`;
  };
  //Y haciendo que funcione con cada resultado
  dibujamelo (resultado);

  //Asignamos un texto a cada rango de edad ofrecido por la variable

  let escribemelo = (b) => {
    let siguientes= document.querySelector("#valor");
    switch (b){
      case '1':
        siguientes.innerHTML="Three Years";
        break;
      case '2':
        siguientes.innerHTML="Eight Years";
        break;
      case '3':
        siguientes.innerHTML="Thirteen Years";
        break; 
      case '4':
        siguientes.innerHTML="Twenty One Years";
        break; 
      case '5':
        siguientes.innerHTML="Thirty Years";
        break;
      case '6':
        siguientes.innerHTML="Forty Years";
        break;
      case '7':
        siguientes.innerHTML="Fifty One Years";
        break; 
      case '8':
        siguientes.innerHTML="Sixty Five Years";
        break; 
      case '9':
        siguientes.innerHTML="??? Years";
        break; 
      
      






    }
  }
  escribemelo(resultado);

});






