User: creame ejemplos de esto agorimos para uso universar
Kimi: ¡Claro! A continuación, te proporciono ejemplos de algoritmos para los ejercicios que mencionaste en la imagen, con explicaciones y código en JavaScript:

### 1. Convierte Celsius a Fahrenheit
```javascript
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Ejemplo de uso
const celsius = 30;
const fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius}°C es ${fahrenheit}°F`);
// Salida: 30°C es 86°F
```

### 2. Invierte una cadena
```javascript
function invertirCadena(str) {
  return str.split('').reverse().join('');
}

// Ejemplo de uso
const str = "hola";
const strInvertida = invertirCadena(str);
console.log(strInvertida); // 'aloh'
```

### 3. Factoriza un número
```javascript
function factorizar(num) {
  const factores = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factores.push(i);
    }
  }
  return factores;
}

// Ejemplo de uso
const num = 12;
console.log(factorizar(num)); // [1, 2, 3, 4, 6, 12]
```

### 4. Encuentra la palabra más larga en una cadena
```javascript
function palabraMasLarga(str) {
  const palabras = str.split(' ');
  let maxPalabra = '';
  for (let palabra of palabras) {
    if (palabra.length > maxPalabra.length) {
      maxPalabra = palabra;
    }
  }
  return maxPalabra;
}

// Ejemplo de uso
const str = "JavaScript es un lenguaje de programación";
console.log(palabraMasLarga(str)); // 'programación'
```

### 5. Devuelve los números mayores en los arreglos
```javascript
function numerosMayores(arreglos) {
  return arreglos.map(arr => Math.max(...arr));
}

// Ejemplo de uso
const arreglos = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(numerosMayores(arreglos)); // [3, 6, 9]
```

### 6. Confirma el final
```javascript
function confirmarFinal(str, target) {
  return str.endsWith(target);
}

// Ejemplo de uso
const str = "hola";
const target = "la";
console.log(confirmarFinal(str, target)); // true
```

### 7. Repite una cadena
```javascript
function repetirCadena(str, veces) {
  return str.repeat(veces);
}

// Ejemplo de uso
const str = "Hola ";
const veces = 3;
console.log(repetirCadena(str, veces)); // 'Hola Hola Hola '
```

### 8. Recorta una cadena
```javascript
function recortarCadena(str, maxLen) {
  if (str.length > maxLen) {
    return str.substring(0, maxLen);
  }
  return str;
}

// Ejemplo de uso
const str = "Hola, mundo!";
const maxLen = 5;
console.log(recortarCadena(str, maxLen)); // 'Hola,'
```

### 9. Buscadores guardianes
```javascript
function buscadoresGuardianes(arreglo, valor) {
  return arreglo.includes(valor);
}

// Ejemplo de uso
const arreglo = [1, 2, 3, 4, 5];
const valor = 3;
console.log(buscadoresGuardianes(arreglo, valor)); // true
```

### 10. Boo who (Booleano Quién)
```javascript
function booWho(valor) {
  return typeof valor === 'boolean';
}

// Ejemplo de uso
const valor = true;
console.log(booWho(valor)); // true
```

### 11. Haz que la primera letra de una palabra esté en mayúscula
```javascript
function primeraMayuscula(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Ejemplo de uso
const str = "hola";
console.log(primeraMayuscula(str)); // 'Hola'
```

### 12. Cortar y rebanar
```javascript
function cortarRebanar(arreglo) {
  return arreglo.slice(1);
}

// Ejemplo de uso
const arreglo = [1, 2, 3, 4];
console.log(cortarRebanar(arreglo)); // [2, 3, 4]
```

### 13. Rebote falsy
```javascript
function reboteFalsy(arreglo) {
  return arreglo.filter(Boolean);
}

// Ejemplo de uso
const arreglo = [0, 1, false, 'Hola', '', null, undefined];
console.log(reboteFalsy(arreglo)); // [1, 'Hola']
```

### 14. Dónde pertenezco
```javascript
function dondePertenezco(arreglo, num) {
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > num) {
      return i;
    }
  }
  return arreglo.length;
}

// Ejemplo de uso
const arreglo = [1, 3, 5, 7];
const num = 4;
console.log(dondePertenezco(arreglo, num)); // 2
```

### 15. Mutaciones
```javascript
function mutaciones(str1, str2) {
  const letrasStr1 = str1.toLowerCase().split('');
  const letrasStr2 = str2.toLowerCase().split('');
  return letrasStr2.every(letra => letrasStr1.includes(letra));
}

// Ejemplo de uso
const str1 = "Hola";
const str2 = "Ol";
console.log(mutaciones(str1, str2)); // true
```

### 16. Monito Trocitos
```javascript
function monitoTrocitos(str, divisor) {
  const divisores = divisor.split('');
  let result = '';
  for (let c of str) {
    if (divisores.includes(c)) {
      result += divisor;
    } else {
      result += c;
    }
  }
  return result;
}

// Ejemplo de uso
const str = "Hola";
const divisor = "A";
console.log(monitoTrocitos(str, divisor)); // 'HAAAA'
```

Espero que estos ejemplos te sean útiles para tus proyectos universitarios. Si necesitas más detalles o ayuda con algún otro ejercicio, ¡no dudes en preguntar! 😊
