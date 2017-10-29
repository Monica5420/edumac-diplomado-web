// comentarios de una línea
/*Para comentarios en forma de bloque
*/

/*
    Función "ready": Se encarga de ejecutar el código JS
    cuando el arbol DOM (Document Objects Model) se ha renderizado o séa
    cuando se ha terminado de hacer el HTML.

    Sintaxis es:
        $();
    Adetro del paréntesis se escribe una función anónima.
    La sintáxis de la función anónima en JS es:
            function() {}

    La sintaxis completa es:
    $(function () {code...})

    Adentro de las llaves se escribe el código que se va a ejecutar.

    Variables en JS: se utiliza la palabra reservada "var" para crear variables

    Los tipos de datos que se pueden guardar en una variable son:
    -STRING (cadenas de texto y siempre van entre comillas)
    - NUMBER (números naturales, nunca van entre comillas)
    - BOOLEAN (valores lógicos binarios: TRUE o FALSE)
    - ARRAY (Conocidos como arreglos, matrices o vectores), se pueden guardar múltiples valores.
    - OBJECT (objetos)
    -FUNCTION (Funciónes anónimas)

       var texto1="hola";
    var texto2="mundo";
    var numero1=10;
    var numero2=20;

    var resultado= numero1 + numero2;

    console.log(resultado);

    SELECTORES EN JS: sirven ara decirle al navegador a cual elemento vamos a afectar.

    Sintaxis de un selecto con jQuery:
        $("selector de tipo CSS")
    
    Objetos (OBJECT): Pueden tener "Propiedades" y/o "Métodos"

    -Propiedades: STRING, NUMBER, BOOLEAN, ARRAY, OBJECT
    -Métodos: FUNCTION

    éstas propiedades y métodos van separados por comas

        var yo = {
        nombre: "Mónica",
        apellidoPaterno: "Nicolás",
        apellidoMaterno: "Hernández",
        edad: 26,
        esMexicano: true,
        pasatiempos: ["Nadar", "Correr", "Leer"],
        mascotas: {
            perro: {
                nombre: "mauricio",
                edad: 11
            },
            gato: {
                nombre: "chavela",
                edad: 4
            }
        },
        imprimirNombreCompleto: function () {
            console.log(
                this.nombre
                + ""
                + this.apellidoPaterno
                + ""
                + this.apellidoMaterno
            );
        }

    };

    var imprimirNombreGato= function(){
        console.log(yo.mascotas.gato.nombre);
    };

    imprimirNombreGato();
    yo.imprimirNombreCompleto();


       var animal1= {
        nombre: "animal1",
        edad:10
    };

    var animal2={
        nombre: "animal2",
        tipo:"perro"
    };

    var animalCombinado= $.extend(animal1, animal2);
    console.log(animalCombinado);
*/

$(function () {
    //@variables
    var form = $("#formContact")
 
    //Set mesages values
    $.extend(
        $.validator.messages,
        {
            required:"Este campo es obligatorio",
            email:"Ingresa un correo electrónico válido",
            url:"Ingresa una URL válida",
            rangelength:" Ingresa entre {0} y {1} caracteres",
            number:"Ingresa únicamente valores numéricos",
            minlength:"Debes escribir al menos {0} caracteres",
            maxlength:" No debes exceder los {0} caracteres",

        }
    );
    //Apply validation plugin
    form.validate({
        rules:{
            formTel:{
                number: true,
                rangelength: [8,10]
            },
            formMessage: {
                minlength:50,
                maxlength:100
            }
        },
        /*
        messages:{
            formTel:{
            number: "Tiene que ser un número válido"
            }
    }*/
    });

    
    /*$.extend({} {}) Sirve para combiar dos objetos, el signo de pesos se refiere a jQuery (asi ya no se escribe jQuery)*/

 
   

});