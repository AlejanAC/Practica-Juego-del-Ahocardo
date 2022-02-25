//{{ }} es un interpolador de strings, que incrusta una variable {{'aqui'}}
// es un decorador
import { Component } from '@angular/core';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-root', // permite renderizar automaticamente
  templateUrl: './app.component.html', // le dice cual es el archivo que contiene el codigo HTML que se inserta
  //styleUrls: ['./app.component.css'] // para agregar estilos personalizados solo a este archivo(no se utilizará)
})
export class AppComponent { // export sig que el archivo se va a utilizar en varios lugares
  //title = 'ahorcado'; // propiedad (no se utilizará)

  palabra = 'AGUACATE';
  palabraOculta = '';

  intentos = 0;
  gano = false; // si el usuario gana se cambia a true
  perdio = false; // si pierde cambia true tambien



  // se crea un arreglo que contenga todas las letras del abc, com una propiedad dentro de la clase
  // *ngFor="" es un código de Angular para el arch HTML, hace run ciclo for y clonar esta linea n cantidad de veces 
  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor (){ // es la función que se ejecuta cuando se crea una nueva instancia de la clase 'AppComponent'
    
    this.palabraOculta = '_ '.repeat(this.palabra.length); // para repetir el caracter y espacio por cada letra que tenga esa palabra
  }

  comprobar(letra: string){
    //console.log ('Letra :' + letra); muestra que letra se presiona

    this,this.existeLetra(letra);

    let palabraOcultaArr = this.palabraOculta.split(' '); // split permite separar la palabra, convertir un arreglo y dejar un espacio que corte la palabra

    //console.log(palabraOcultaArr); debe aparecer en consola el arreglo de espacios (9) ['_', '_', '_', '_', '_', '_', '_', '_', '']

    for (let i = 0; i < this.palabra.length; i++ ){

      if (this.palabra[i]=== letra){
        palabraOcultaArr[i] = letra;    
      }
    }

    this,this.palabraOculta = palabraOcultaArr.join(' '); // join permite unir la palabra y se une con un espacio
    this.verificaGane();
  }

  verificaGane(){

    const palabraArr = this.palabraOculta.split(' '); // realiza un arreglo donde obvian los espacios
    const palabraEvaluar = palabraArr.join(''); //Unir sin espacio

    if (palabraEvaluar === this.palabra){
      this.gano = true
      console.log ('Usuario GANO');
    }    
    if (this.intentos >=9){
      this.perdio = true
      console.log ('Usuario PERDIO');
      
    }
  }

  existeLetra (letra: string){

    if (this.palabra.indexOf( letra) >= 0 ){ //retornar la posición de la letra que encuentre, si no la encuentra regresa -1
      //encontro la letra
      //console.log ('Letra existe');
    }else{
      //no encontro la letra
      //console.log ('Letra no existe');
      //se debe incrementar en 1 la cantidad de intentos si la letra no existe
      this.intentos ++;
    }
  }
}
