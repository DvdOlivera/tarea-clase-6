document.querySelector("#boton-integrantes").addEventListener("click",validarCantidadIntegrantes);

function validarCantidadIntegrantes (){
    const numeroIntegrantes = document.querySelector("#numero-integrantes").value;

    if (Number(numeroIntegrantes) === 0){
        document.querySelector("#error-cantidad-integrantes").className ="";
    }
    else {
        document.querySelector("#error-cantidad-integrantes").className ="oculto";
        crearSegundaSeccionFormulario (numeroIntegrantes);
    }
};

function crearSegundaSeccionFormulario (integrantes){
    document.querySelector("#primera-seccion-formulario").classList.add("oculto");
    const segundaSeccionFormulario = document.createElement("div");
    segundaSeccionFormulario.setAttribute("id","segunda-seccion-formulario");
    document.querySelector("#formulario").appendChild(segundaSeccionFormulario);

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

        if ( Number(edad.value) !== 0 ){
            edad.classList.remove("marcar-error-input-edad");             
              errores= errores + 1;
        }
    
       else { 
            
            edad.classList.add("marcar-error-input-edad");
            errores= errores - 1;
        }

    })   
    

    errores===Number($edades.length)? (document.querySelector("#alertaedadintegrantes").classList.add("escondido"), organizarEdadesIntegrantes($edades)):(document.querySelector("#alertaedadintegrantes").classList.remove("escondido"),document.querySelector("#resultado").innerHTML="");

    errores = 0;

};


function organizarEdadesIntegrantes($edades){
    const edades=[];
    for (i=0;i<$edades.length;i++){ 

    edades[i] =Number($edades[i].value);
    }
    console.log(edades)
    edades.sort((a, b) => a - b);
    const promedio = sacarPromedio(edades);
    const edadIntegranteMasJoven = edades[0];
    const edadeItegranteMasGrande = edades[edades.length - 1];
    imprimirResultado(edadIntegranteMasJoven,edadeItegranteMasGrande,promedio);
};


function sacarPromedio(numeros){
    console.log(numeros)
    const sum = numeros.reduce((previous, current) => current += previous);
    return sum / numeros.length
};


function imprimirResultado(joven,grande,promedio){
    document.querySelector("#resultado").innerHTML =(`El intergrante más joven tiene ${joven} años,el más grande tiene ${grande} años y el promedio es de ${promedio} años`);
};

function resetear() {
    document.querySelector('#formulario').reset();
    document.querySelector("#primera-seccion-formulario").classList.remove("oculto");
    document.querySelector("#segunda-seccion-formulario").innerHTML="";
    document.querySelector("#alertaedadintegrantes").classList.add("escondido");
    document.querySelector("#resultado").innerHTML="";
};




