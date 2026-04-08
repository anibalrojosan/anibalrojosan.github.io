# Cómo aprender a programar en la era de la IA

> Esta guía se centra en como estudiar y entrenar habilidades de programación. Incluye recursos, cursos online, y libros que recomiendo. Debido a la extensión de cada sección, dedicaré posts dedicados a cada uno de ellas para profundizar en cada tema.
>
> Para explicar el 'por qué' puede que quieras aprender a programar, estoy preparando un futuro blog. 

Si estás aquí, asumo que te interesa aprender a programar (y/o que te llame la atención el concepto de 'IA'). En este blog post pretendo explicar mis recursos usados para aprender a programar de manera autodidacta estos últimos años. Si logro despertar tu curiosidad sobre como aprender esta habilidad, ya me habré dado por satisfecho. Sin más dilación, comencemos:

---

## Tabla de contenidos

- [1. Lenguajes de programación, ¿cual elegir?](#1-lenguajes-de-programacion-cual-elegir)
- [2. Recursos para aprender Python](#2-recursos-para-aprender-python)
    - [2.1 Recursos teóricos](#21-recursos-teoricos)
    - [2.2 Ejercicios prácticos](#22-ejercicios-practicos)
- [3. Como usar la IA sin sabotear tu aprendizaje](#3-como-usar-la-ia-sin-sabotear-tu-aprendizaje)
- [4. Rutinas y hábitos de estudio](#4-rutinas-y-habitos-de-estudio)
- [5. Errores comunes y como evitarlos](#5-errores-comunes-y-como-evitarlos)

---

## 1. Lenguajes de programación, ¿cual elegir? {1-lenguajes-de-programacion-cual-elegir}

Esta pregunta tiene trampa, ya que su respuesta puede ser:
- muy obvia (*Python*, obviamente que Python, si es el lenguaje de la IA ¿n, ¿por qué tanto misterio?) o,
- no tan obvia (hay miles de áreas en tecnología además de la IA, decenas de lenguajes de programación y considero que también es valioso conocer de ellos). 

En mi caso, a la hora de recomendar un lenguaje de programación, suelo primero preguntar a qué te gustaría dedicarte una vez hayas dominado ese lenguaje. En mi caso particular, descubrí Python casi por azar en un ramo de mi magíster, y por casi el mismo azar descubrí la *ciencia de datos* y el *machine learning*. Además de que la sintaxis de Python es muy legible y fácil de entender, mi elección en ese momento era bastante obvia. 

Sin embargo, actualmente recomiendo dar un vistazo a distintas áreas de la tecnologia y los lenguajes que se usan. Por ejemplo:
- *Desarrollo web*: HTML, CSS, JavaScript/TypeScript son los reyes indiscutidos.
- *Desarrollo de aplicaciones móviles*: Swift, Kotlin, Flutter son las opciones más populares.
- *High frequency trading*: Si bien Python y R son muy usados, aquí es cuando es indispensable saber de algoritmos y conocimiento de más bajo nivel, por lo que lenguajes como C++ son indispensables.
- *Desarrollo de videojuegos*: lenguajes de bajo nivel como C/C++ son muy usados, pero también motores como Unity (C#) o Godot (GDScript) son muy populares.

Esto es solo una pincelada, hay un montón de lenguajes que no he mencionado y que te invito a explorar.

LLegados a este punto ya he mencionado el concepto de 'bajo nivel'. ¿Esto indica la existencia de 'alto nivel'? ¿Qué significa *'nivel'*? Esto es un concepto que conocí mucho después ya que al principio uno se enfoca casi 100% en aprender sintáxis del lenguaje y luego en la lógica de programación (al menos lo hice así por allá en 2020 jejeje). Actualmente recomiendo aprender sobre los conceptos de *nivel* y *abstracción*. De manera simple:
- Un **lenguaje de alto nivel** (*Python*, *JavaScript*, *Java*, *C#*, etc.) es un lenguaje que se encarga de abstraer la mayor parte de la lógica de programación, dejando al programador solo con enfocarse en la lógica de su programa. Son recomendables para principiantes debido a que son 'fáciles' de leer y se encargan de muchas cosas 'bajo el capó' (el 'garbage collector' de Python es un ejemplo de esto).
- Un **lenguaje de bajo nivel** (*C*, *C++*, *Assembly*, *Rust*, etc.) son mucho más 'cercanos' al hardware (CPU, memoria, etc.), por decirlo así. Permiten que el programador tenga un control total del comportamiento fisico de su máquina. Esto los hace mucho más rápidos que sus contrapartes de alto nivel, pero también son mucho más difíciles de leer y escribir.

En términos simples, mientras más '*alto nivel*' tengamos, nos alejamos más de la máquina, nos abstraemos más de la física del hardware. Esto tiene como ventaja principal la facilidad de lectura y escritura del código, pero tiene como desventaja la velocidad de ejecución y la dificultad de debugging (por esto mismo, muchas librerías muy usadas de Python, como Numpy están escritas en C y C++ para mejorar su performance, algo fundamental en machine learning).

Recomiendo encarecidamente además de aprender sintaxis de un lenguaje, tener este tipo de nociones (velocidad de ejecución, nivel de abstracción, etc.). A largo plazo son conocimientos muy útiles que te ayudarán a tomar mejores decisiones. 

Para responder a la pregunta de '¿cual elegir?', si empezara desde cero hoy, mis recomendaciones serían: 
- Elige un lenguaje de alto nivel, aprende sintaxis básica, y fundamentos de programación. Usa este lenguaje para practicar, explorar y para saber si realmente te gusta programar (no es un hobby para todos, hay mucha frustración asociada). 
- Piensa que este lenguaje es la herramienta con la cual construir y aprender una disciplina que es la programación, es el medio por el cual crear cosas y aplicar el conocimiento teórico que irás aprendiendo.

De ahora en adelante la guía será enfocada principalmente a Python, ya que es el lenguaje que más he usado. Eventualmente siempre es bueno ampliar nuestro abanico de lenguajes que dominemos, pero hay que partir por algo.

---

## 2. Recursos para aprender Python {2-recursos-para-aprender-python}

Actualmente hay una infinidad de formas de aprender Python. Es tanto que prefiero separarlo en dos pilares fundamentales: *recursos teóricos*, *ejercicios prácticos*. ¿Debo aprender primero la teoría y luego la práctica? Actualmente con las facilidades que nos brinda la IA como asistente de código, recomiendo encarecidamente aprender ambos a la par. La idea es la siguiente: 
- Aprender sintáxis de Python y como trabajar con este lenguaje.
- Aprender conceptos fundamentales de programación y lógica.
- Realizar ejercicios prácticos para aplicar lo aprendido.
- Realizar ejericios teoricos respecto al lenguaje siempre es una buena idea para reforzar lo aprendido.

### 2.1 Recursos teóricos {21-recursos-teoricos}
Este primer pilar lo suelo dividir en 3 categorías: 
- *Cursos online*
- *Libros*
- *Documentación oficial*

Todas tienen su valor, y algunas se ajustarán mejor a tu estilo de aprendizaje. En mi experiencia, los cursos online, independiente de su rigurosidad o dificultad, sirven como una 'puerta de entrada': te ayuda a aprender conceptos, vocabulario, tener una hoja de ruta a la cual seguir (*saber lo que sabes y más importante, saber lo que no sabes*). Si bien son muy valiosos y recomiendo bastantes cursos de universidades prestigiosas, pienso que de donde mayor conocimiento he podido extraer tanto teorico como práctico es de *libros técnicos* y *documentaciones oficiales*.

### 2.2 Ejercicios prácticos {22-ejercicios-practicos}
Este segundo pilar lo dividiré en 2 categorías:
- *Ejercicios prácticos*
- *Proyectos personales*

Los ejercicios prácticos son una forma de aplicar lo aprendido, y los proyectos personales son una forma de aplicar lo aprendido en un contexto real. Con ejercicio práctico me refiero a extraer conocimiento de nuestra cabeza (no usar la IA) para responder una pregunta, resolver un pequeño problema, completar o corregir sintáxis, identificar que significa el error que vemos en consola. Cualquier ejercicio que nos obligue a extraer información que tenemos escondida es un ejercicio mental que nos permite retener esa información por más tiempo. Recomiendo encarecidamente hacer ejercicios prácticos siempre que sea posible. Que la IA nos entregue la respuesta instantáneamente es muy útil, pero no fuerza tu cerebro a retener información (todo lo contrario). En estos tiempos es más importante que nunca obligar a nuestro cerebro a esforzarse y que sea capaces de resolver problemas cada vez más complejos.

Por otro lado, los proyectos personales son una forma de aplicar lo aprendido en un 'contexto real'. Son un buen estimulo para seguir aprendiendo, y son una forma de demostrar nuestras habilidades en un portafolio que pueden ver posibles empleadores o clientes. Recomiendo comenzar a hacer proyectos personales pequeños para aplicar lo aprendido, ya sea pequeños desafíos o como recordatorio de nuestro aprendizaje. Luego de eso estos irán evolucionando a proyectos cada vez más grandes y complejos, el desarrollo de aplicaciones, experimentos cientificos de ML, etc.

---

## 3. Como usar la IA sin sabotear tu aprendizaje {3-como-usar-la-ia-sin-sabotear-tu-aprendizaje}

---

## 4. Rutinas y hábitos de estudio {4-rutinas-y-habitos-de-estudio}

---

## 5. Errores comunes y como evitarlos {5-errores-comunes-y-como-evitarlos}
 Tutorial hell, saltar fundamentos, copiar sin entender, no leer errores, compararse demasiado pronto.