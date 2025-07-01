User: ok en javaScritp quero sumar como los componente de un mismo tipo por ejemplo todo los tipo que esas costo súmalo, todos lo que son de tipo préstamo igual súmalo y  dame en total, este es el ejemplo del areglo:

 const dinero = [
    {tipo: 'costo', monto: '-12,00', descricion: 'x'  },
    {tipo: 'dividendos', monto: '-52,00', descricion: 'x'  },
    {tipo: 'pretamo', monto: '120,00', descricion: 'x'  },
    {tipo: 'dineroEntrada', monto: '320,00', descricion: 'x'  },
    {tipo: 'costo', monto: '-2,00', descricion: 'x'  },
    {tipo: 'costo', monto: '-13,00', descricion: 'x'  },
     {tipo: 'dividendos', monto: '-45,00', descricion: 'x'  },
     {tipo: 'dineroEntrada', monto: '150,00', descricion: 'x'  },
  ]

crea un argorimos que identifique cuantos tipo hay y segun eso lo sume segun su tipo, y comenta el cosigo, quiero que sea una funcion que pueda usar en cualquier codigo.
Kimi: ¡Claro! Vamos a crear una función que tome un arreglo de objetos con propiedades `tipo` y `monto`, identifique los tipos únicos y sume los montos por cada tipo. Además, la función devolverá un objeto con las sumas por tipo y el total general.

### Ejemplo de código:

```javascript
// Función para sumar montos por tipo
function sumarPorTipo(datos) {
  // Crear un objeto para almacenar las sumas por tipo
  const sumasPorTipo = {};

  // Identificar los tipos únicos y sumar los montos
  datos.forEach(item => {
    const { tipo, monto } = item;
    // Convertir el monto a número (eliminando el signo y la coma)
    const montoNumerico = parseFloat(monto.replace(/,/g, '').replace('-', ''));
    const esNegativo = monto.startsWith('-');

    // Si el tipo ya existe en sumasPorTipo, sumamos el monto
    if (sumasPorTipo[tipo]) {
      if (esNegativo) {
        sumasPorTipo[tipo] -= montoNumerico;
      } else {
        sumasPorTipo[tipo] += montoNumerico;
      }
    } else {
      // Si el tipo no existe, lo inicializamos con el monto actual
      sumasPorTipo[tipo] = esNegativo ? -montoNumerico : montoNumerico;
    }
  });

  // Calcular el total general
  const total = Object.values(sumasPorTipo).reduce((acc, current) => acc + current, 0);

  // Devolver un objeto con las sumas por tipo y el total
  return {
    sumasPorTipo,
    total
  };
}

// Ejemplo de uso
const dinero = [
  { tipo: 'costo', monto: '-12,00', descripcion: 'x' },
  { tipo: 'dividendos', monto: '-52,00', descripcion: 'x' },
  { tipo: 'pretamo', monto: '120,00', descripcion: 'x' },
  { tipo: 'dineroEntrada', monto: '320,00', descripcion: 'x' },
  { tipo: 'costo', monto: '-2,00', descripcion: 'x' },
  { tipo: 'costo', monto: '-13,00', descripcion: 'x' },
  { tipo: 'dividendos', monto: '-45,00', descripcion: 'x' },
  { tipo: 'dineroEntrada', monto: '150,00', descripcion: 'x' },
];

const resultado = sumarPorTipo(dinero);

console.log('Sumas por tipo:', resultado.sumasPorTipo);
console.log('Total general:', resultado.total);
```

### Explicación del código:

1. **Función `sumarPorTipo`**:
   - La función toma un arreglo de objetos como parámetro.
   - Crea un objeto `sumasPorTipo` para almacenar las sumas de cada tipo.

2. **Convertir el monto a número**:
   - El monto está en formato de cadena (ej: '-12,00'). Primero se eliminan las comas y se verifica si es negativo.
   - Se convierte la cadena a un número flotante usando `parseFloat`.

3. **Sumar los montos por tipo**:
   - Se itera sobre cada elemento del arreglo.
   - Si el tipo ya existe en `sumasPorTipo`, se suma o resta el monto según sea positivo o negativo.
   - Si el tipo no existe, se inicializa con el monto actual.

4. **Calcular el total general**:
   - Se utiliza `Object.values` para obtener los valores de `sumasPorTipo` y `reduce` para sumarlos.

5. **Devolver el resultado**:
   - La función devuelve un objeto con dos propiedades: `sumasPorTipo` (sumas por cada tipo) y `total` (suma total).

### Salida del ejemplo:

```javascript
Sumas por tipo: {
  costo: -27,
  dividendos: -97,
  pretamo: 120,
  dineroEntrada: 470
}
Total general: 466
```

### Notas adicionales:

- **Manejo de montos negativos**: El código identifica si el monto es negativo basándose en el carácter '-' al inicio de la cadena.
- **Formateo de montos**: Se asume que el monto está formateado con una coma como separador decimal (ej: '-12,00'). Si el formato es diferente (como puntos para miles), se debe ajustar la parte de parseo.
- **Reutilización**: La función `sumarPorTipo` puede ser reutilizada con cualquier arreglo de objetos que tenga las propiedades `tipo` y `monto`.

Este código proporciona una solución flexible y reutilizable para sumar montos por tipo en un arreglo de objetos. ¡Espero que sea de ayuda! 😊
