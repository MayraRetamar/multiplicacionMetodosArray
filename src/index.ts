/*• Implemente un método llamado “multiplicarArreglo” que recibe 
como parámetros tres arreglos de Enteros del mismo tamaño
• Los dos primeros arreglos contienen los números que se quieren 
multiplicar
• El tercer arreglo almacena el cálculo de la multiplicación de cada 
posición de los dos arreglos
• Utilice este método para multiplicar los siguientes cuatro arreglos 
de tres elementos*/
let multiplicarArreglo = (
  v1: number[],
  v2: number[],
  arregloMultiplicacion: number[],
  longitud: number
): number => {
  let indice: number;

  for (indice = 0; indice < longitud; indice++) {
    arregloMultiplicacion[indice] = v1[indice] * v2[indice];
  }
  return arregloMultiplicacion[indice];
};

//FUNCION CARGAR VECTOR

let cargarVector = (v: number[], cantidad: number) => {
  let i: number;
  for (i = 0; i < cantidad; i++) {
    v[cantidad] = Number(prompt("Cargar los numeros del vector " + cantidad));
  }
  return v;
};

//FUNCION MOSTRAR VECTOR

let mostrarVector = (v: number[], cantidad: number) => {
  let indice: number;
  for (indice = 0; indice < cantidad; indice++) {
    console.log(v[indice] + " ");
  }
};

//MULTIPLICAR LOS DOS ARREGLOS Y GUARDAR EL RESULTADO EN OTRO VECTOR

/*let dimension = Number(prompt("Ingrese la longitud del arreglo"));
let vector1: number[] = new Array(dimension);
let vector2: number[] = new Array(dimension);
let resultado: number[] = new Array(dimension);

console.log("Cargando vector 1");
cargarVector(vector1, dimension);
console.log("Cargando vector2");
cargarVector(vector2, dimension);

multiplicarArreglo(vector1, vector2, resultado, dimension);

console.log("Valores de resultado");
mostrarVector(resultado, dimension);*/

//multiplicar los cuatro vectores

let v1: number[] = new Array(3);
let v2: number[] = new Array(3);
let v3: number[] = new Array(3);
let v4: number[] = new Array(3);
let vResultado1: number[] = new Array(3);
let vResultado2: number[] = new Array(3);
let vTotal: number[] = new Array(3);

console.log("Cargando vector 1");
cargarVector(v1, 3);
console.log("Cargando vector 2");
cargarVector(v2, 3);
console.log("Cargando vector 3");
cargarVector(v3, 3);
console.log("Cargando vector 4");
cargarVector(v4, 3);

multiplicarArreglo(v1, v2, vResultado1, 1);
multiplicarArreglo(v3, v4, vResultado2, 1);
multiplicarArreglo(vResultado1, vResultado2, vTotal, 1);

console.log("Resultado de la multiplicacion de los 4 vectores en posivion 1");

mostrarVector(vTotal, 1);
