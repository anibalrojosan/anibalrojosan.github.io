# Cómo aprender a programar en la era de la IA

> Esta guía sirve como un *Hub* de posts sobre como estudiar y entrenar habilidades de programación. Debido a la extensión de cada sección, dedicaré posts a cada una para profundizar en cada tema. <br/>
> Para explicar el 'por qué' puede que quieras aprender a programar, estoy preparando un futuro blog. 

Si estás aquí, asumo que te interesa aprender a programar (y/o que te llame la atención el concepto de 'IA'). En este blog post te mostraré los recursos que he usado para aprender a programar de manera autodidacta estos últimos años. Si logro despertar tu curiosidad sobre como aprender esta habilidad, ya me habré dado por satisfecho. Sin más dilación, comencemos:

---

## Tabla de contenidos

- [1. Lenguajes de programación, ¿cual elegir?](#1-lenguajes-de-programacion-cual-elegir)
- [2. Recursos para aprender Python](#2-recursos-para-aprender-python)
    - [2.1 Recursos teóricos](#21-recursos-teoricos)
        - [2.1.1 Cursos online](#211-cursos-online)
        - [2.1.2 Libros técnicos](#212-libros-tecnicos)
        - [2.1.3 Documentación oficial](#213-documentacion-oficial)
    - [2.2 Recursos prácticos](#22-recursos-practicos)
        - [2.2.1 Ejercicios prácticos](#221-ejercicios-practicos)
        - [2.2.2 Proyectos personales](#222-proyectos-personales)
- [3. Como usar la IA sin sabotear tu aprendizaje](#3-como-usar-la-ia-sin-sabotear-tu-aprendizaje)
    - [3.1 Deuda técnica y cognitiva](#31-deuda-tecnica-y-cognitiva)
    - [3.2 El dilema de la productividad](#32-el-dilema-de-la-productividad)
- [4. Rutinas y hábitos de estudio](#4-rutinas-y-habitos-de-estudio)
- [5. Errores comunes y como evitarlos](#5-errores-comunes-y-como-evitarlos)

---

## 1. Lenguajes de programación, ¿cual elegir? {1-lenguajes-de-programacion-cual-elegir}

Esta pregunta tiene trampa, ya que su respuesta puede ser:
- muy obvia (*Python*, obviamente que Python, es el lenguaje de la IA ¿no? ¿Por qué tanto misterio?) o,
- no tan obvia (hay decenas de áreas en tecnología además de la IA, y decenas de lenguajes de programación. Considero que también es valioso conocer de ellos). 

En mi caso, a la hora de recomendar un lenguaje de programación, suelo primero preguntar a qué te gustaría dedicarte una vez hayas dominado ese lenguaje. En mi caso particular, descubrí Python casi por azar en un ramo de mi magíster, y por casi el mismo azar descubrí la *ciencia de datos* y el *machine learning*, ramas que se convirtieron en mi mayor interés. Además de que la sintaxis de Python es muy legible y fácil de entender, mi elección en ese momento era bastante obvia. 

Sin embargo, actualmente recomiendo dar un vistazo a distintas áreas de la tecnologia y los lenguajes que se usan. Por ejemplo:
- **Desarrollo web**: HTML, CSS, JavaScript/TypeScript son los reyes indiscutidos.
- **Desarrollo de aplicaciones móviles**: Swift, Kotlin, Flutter son las opciones más populares.
- **High frequency trading**: Si bien Python y R son muy usados, aquí es cuando es indispensable saber de algoritmos y conocimiento de más bajo nivel, por lo que lenguajes como C++ son indispensables.
- **Desarrollo de videojuegos**: lenguajes de bajo nivel como C/C++ son muy usados, pero también motores como Unity (C#) o Godot (GDScript) son muy populares.

Esto es solo una pincelada, hay un montón de lenguajes que no he mencionado y que te invito a explorar.

LLegados a este punto ya he mencionado el concepto de 'bajo nivel'. ¿Esto indica la existencia de 'alto nivel'? ¿Qué significa *'nivel'*? Esto es un concepto que conocí mucho después ya que al principio uno se enfoca casi 100% en aprender sintáxis del lenguaje y luego en la lógica de programación (al menos lo hice así por allá en 2020 jejeje). Actualmente recomiendo aprender sobre los conceptos de *nivel* y *abstracción*. De manera simple:
- Un **lenguaje de alto nivel** (*Python*, *JavaScript*, *Java*, *C#*, etc.) es un lenguaje que se encarga de abstraer la mayor parte de la lógica de programación, dejando al programador solo con enfocarse en la lógica de su programa. Son recomendables para principiantes debido a que son 'fáciles' de leer y se encargan de muchas cosas 'bajo el capó' (el 'garbage collector' de Python es un ejemplo de esto).
- Un **lenguaje de bajo nivel** (*C*, *C++*, *Assembly*, *Rust*, etc.) son mucho más 'cercanos' al hardware (CPU, memoria, etc.), por decirlo así. Permiten que el programador tenga un control total del comportamiento fisico de su máquina. Esto los hace mucho más rápidos que sus contrapartes de alto nivel, pero también son mucho más difíciles de leer y escribir.

En términos simples, mientras más '*alto nivel*' tengamos, nos alejamos más de la máquina, nos abstraemos más de la física del hardware. Esto tiene como ventaja principal la facilidad de lectura y escritura del código, pero tiene como desventaja la velocidad de ejecución y la dificultad de debugging (por esto mismo, muchas librerías muy usadas de Python, como Numpy están escritas en C y C++ para mejorar su performance, algo fundamental en machine learning).

Recomiendo encarecidamente además de aprender sintaxis de un lenguaje, tener este tipo de nociones (velocidad de ejecución, nivel de abstracción, etc.). A largo plazo son conocimientos muy útiles que te ayudarán a tomar mejores decisiones. 

Para responder a la pregunta de '¿cual elegir?', si empezara desde cero hoy, mis recomendaciones serían: 
- **Elige un lenguaje de alto nivel**, aprende sintaxis básica, y fundamentos de programación. Usa este lenguaje para practicar, explorar y para saber si realmente te gusta programar (no es un hobby para todos, hay mucha frustración asociada). 
- Piensa que este lenguaje es la herramienta con la cual construir y aprender una disciplina que es la programación, es el medio por el cual crear cosas y aplicar el conocimiento teórico que irás aprendiendo.

De ahora en adelante la guía será enfocada principalmente a Python, ya que es el lenguaje que más he usado. Eventualmente siempre es bueno ampliar nuestro abanico de lenguajes que dominemos, pero hay que partir por algo.

---

## 2. Recursos para aprender Python {2-recursos-para-aprender-python}

> Hablaré en un futuro post de como aprender áreas de TI específicas, tales como backend, frontend, data science, machine learning, etc.

Actualmente hay una infinidad de formas de aprender Python. Es tanto que prefiero separarlo en dos pilares fundamentales: *recursos teóricos* y *recursos prácticos*. ¿Debo aprender primero la teoría y luego la práctica? Actualmente con las facilidades que nos brinda la IA como asistente de código, recomiendo encarecidamente **aprender ambos a la par**. La idea es la siguiente: 
1. Aprender la sintáxis de Python y como trabajar con este lenguaje. En paralelo, aprender los conceptos fundamentales de programación y lógica.
2. Realizar ejercicios prácticos para aplicar lo aprendido (proyectos personales). Además, realizar ejercicios teóricos respecto al lenguaje siempre es una buena idea para reforzar lo aprendido.

### 2.1 Recursos teóricos {21-recursos-teoricos}

Este primer pilar lo suelo dividir en 3 categorías: 

#### 2.1.1 [Cursos online](post.html?post=2026-04-08-online-courses-es.md) {211-cursos-online}

Cursos online de distintas universidades, instituciones, etc. Estos pueden ser muy variados en cuanto a rigurosidad y dificultad, pero sirven como una 'puerta de entrada': te ayudan a aprender conceptos, vocabulario, y tener una hoja de ruta a la cual seguir (*saber lo que sabes y más importante, saber lo que no sabes*). 

Disponibles en plataformas como *Youtube*, *Coursera* o *Udemy*. Muchos de ellos son gratis y de alta calidad en los contenidos impartidos.

#### 2.1.2 Libros técnicos {212-libros-tecnicos}

Libros técnicos y de programación. Estos son muy variados en cuanto a contenido, pero son muy valiosos como fuente de conocimiento estructurado (como el syllabus de un ramo universitario). Sirven mucho para tener un mapa claro de temas sobre los cuales aprender. Recomiendo muchos editoriales como *O'Reilly*, *Addison-Wesley*, *Packt* y *Springer*.

#### 2.1.3 Documentación oficial {213-documentacion-oficial}

Aún en tiempos de IA, siempre es una buena idea referirse a la documentación oficial de un lenguaje o de sus librerías para aprender sobre su uso/buenas prácticas. Estas herramientas están en constante evolución por lo que siempre tenemos que mirar de reojo a ver si hay nuevas funcionalidades o mejoras. Si salió una nueva versión de un lenguaje de programación, o una librería añadió una funcionalidad pedida por la comunidad, es nuestro deber enterarnos y decidir si optaremos por hacer un update a nuestro stack, o nos mantendremos con las versiones anteriores.

Todas tienen su valor, y algunas se ajustarán mejor a tu estilo de aprendizaje. En mi experiencia, los cursos online, independiente de su rigurosidad o dificultad, sirven como una 'puerta de entrada': te ayuda a aprender conceptos, vocabulario, tener una hoja de ruta semi-estructurada la cual seguir (*saber lo que sabes y más importante, saber lo que no sabes*). Si bien son muy valiosos y recomiendo bastantes cursos de universidades prestigiosas, personalmente he podido extraer mayor conocimiento tanto teórico como práctico de *libros técnicos* y *documentaciones oficiales*.

### 2.2 Recursos prácticos {22-recursos-practicos}

Este segundo pilar lo dividiré en 2 categorías:

#### 2.2.1 Ejercicios prácticos {221-ejercicios-practicos}

Los ejercicios prácticos aplican lo aprendido. Piensa como cuando pequeños teníamos que resolver ejercicios matemáticos sin calculadora. Solo lápiz y papel. La idea es similar: eliminar ayudas innecesarias (IA, buscar en el navegador) para resolver pequeños problemas teóricos, responder una pregunta, completar o corregir sintáxis, identificar que significa el error que vemos en consola, etc. Cualquier ejercicio que nos obligue a extraer información que tenemos escondida es un ejercicio mental que nos permite retener esa información por más tiempo.

Recomiendo encarecidamente hacer ejercicios prácticos siempre que sea posible. Que la IA nos entregue la respuesta instantáneamente es muy útil, pero no fuerza tu cerebro a retener información (todo lo contrario). En estos tiempos es más importante que nunca obligar a nuestro cerebro a esforzarse y que sea capaces de resolver problemas cada vez más complejos.

El realizar ejercicios de este tipo cobra aún más sentido si nos referimos a como aprender matemáticas para ML/IA, tema que trataré en su propio blog dedicado.

#### 2.2.2 Proyectos personales {222-proyectos-personales}

Por otro lado, los proyectos personales son una forma de aplicar lo aprendido en un 'contexto real'. Son un buen estimulo para seguir aprendiendo, y son una forma de demostrar nuestras habilidades en un portafolio que pueden ver posibles empleadores o clientes. Recomiendo comenzar a hacer proyectos personales pequeños para aplicar lo aprendido, ya sea pequeños desafíos o como recordatorio de nuestro aprendizaje. Luego de eso estos irán evolucionando a proyectos cada vez más grandes y complejos, desarrollo de aplicaciones, experimentos científicos de ML, etc.

Perderle el miedo a ir sumando y sumando lineas de código e ir generando algo tangible pero menos digerible es parte del proceso. Te invito a que si tienes ideas (por ejemplo: supongamos que eres una persona fitness, y te gustaría que haya una app que con una foto a mi comida pueda contar macros y micros y estimar calorías) las anotes e investigues que debes aprender para intentar crearla tu mismo. Aprender a como se crean este tipo de servicios y adentrarse en conceptos como arquitectura, backend, frontend y bases de datos son muy valiosos que los vayas interiorizando lo antes posible. Luego, es cuestión de tiempo que te pongas manos a la obra e ir aprendiendo sobre la marcha.

Para crear proyectos personales, recomiendo lo antes posible aprender sobre el control de versiones (Git) y el manejo de repositorios (GitHub, GitLab, etc.). Esto es fundamental para poder colaborar con otros desarrolladores, y para poder tener un historial de cambios en tu código.

> Personalmente, considero que *aprender sobre la marcha* implica ir explorando y aprendiendo sobre cosas/sistemas que no conozco usando todos los medios que he expuesto previamente. Es una forma de descomponer un problema grande en partes más pequeñas y digeribles las cuales iré aprendiendo a la par que trabajo en un proyecto. <br/> Al contrario de lo que mucha gente piensa, no considero que esto implique *no saber lo que estoy haciendo*, o que no valga la pena aprender los fundamentos de la disciplina. <br/> Hablaré más sobre esto en un futuro post.

---

## 3. Como usar la IA sin sabotear tu aprendizaje {3-como-usar-la-ia-sin-sabotear-tu-aprendizaje}

Si bien la IA es una herramienta muy poderosa, y que encuentro muy interesante y prometedora, hay una serie de consideraciones que me gustaría compartir:
1. Me gusta ver la IA como un catalizador, un multiplicador de habilidades. Si tu nivel base es muy bajo, usar IA no aumentará mucho tu nivel. Por el contrario, si cuentas con un nivel técnico base relativamente alto, la IA te ayudará a aumentar tu nivel de manera exponencial. La única forma de subir nuestro nivel base es mediante el entrenamiento constante y sistemático (de la misma forma que un deportista)
2. Hay formas más y menos efectivas de usar la IA. Como toda herramienta, cuenta con una curva de aprendizaje, y buenas prácticas. Al ser una herramienta nueva y que está en constante desarrollo, estas buenas prácticas están en constante cambio y debemos como mínimo tener nociones de como los desarrolladores más capacitados la usan.
3. Por ningún motivo la IA debe reemplazar tu cerebro. Es un catalizador, no un sustituto. Nutrir y entrenar tu cerebro para que sea capaz de resolver problemas cada vez más complejos es fundamental para la vida y para tu carrera.

Considero que hay dos problemas serios que debemos evitar:

#### 3.1 Deuda técnica y cognitiva {31-deuda-tecnica-y-cognitiva}

La IA genera mucho código, hace planes muy complejos, te dice que sí a todo y en contadas ocasiones te corrige. Esto genera que proyectos delegados a la IA crezcan de manera exponencial, y al no ser nosotros los creadores integros de este sistema, existe una deuda real con respecto a nuestro entendimiento sobre el sistema.

#### 3.2 El dilema de la productividad {32-el-dilema-de-la-productividad}

Un fenómeno que se está dando recientemente es el testimonio de desarrolladores que no pueden 'dejar de trabajar'. Si bien muchos lo justifican que como están pagando un servicio, deben exprimir al máximo ese servicio para aprovechar esa inversión, pienso que va por otro lado: la IA es una forma excelente de desatascarnos. La sensación de que la respuesta está siempre a un prompt de distancia nos genera ese pensamiento de 'un prompt más y termino' que genera un bucle sin fin de prompting. La percepción que se tenía anteriormente de 'con la IA trabajaremos menos' ha resultado en todo lo contrario. Es fundamental no saturar nuestro cerebro de información para no quemarnos y mantener un rendimiento alto el mayor tiempo posibe, por lo que el descanso y la desconexión son fundamentales.

Hablaré más sobre como usar IA de manera efectiva en un siguiente post.

---

## 4. Rutinas y hábitos de estudio {4-rutinas-y-habitos-de-estudio}

Si bien hay muchas formas de aprender y estudiar, cuando he entrenado como si fuera un deportista de alto rendimiento es cuando he percivido mayores avances. El entrenamiento constante y sistemático es fundamental para subir de nivel. Es un tema un tanto polémico pero muy interesante, por lo que dedicaré un post completo a este tema.

---

## 5. Errores comunes y como evitarlos {5-errores-comunes-y-como-evitarlos}

Temas que abordaré en un futuro post: 
- Tutorial hell
- Saltar fundamentos
- Copiar sin entender
- No leer errores
- Compararse demasiado pronto