Taller investigativo REACT

Por:
josef lopez serna


Actividad:
Parte 1: Investigación (Teoría) 
##1. ¿Qué es React?
React es una biblioteca de JavaScript creada por Meta para construir interfaces de usuario dinámicas y reutilizables, especialmente en aplicaciones web. Se basa en componentes, usa una sintaxis llamada JSX, y trabaja con un DOM virtual para mejorar el rendimiento. Los datos fluyen en una sola dirección y se pueden manejar con Hooks como useState. Es ideal para desarrollar interfaces modernas y eficientes.

##2. ¿Por qué usar React?
Usar React es ideal porque permite construir interfaces web dinámicas, rápidas y reutilizables. Su estructura basada en componentes facilita el mantenimiento y la organización del código. Además, gracias al DOM virtual, mejora el rendimiento al actualizar solo lo necesario en la página. Es ampliamente usado, tiene gran comunidad y muchas herramientas que lo complementan.


##3. ¿Qué necesito saber antes?
Antes de aprender React, es recomendable tener conocimientos sólidos en los siguientes temas:
HTML:
 Para estructurar el contenido de las páginas.


CSS:
 Para dar estilo a los elementos de la interfaz.


JavaScript (ES6+):
 Es esencial conocer:


Variables (let, const)


Funciones flecha (() => {})


Destructuración de objetos y arreglos


Funciones como .map(), .filter(), .forEach()


Promesas y fetch()


Módulos (import / export)


DOM y eventos en JavaScript:
 Saber cómo funciona el DOM y cómo se manejan eventos como clics o envíos de formularios.


Conceptos básicos de programación:
 Como condiciones (if), ciclos (for, while), arrays, objetos y funciones.



##Parte 4: Investigación Guiada
Busca en internet, responde y busca un código de ejemplo:
##¿Qué es JSX?
JSX es una sintaxis que permite escribir HTML dentro de JavaScript en React. Hace el código más fácil de leer y escribir.
Ejemplo:
jsx
CopiarEditar
const Titulo = () => <h1>Hola, mundo</h1>;


##¿Qué es un componente funcional?
Es una función de JavaScript que retorna JSX. Representa una parte de la interfaz (como un botón o una tarjeta).
Ejemplo:
jsx
CopiarEditar
function Saludo() {
  return <p>¡Bienvenido a React!</p>;
}


##¿Qué son los props en React?
Los props (propiedades) son datos que se pasan de un componente padre a uno hijo, como parámetros de función.
Ejemplo:
jsx
CopiarEditar
function Saludo(props) {
  return <h2>Hola, {props.nombre}</h2>;
}

// Uso:
<Saludo nombre="Ana" />

##¿Cómo se actualiza la pantalla automáticamente al cambiar datos?
React actualiza la pantalla automáticamente cuando cambia el estado (state) de un componente. Esto se logra con useState.
Ejemplo:
jsx
CopiarEditar
const [contador, setContador] = useState(0);

<button onClick={() => setContador(contador + 1)}>
  Contador: {contador}
</button>


##¿Qué hace el useState?
es un hook que permite crear y actualizar un valor en el estado del componente. Cuando el estado cambia, React vuelve a renderizar la interfaz.
Ejemplo completo:
jsx
CopiarEditar
import React, { useState } from 'react';

function Contador() {
  const [numero, setNumero] = useState(0);

  return (
    <div>
      <p>Contador: {numero}</p>
      <button onClick={() => setNumero(numero + 1)}>Aumentar</button>
    </div>
  );
}
