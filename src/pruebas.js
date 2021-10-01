

function probarValidarCantidadIntegrantes() {
    console.assert(
        validarCantidadIntegrantes(0) === true,
        'ValidarCantidadIntegrantes no validó que la cantidad de integrantes sea mayor a 0'
    );

    console.assert(
        validarCantidadIntegrantes(555) === true,
        'ValidarCantidadIntegrantes no validó que la cantidad de integrantes sea menor o igual a 50'
    );
  
  }


  probarValidarCantidadIntegrantes();

  