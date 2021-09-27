document.querySelector("#boton-integrantes").addEventListener("click",validarCantidadIntegrantes);

function validarCantidadIntegrantes (){
    const numeroIntegrantes = document.querySelector("#numero-integrantes").value;

    if (Number(numeroIntegrantes) <= 0){
       mostrarTextoErrorCantidadIntegrantes();
    }
    else if (Number(numeroIntegrantes)>100){
        mostrarTextoErrorCantidadIntegrantes();
    }
    else {
        ocultarTextoErrorCantidadIntegrantes();
        crearSegundaSeccionFormulario (numeroIntegrantes);
    }
};

function crearSegundaSeccionFormulario (integrantes){

    ocultarPrimeraSeccionFormulario();
    const segundaSeccionFormulario = document.createElement("div");
    segundaSeccionFormulario.setAttribute("id","segunda-seccion-formulario");
    document.querySelector("#contenedor-segunda-seccion-formulario").appendChild(segundaSeccionFormulario);

for (let i=0;i< integrantes;i++){
    const nuevoInput = document.createElement("input");
    nuevoInput.setAttribute("class","edades");
    nuevoInput.setAttribute("type","Number");
    const nuevoLabel= document.createElement("label");
    document.querySelector("#segunda-seccion-formulario").appendChild(nuevoLabel);
    document.querySelector("#segunda-seccion-formulario").appendChild(nuevoInput);
    nuevoLabel.innerHTML="Ingresá sus edades";
    nuevoLabel.setAttribute("for","edades");
  
    }
    const botonEdades = document.createElement("button");
    botonEdades.setAttribute("class","boton-ingresar-edades");
    botonEdades.innerHTML="CALCULAR"  ;
    botonEdades.setAttribute("type","submit");
    document.querySelector("#segunda-seccion-formulario").appendChild(botonEdades);
    botonEdades.addEventListener("click",validarEdadesIntegrantes);

    const botonResetear = document.createElement("button");
    botonResetear.setAttribute("class","boton-resetear");
    botonResetear.innerHTML="Resetear"  ;
    document.querySelector("#segunda-seccion-formulario").appendChild(botonResetear);
    botonResetear.addEventListener("click",resetear);
    


};


function validarEdadesIntegrantes (){

   

    const $edades = document.querySelectorAll(".edades");

    let errores = 0;

    $edades.forEach(edad =>{

        if ( Number(edad.value) <= 0){
            edad.classList.add("marcar-error-input-edad");
            errores= errores - 1;
        }

        else if (Number(edad.value) >= 150){
            edad.classList.add("marcar-error-input-edad");
            errores= errores - 1;

        }
    
       else { 
        edad.classList.remove("marcar-error-input-edad");             
        errores= errores + 1;

        }

    })   
    

    errores===Number($edades.length)? (ocultarTextoErrorEdadIntegrantes(), clasificarEdadesIntegrantes($edades)):(mostrarTextoErrorEdadIntegrantes(),borrarResultado());

    errores = 0;

};




function clasificarEdadesIntegrantes($edades){
    const edades=[];

    for (i=0;i<$edades.length;i++){ 

    edades[i] =Number($edades[i].value);
    }
    edades.sort((a, b) => a - b);
    const promedio = sacarPromedio(edades);
    const edadIntegranteMasJoven = edades[0];
    const edadeItegranteMasGrande = edades[edades.length - 1];
    const respuesta = {
        edadIntegranteMasJoven,
        edadeItegranteMasGrande,
        promedio
       };
    imprimirResultado(respuesta);
};


function sacarPromedio(numeros){
  
    const sum = numeros.reduce((previous, current) => current += previous);
    return sum / numeros.length
};


function imprimirResultado(respuesta){
    
    document.querySelector("#resultado").innerHTML =(`El intergrante más joven tiene ${respuesta.edadIntegranteMasJoven} años,el más grande tiene ${respuesta.edadeItegranteMasGrande} años y el promedio es de ${respuesta.promedio} años`);
};

function resetear() {
    document.querySelector('#formulario').reset();
    mostrarPrimeraSeccionFormulario();
    borrarSegundaSeccionFormulario();
    ocultarTextoErrorEdadIntegrantes();
    borrarResultado();
};

function mostrarTextoErrorCantidadIntegrantes(){
    document.querySelector("#error-cantidad-integrantes").classList.remove("oculto");
};

function ocultarTextoErrorCantidadIntegrantes(){
    document.querySelector("#error-cantidad-integrantes").classList.add("oculto");
};

function mostrarPrimeraSeccionFormulario (){
    document.querySelector("#contenedor-primera-seccion-formulario").classList.remove("oculto");
};

function ocultarPrimeraSeccionFormulario(){
    document.querySelector("#contenedor-primera-seccion-formulario").classList.add("oculto");
}
function ocultarTextoErrorEdadIntegrantes(){
    document.querySelector("#alerta-error-edad-integrantes").classList.add("escondido");
};

function mostrarTextoErrorEdadIntegrantes(){
    document.querySelector("#alerta-error-edad-integrantes").classList.remove("escondido");
};

function borrarSegundaSeccionFormulario(){
    document.querySelector("#contenedor-segunda-seccion-formulario").innerHTML="";
};

function borrarResultado(){
    document.querySelector("#resultado").innerHTML="";
};




