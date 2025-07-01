const { promedio, desviacionEstandar } = require('@grodriguez-it/paquete-estadistica/estadisticas');
const { generarGrafico } = require('@grodriguez-it/paquete-estadistica/graficas');

const datos = [12, 25, 33, 48, 60];
const etiquetas = ['Ene', 'Feb', 'Mar', 'Abr', 'May'];

console.log("Promedio:", promedio(datos));
console.log("Desviación estándar:", desviacionEstandar(datos));

generarGrafico('public/grafica.png', etiquetas, datos)
  .then(() => {
    console.log('Gráfica generada exitosamente');
  });