// Función para generar un número aleatorio entre 1 y 20 (ambos inclusive)
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 20) + 1;
  }
  
  // Crear objeto para almacenar los resultados
  var resultados = {};
  
  // Generar 1000 números aleatorios y contar la cantidad de veces que aparece cada uno
  for (var i = 0; i < 1000; i++) {
    var numeroAleatorio = generarNumeroAleatorio();
  
    // Verificar si el número ya existe como clave en el objeto
    if (resultados[numeroAleatorio]) {
      // Si existe, incrementar su valor en 1
      resultados[numeroAleatorio] += 1;
    } else {
      // Si no existe, crear la clave y asignarle el valor inicial de 1
      resultados[numeroAleatorio] = 1;
    }
  }
  
  // Mostrar los resultados por consola
  for (var clave in resultados) {
    console.log(clave + ': ' + resultados[clave]);
  }