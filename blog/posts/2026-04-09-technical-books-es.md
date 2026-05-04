# Libros técnicos que recomiendo para aprender software, Data Science y ML/AI

En este post he reunido **libros técnicos** que he usado y que me han sido útiles para aprender sobre software, Data Science y ML/AI (y un poco de otras áreas). Es una guía práctica para orientarte en libros que te ayudarán a profundizar en tus conocimientos.

## Tabla de contenidos

- [1. Introducción](#1-introducción)
    - [1.1 ¿Vale la pena leer libros técnicos?](#11-vale-la-pena-leer-libros-tecnicos) 
    - [1.2 Cómo leer libros técnicos](#12-como-leer-libros-tecnicos)
    - [1.3 Criterios para esta guía](#13-criterios-para-esta-guía)
- [2. Aprender a programar con Python](#2-aprender-a-programar-con-python)
    - [2.1 Nivel básico](#21-nivel-basico)
    - [2.2 Nivel intermedio/avanzado](#22-nivel-intermedioavanzado)
- [3. Desarrollo de software](#3-desarrollo-de-software)
    - [3.1 Nivel básico (aprendiendo a programar)](#31-nivel-basico-aprendiendo-a-programar)
    - [3.2 Nivel intermedio/avanzado (arquitectura y diseño de software)](#32-nivel-intermedioavanzado-arquitectura-y-diseno-de-software)
    - [3.3 Estructuras de datos y algoritmos](#33-estructuras-de-datos-y-algoritmos)
    - [3.4 Bases de datos](#34-bases-de-datos)
- [4. Data Engineering](#4-data-engineering)
- [5. Data Analysis](#5-data-analysis)
- [6. Data Science](#6-data-science)
- [7. Machine Learning](#7-machine-learning)
    - [7.1 Matemáticas para Machine Learning](#71-matematicas-para-machine-learning)
    - [7.2 Machine Learning aplicado](#72-machine-learning-aplicado)
    - [7.3 Deep Learning](#73-deep-learning)
    - [7.4 Reinforcement Learning](#74-reinforcement-learning)
    - [7.5 Computer Vision](#75-computer-vision)
    - [7.6 Natural Language Processing](#76-natural-language-processing)
- [8. Generative AI](#8-generative-ai)

## 1. Introducción {#1-introducción}

### 1.1 ¿Vale la pena leer libros técnicos? {#11-vale-la-pena-leer-libros-tecnicos}

Como mencioné en mi [guía general para aprender a programar](post.html?post=2026-01-20-learning-to-code-in-the-ai-era-es.md), considero que los libros son excelentes para brindarte un curriculum estructurado el cual seguir. Se habla mucho de que actualmente 'la industria se mueve mucho más rápido que los libros, por lo que estos quedan anticuados muy rápido'. Me gustaría dar mi opinión sobre esto: 

1. En particular en *GenAI*, el avance es tan vertiginoso que herramientas adoptadas masivamente, como *LangChain*, pueden pasar a un segundo plano casi de la noche a la mañana debido a las mejoras en *tool calling* y *harnesses* de los nuevos modelos. Sin embargo, esta obsolescencia no resta valor a estos libros; al contrario, son esenciales para dominar los fundamentos y entender la complejidad de las subáreas de datos e IA, permitiéndote ir más allá de las librerías de moda.

3. Por otro lado, hay disciplinas que son fundamentales. Las **matemáticas**, **estadística**, los **principios de la informática** o de cualquier ciencia son conocimientos base que no expiran. Los fundamentos son los fundamentos: el cálculo multivariable, álgebra lineal, matemáticas discretas o resolución de problemas son conocimientos base que no expiran, y te pueden servir para múltiples disciplinas más alla del desarrollo de software. 

### 1.2 Cómo leer libros técnicos {#12-como-leer-libros-tecnicos}

Un libro técnico no se lee como una novela. Este es el error más común que no te permitirá extraer información de manera eficiente y es un fuente gratis de frustración. Para que la inversión de tiempo valga la pena, algunos tips que me han servido son:

1. **No leas en orden lineal**: A diferencia de la ficción, puedes saltar. Lee el índice y la introducción para entender el "mapa" del libro. Si ya dominas un tema, sáltalo o dale una lectura rápida (siempre puedes encontrar vacíos en tus conocimientos). Enfócate en los capítulos que resuelven tus dudas actuales.

2. **"Ensuciate las manos"**: Si el libro tiene código o ejercicios, escríbelos tú mismo. No basta con leer el bloque de código y decir "ah, entiendo, obvio". Al teclearlo te enfrentarás a errores de sintaxis y entenderás la lógica real detrás de funciones o experimentos. Cambia nombres de variables, intenta romper el código, ¿Por qué se estructura de esta manera?, ¿Hay otra forma de hacerlo?, etc.

3. **El repo de GitHub es tu mejor amigo**: Si un libro cuenta con documentación propia es un recurso fundamental al que tienes que sacarle provecho. Es muy común que hayan notebooks complemetarios por cada capítulo, y los 'issues' del repo pueden tener fe de erratas y actualizaciones.

4. **Lee en tres pasadas**: primero una pasada rápida: Hojea el capítulo, mira los diagramas, las negritas y los resúmenes. Entiende el "qué". Luego, lectura activa: Lee con calma y subraya o toma notas. Entiende el "cómo". Finalmente, ejecuta: Haz los ejercicios y retos. Entiende el "por qué". No es necesario leer un capitulo completo antes de ejercitar lo aprendido.

5. **Crea un proyecto paralelo**:
Usa el libro como manual de referencia para construir algo propio. Ejemplo: si el libro es sobre "Escapar de los Notebooks", no solo hagas los ejercicios del libro; intenta convertir uno de tus propios notebooks viejos en una aplicación real siguiendo los pasos del autor. Si es sobre sintaxis de una librería, abre un notebook aparte, descarga un dataset y practica con la sintaxis. Cualquier excusa es buena para poner en práctica lo aprendido.

### 1.3 Criterios para esta guía {#13-criterios-para-esta-guía}

Siguiendo los criterios que expuse en mi blog de [cursos online que recomiendo](post.html?post=2026-04-08-online-courses-es.md), para recomendar algún libro, considero los siguientes tres criterios:

1. Los he leído (en mayor o menor medida) y me han sido útiles para aprender.

2. Son libros ampliamente recomendados por la comunidad y son escritos por referentes en la industria.

3. Pertenecen a editoriales de prestigio. Si no es así, el autor tiene una página web y/o repo de GitHub con contenido útil sobre su libro.

## 2. Aprender a programar con Python {#2-aprender-a-programar-con-python}

Python es considerado el lenguaje de programación ideal si estás interesado en DS/ML/AI. Es por lejos el lenguaje más usado en esta área debido a que:

- Es un lenguaje versátil: además de para computación científica puede usarse para *backend*/*frontend*/*data engineering*, etc.

- Es fácil de aprender y leer (sintáxis muy parecida al inglés)

- Es de alto nivel: permite abstraerse de la máquina y enfocarse en la lógica de programación.

- Posee una gran cantidad de librerías y frameworks adoptados por la industria y muy usados en el día a día, tanto para el desarrollo de software como para el análisis de datos y el machine learning.

En esta sección nos enfocaremos solo en aprender Python. Para ello he dividido los libros en dos niveles:

### 2.1 Nivel básico {#21-nivel-basico}

Recursos para personas sin conocimientos de programación y que han decidido aprender Python como su primer lenguaje.

| Portada | Descripción |
| --- | --- |
| ![Automating the boring stuff with Python](images/books/python/automating-the-boring-stuff-with-python.png) | **Nombre:** [Automating the Boring Stuff with Python](https://automatetheboringstuff.com/) <br> **Autor:** [Al Sweigart](https://inventwithpython.com/) <br><br> Este libro cubre todo lo básico, desde sintáxis, control de flujo, funciones y estructuras de datos básicas hasta manipulación de archivos y web scraping. Muy recomendado para principiantes.|
| ![Python Crash Course](images/books/python/python-crash-course.png) | **Nombre:** [Python Crash Course](https://www.oreilly.com/library/view/python-crash-course/9781098156664/) <br> **Autor:** [Eric Matthes](https://ehmatthes.github.io/) <br><br> Igual que el libro anterior, pero con un enfoque más práctico y ejemplos más realistas. Puede que resuene más contigo si es que te gusta aprender siendo consciente más de las aplicaciones prácticas en vez de solo teoría. |
| ![Think Python](images/books/python/think-python.png) | **Nombre:** [Think Python](https://allendowney.github.io/ThinkPython/) (Web oficial) <br> **Autor:** [Allen B. Downey](https://www.allendowney.com/wp/) <br><br> Si bien es un libro para principiantes, aborda también más avanzados como *programación orientada a objetos* (OOP) y *list comprehensions*. Recomiendo comenzar con este si ya conoces un poco de Python y quieres profundizar en sus conceptos fundamentales. |

### 2.2 Nivel intermedio/avanzado {#22-nivel-intermedioavanzado}

Recursos para aquellos que ya tienen conocimientos básicos de Python y quieren profundizar en sus conceptos fundamentales y en lo que es capaz de ofrecer este lenguaje.

| Portada | Descripción |
| --- | --- |
| ![Fluent Python](images/books/python/fluent-python.png) | **Nombre:** [Fluent Python](https://www.fluentpython.com/) <br> **Autor:** [Luciano Ramalho](https://www.linkedin.com/in/lucianoramalho/?originalSubdomain=br) <br><br> La primera vez que me crucé con este libro creí que estaba enfocado en principiantes. Tan pronto comencé a leerlo, me di cuenta que no entendía nada, vi su índice y estaba lleno de conceptos de los que no había escuchado. Resulta que este libro en realidad es una guía más avanzada. <br> Toca temas como *dunder methods*, *context managers*, *generadores*, *iteradores*, *closures*, *decoradores*, *programación orientada a objetos*, *type hints* (muy usados en ML/AI), *concurrencia* y *metaprogramación*. <br> Si ya tienes conocimientos de Python, este libro es una excelente opción para profundizar en qué más ofrece este lenguaje además de lo básico. |

## 3. Desarrollo de software {#3-desarrollo-de-software}

Debido a la adopción cada vez más rápida de herramientas de GenAI, áreas que históricamente han usado código principalmente como un medio para resolver problemas han incorporado herramientas de desarrollo de software para crear sistemas completos. Hace 10-15 años bastaba con tener una base sólida en matemáticas, aprender un poco de programación para poder analizar datos en notebooks aislados y presentar resultados. Hoy en día se espera poder crear aplicaciones completas que incorporen análisis de datos avanzado y modelos de ML/AI. Esto abre un abanico de posibilidades para innovar, por lo que comprender los fundamentos de *ciencia de la computación* y *ingeniería de software* es fundamental.

Esta es un área gigantesca que aborda un montón de temas diferentes y en constante evolución, por lo que el aprendizaje continuo es crítico. Para mantenerlo más o menos simple y fácil de seguir, he dividido esta sección en libros en cuatro categorías:

### 3.1 Nivel básico (aprendiendo a programar) {#31-nivel-basico-aprendiendo-a-programar}

Fundamentos de como funciona la computación y buenas prácticas para escribir código limpio y mantenible.

| Portada | Descripción |
| --- | --- |
| ![How Computers Really Work](images/books/software/how-computers-really-work.png) | **Nombre:** [How Computers Really Work](https://www.amazon.com/How-Computers-Really-Work-Explained/dp/161729875X) <br> **Autor:** [Matthew Justice](https://www.mattjustice.com/) <br><br> Este libro es una guía para entender cómo funcionan los computadores, y lo que permite su uso en el día a día. Aborda desde bajo nivel (*circuitos*, *binario*, *memoria*) hasta alto nivel (*sistemas operativos*, *lenguajes de programación*, *cómo funciona el internet*). <br> Recomiendo además de saber como *usar* un computador para programar, entender como muchas de las cosas que asumimos como normales funcionan por debajo. Con conocimiento básico de matemáticas y ciencias es suficiente para entenderlo. <br> |
| ![Clean Code](images/books/software/clean-code.jpg) | **Nombre:** [Clean Code](https://www.oreilly.com/library/view/clean-code-a/9780136083238/) <br> **Autor:** [Robert C. Martin](https://x.com/unclebobmartin?lang=es) <br><br> Este es un libro muy famoso, enfocado en buenas prácticas para construir software que sea reutilizable y fácil de mantener. Recomiendo echarle un ojo si es estás recién comenzando a programar pues puedes sacar varias ideas que te ayudarán a la hora de organizar tu código. Si ya estás acostumbrado a programar y a leer código, seguramente muchas de esas ideas ya las tengas más o menos interiorizadas. Suele ser criticado porque la filosofía de este libro es muy rígida y dogmática, y para muchos aplicar estos principios tan rígidamente complejiza de sobremanera el código. Como en todo, recomiendo que lo revises y crees tu propia opinión. <br> |
| ![The Pragmatic Programmer](images/books/software/thepragmaticprogrammer.png) | **Nombre:** [The Pragmatic Programmer: Your Journey to Mastery](https://www.oreilly.com/library/view/the-pragmatic-programmer/9780135956977/) <br> **Autores:** Andrew Hunt y Dave Thomas <br><br> Esta es una guía práctica para mejorar la calidad de código. Aquí se habla del famoso concepto de DRY (*Don't Repeat Yourself*) y otras buenas prácticas para escribir código limpio, simple y mantenible. También habla sobre como aprender nuevas herramientas y como realizar pruebas rigurosas. <br> Considero que su enfoque en fomentar la curiosidad y el aprendizaje continuo es crítico para poder adaptarse a una industria en constante cambio. Es un libro que puedes revisar una y otra vez independiente de tu seniority.<br> |

### 3.2 Nivel intermedio/avanzado (arquitectura y diseño de software) {#32-nivel-intermedioavanzado-arquitectura-y-diseno-de-software}

Luego de sentirte cómo programando, es momento de aprender como empaquetar tu código para crear sistemas complejos. Esto implica entender sobre arquitecturas de software, patrones de diseño, etc.

| Portada | Descripción |
| --- | --- |
| ![Fundamentals of Software Architecture](images/books/software/fundamentals-of-software-architecture.png) | **Nombre:** [Fundamentals of Software Architecture](https://www.oreilly.com/library/view/fundamentals-of-software/9781492043447/) <br> **Autores:** Mark Richards y Neal Ford <br><br> Este libro sirve como introducción a la arquitectura de software, presentando un mapa general de esta área. <br> El libro se divide en dos grandes tópicos: <br> - Primero, los **fundamentos** como la *modularidad* y el *pensamiento arquitectónico*. <br> - Segundo, los **patrones** de diseño más comunes (*por capas*, *monolito*, *microservicios*, etc.) y sus ventajas y desventajas. <br> Una vez dominado el cómo escribir código, es necesario comprender como este se empaqueta y modulariza. Este conjunto de módulos genera finalmente una aplicación, y hay muchas filosofías de diseño dependiendo del tamaño y complejidad del sistema final que queremos crear. <br> Lo recomiendo mucho para cuando quieras introducirte en esta área.|
| ![Software Architecture: The Hard Parts](images/books/software/software-arquitecture-the-hard-parts.png) | **Nombre:** [Software Architecture: The Hard Parts](https://www.oreilly.com/library/view/software-architecture-the/9781492086888/) <br> **Autores:** Neal Ford, Mark Richards, Pramod Sadalage y Zhamak Dehghani <br><br> Podrías pensar en este libro como una continuación del anterior. Hecho por el mismo grupo de consultores, consiste en un análisis más profundo centrado en situaciones donde no existen unas *méjores prácticas* tan claras (será necesario tomar la *menos mala*). <br>Explica como romper un monolito y como volver a unir servicios (*comunicacion* y *transaccionalidad*) y distintos *trades-offs* que se deben considerar al elegir una arquitectura de software. El enfoque es interesante ya que los autores se colocan en el lugar de una empresa ficticia (llamada *Sysops Squad*) y la usan para exponer y justificar sus puntos. Además profundiza aún más en almacenamiento y manipulación de datos que el libro anterior (arquitecturas de datos como *Data Mesh*). <br> Recomiendo este libro una vez ya hayas hecho pequeños proyectos y hayas experimentado con distintas arquitecturas, ya que considero que es más útil para desarrolladores con cierto grado de *seniority*.|

### 3.3 Estructuras de datos y algoritmos {#33-estructuras-de-datos-y-algoritmos}

Fundamentos de como se almacenan y procesan los datos en la memoria y en disco, y algoritmos comunes (búsqueda y ordenamiento, etc.). Es un área fundamental para desarrollar habilidades de resolución de problemas, pensamiento algorítmico y optimización de recursos.

| Portada | Descripción |
| --- | --- |
| ![Grokking Algorithms](images/books/software/grokking-algorithms.webp) | **Nombre:** [Grokking Algorithms](https://www.oreilly.com/library/view/grokking-algorithms/9781617292231/) <br> **Autor:** Aditya Y. Bhargava <br><br> Esta es una guía con más de 400 ilustraciones centrada en los algoritmos más importantes (*búsqueda*, *ordenamiento*, *algoritmos de grafos*, etc.), además de las estructuras de datos fundamentales (*árboles*, *hashes*, *colas*, etc.). Por supuesto, también incluye tanto ejercicios teóricos como ejemplos en código.<br> Si no sabes nada de la teoría de DSA, recomiendo este libro como tu primera incursión debido a que las ilustraciones facilitan mucho la intuición detrás de estos conceptos. Perfecto para acompañar con cursos introductorios de DSA.|
| ![Introduction to Algorithms](images/books/software/introduction-to-algorithms.png) | **Nombre:** [Introduction to Algorithms](https://mitpress.mit.edu/9780262367509/introduction-to-algorithms/) <br> **Autores:** [Thomas H. Cormen](https://scholar.google.com/citations?user=V5FJ6pIAAAAJ&hl=en), Charles E. Leiserson, Ronald L. Rivest, Clifford Stein <br><br> Que la palabra 'introducción' en su título no te engañe. Más de 1.000 páginas de nivel técnico alto sobre estructuras de datos y algoritmos condensadas en un libro clásico. Cuando comiences a profundizar más y más en DSA con cursos y ejercicios de Leetcode, en algún momento tendrás que recurrir a un libro de este tipo si quieres entender más allá de resolver problemas estándares. <br> El pensamiento algoritmico y la resolución de problemas son habilidades que siempre es bueno tener en nuestro arsenal, y es necesario entrenarlas como tal.<br> |
| ![The Art of Computer Programming](images/books/software/the-art-of-computer-programming.jpg) | **Nombre:** The Art of Computer Programming <br> **Autor:** [Donald E. Knuth](https://www-cs-faculty.stanford.edu/~knuth/) <br><br> Esta es una serie de libros clásicos en lo referente al análisis de algoritmos y estructuras de datos fundamentales. Acá la dificultad sube bastante con respecto a los anteriores libros. Su contenido es mucho más tecnico, por lo que es más dificil de digerir. <br> Es bastante denso (posee 7 volúmenes), por lo que requiere de bastante tiempo de dedicación... varios años diría yo. Es básicamente una biblia en lo referente a DSA, muy recomendado si quieres profundizar en ellos desde un punto de vista teórico.<br> |

### 3.4 Bases de datos {#34-bases-de-datos}

Fundamentos de como se almacena la información en bases de datos relacionales, optimización de consultas, etc.

| Portada | Descripción |
| --- | --- |
| ![Database System Concepts, 6ta edición](images/books/databases/databases-system-concepts.png) | **Nombre:** [Database System Concepts](https://www.oreilly.com/library/view/database-system-concepts/9780136086233/) <br> **Autores:** Abraham Silberschatz, Henry F. Korth y S. Sudarshan <br><br> Este es texto universitario de asignatura de bases de datos completa. Abarca prácticamente todo lo necesario: *modelo relacional*, *SQL*, *diseño* (ER, normalización), *transacciones*, *control de concurrencia*, *recuperación*, *índices*, *procesamiento y optimización de consultas*, entre otros temas. <br> Lo recomiendo como una primera exposición a DBMS a nivel conceptual y algoritmico, aunque cierto rigor matemático y paciencia es requerida. Es perfecto para comprender bases de datos más allá de operaciones CRUD y optimización de consultas. |
| ![Database Internals: A deep-dive into how distributed data systems work](images/books/databases/database-internals.png) | **Nombre:** [Database Internals: A deep-dive into how distributed data systems work](https://www.amazon.com/Database-Internals-deep-dive-distributed-systems/dp/1617296566) <br> **Autor:** [Alex Petrov](https://x.com/ifesdjeen) <br><br> Este libro se centra en el **interior de los motores de almacenamiento** y en cómo se materializan las decisiones de diseño en sistemas reales: organización en disco, estructuras de índice (**B-Trees**, familias **LSM**), journaling, compactación y, en la segunda parte, temas de **replicación, consistencia y tolerancia a fallos** en entornos distribuidos. <br> El enfoque no es aprender SQL ni el modelo relacional desde cero, sino entender **implementación y trade-offs**: por qué un motor se comporta como lo hace y qué implica para rendimiento y fiabilidad. <br> Es un libro muy bueno, pero **no lo recomiendo como primer contacto** con bases de datos, ya que para sacarle provecho se requiere comprender previamente transacciones, índices y, para las partes avanzadas, tener intuición sobre sistemas distribuidos. |

## 4. Data Engineering {#4-data-engineering}

Aprender sobre ingeniería de datos es vital porque los modelos de ML solo son tan buenos como los datos que los alimentan. Mientras que un científico de datos entrena modelos, el ingeniero de datos construye las tuberías (pipelines) robustas que garantizan que el flujo de información sea constante, limpio y escalable.

Sin estas bases, los proyectos de DS/ML fallan al pasar a producción. Aprender sobre esta área permite manejar *Big Data*, optimizar costos de computación y asegurar la calidad del dato. Es el puente que transforma un experimento aislado en una solución real y confiable dentro de cualquier empresa.

Esta selección de libros aborda los conceptos fundamentales de esta área.

| Portada | Descripción |
| --- | --- |
| ![Fundamentals of Data Engineering](images/books/data-engineering/fundamentals-of-data-engineering.png) | **Nombre:** [Fundamentals of Data Engineering](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781098119058/) <br> **Autores:** Joe Rels y Matt Housley <br><br> Esta es una guía que define y estructura el campo de *Data Engineering*, centrandose en conceptos fundamentales en vez de herramientas específicas. <br> El libro se centra en *el ciclo de vida de los datos*, dividido en 5 etapas: *Generation*, *Storage*, *Ingestion*, *Transformation* y *Serving*, además de lo que los autores llaman *undercurrents* (*security*, *data architecture*, *data management*, etc.), que son responsabilidades y disciplinas transversales a todo el ciclo de vida. <br> Considero que es una guía muy útil para comprender como se gestionan los datos en medianas y grandes organizaciones, y para comprender limitaciones y procesos detrás de los datos que se consumen, mejorando la colaboración entre equipos de ingeniería. |
| ![Designing Distributed Systems](images/books/data-engineering/DDS.png) | **Nombre:** [Designing Distributed Systems](https://www.oreilly.com/library/view/designing-distributed-systems/9781098156343/) <br> **Autores:** [Brendan Burns](https://x.com/brendandburns) <br><br> Este libro escrito por el co-fundador del proyecto de Kubernetes sirve como introducción a *sistemas distribuidos*. Es un libro pequeño y orientado en la implementación, centrado en *patrones de diseños de contenedores* y como estos son usados para construir aplicaciones en la nube. Es ideal para que te hagas una idea de como se estructuran los servicios modernos. Es una lectura relativamente ligera a comparación a otros libros que abordan esta temática y te ayudará a entender vocabulario y patrones de diseño usados en desarrollo cloud-native. <br><br> Sugiero que estudies de este libro antes de pasar mi siguiente recomendación. | 
| ![Designing Data-Intensive Applications](images/books/data-engineering/DDIA.png) | **Nombre:** [Designing Data-Intensive Applications](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/) <br> **Autores:** [Martin Kleppmann](https://martin.kleppmann.com/) y Chris Riccomini <br><br> Otro libro clásico y muy recomendado de software, en específico para el área de *sistemas distribuidos* y *arquitectura de datos*. <br> Se centra en los conceptos fundamentales y *trade-offs* a la hora de desarrollar sistemas escalables y mantenibles donde los principales desafíos son el volumen, la velocidad y la complejidad de los datos. Aborda temas como el *modelado de datos*, *almacenamiento* y *recuperación*, *particionamiento*, *transacciones* (principios ACID), *procesamiento de datos en tiempo real*, etc. <br> La primera vez que intenté usarlo como material de estudio, el contenido me resultó excesivamente denso porque opera a nivel de diseño de sistemas complejos (más allá de solamente escribir código y simple desarrollo de software). <br><br> Recomiendo explorarlo cuando ya tengas familiaridad con el flujo de datos en entornos reales, lo que te permitirá conectar la teoría con los desafíos de infraestructura que el libro expone. |

## 5. Data Analysis {#5-data-analysis}

Esta disciplina se centra en traducir datos históricos en decisiones estratégicas. Su propósito es transformar cifras en *dashboards* e *insights* accionables que reemplazan la intuición por evidencia. El análisis de datos se apoya en herramientas como *Excel*, *Power BI*, *Tableau* o *Looker*, pero su éxito depende de habilidades críticas como el pensamiento analítico, la comunicación efectiva y una profunda lógica de negocio. 

Cuando se integra con conocimientos de ingeniería de datos, un profesional de esta área logra una autonomía total: sabe como optimizar consultas *SQL* y construir flujos de trabajo más rápidos, creando un proceso de análisis híbrido, eficiente y de alto valor.

Esta selección de libros aborda las habilidades fundamentales tanto técnicas como blandas para que te introduzcas en esta área. 

| Portada | Descripción |
| --- | --- |
| ![Python for Data Analysis](images/books/data-analysis/python-for-data-analysis.png) | **Nombre:** [Python for Data Analysis, 3rd edition](https://wesmckinney.com/book/) (Web oficial) <br> **Autor:** [Wes McKinney](https://wesmckinney.com/) <br><br> Libro del creador de *pandas* sobre el ecosistema Python para cargar, limpiar, transformar y analizar datos con herramientas actuales del stack científico. Si quieres aprender Python enfocado al análisis de datos, este es un recurso indispensable que te enseñará todo lo necesario a la hora de manipular datos y extraer valor de ellos. |
| ![Effective Pandas 2](images/books/data-analysis/effective-pandas.png) | **Nombre:** [Effective Pandas](https://store.metasnake.com/effective-pandas-book) <br> **Autor:** [Matt Harrison](https://store.metasnake.com/) <br><br> Guía práctica para usar *pandas* con buen criterio: patrones habituales, manipulación de tablas y flujo de trabajo en análisis reales. Recomiendo mucho tener este libro a mano para aprender a usar esta librería de manera eficiente y evitar errores comunes. La página web del autor también cuenta con varios cursos de Python, SQL y Pandas para distinos casos de uso.|
| ![Fundamentals of Data Visualization](images/books/data-analysis/fundamentals-of-data-visualization.png) | **Nombre:** [Fundamentals of Data Visualization](https://clauswilke.com/dataviz/) (Web oficial) <br> **Autor:** Claus O. Wilke <br><br> Referencia sobre principios de visualización: cuándo y cómo mostrar datos para que el gráfico comunique con claridad y sin engañar al lector. Muchos dicen que "la mejor forma de engañar, es engañar con datos", por lo que las buenas prácticas a la hora de visualizar y exponer tus hallazgos no son solo una habilidad fundamental para cualquier aspirante a trabajar como analista de datos o científico de datos, sino que también es fundamental emplearla de manera responsable. <br>Recomiendo echarle un ojo a la página web del libro para ver algunos de los gráficos que puede crear más allá de los más comunes. |
| ![Think Stats](images/books/data-analysis/think-stats-eda-3-edition.jpg) | **Nombre:** [Think Stats, 3rd edition](https://allendowney.github.io/ThinkStats/) (Web oficial) <br> **Autor:** [Allen B. Downey](https://www.allendowney.com/wp/) <br><br> Introducción a estadística y análisis exploratorio con código en Python, con énfasis en intuición y experimentación sobre fórmulas memorísticas. Este es un recurso de considero fundamental para cualquier persona con nociones básicas de estadística y probabilidades que quieran emplear esos conocimientos para desarrollar habilidades a la hora de trabajar con datos. <br> La página web oficial del libro incluye notebooks y ejercicios teóricos que lo hacen muy amigable para aprender como enfrentarnos a datasets complejos. <br> Lo recomiendo personalmente como un primer acercamiento al a la estadística y probabilidades si es que no cuentas con estudios rigurosos sobre esta área de las matemáticas. |
| ![Storytelling with Data](images/books/data-analysis/storytelling-with-data.png) | **Nombre:** [Storytelling with Data](https://www.storytellingwithdata.com/) <br> **Autora:** Cole Nussbaumer Knaflic <br><br> Este libro se enfoca en la importancia de presentar hallazgos con narrativa visual: simplificar gráficos, dirigir la atención y adaptar el mensaje a la audiencia. Elegir visualizaciones de manera efectiva, eliminar el caos (*cluttering*) y estrategias de como contar una historia (a *quién* le hablo, qué *quiero* que sepan y *cómo* lo debo exponer) son habilidades blandas críticas a la hora de usar datos para toma de decisiones. Muy recomendado para cualquiera que esté familiarizado con herramientas de BI. |

## 6. Data Science {#6-data-science}

La ciencia de datos actúa como un puente estratégico que traduce problemas de negocio en soluciones matemáticas mediante el análisis exploratorio, el diseño de experimentos (*A/B testing*) y la creación/entrenamiento de modelos de *Machine Learning*. Esta disciplina va más allá del código; requiere de un storytelling sólido para comunicar hallazgos a la dirección, asegurando siempre la ética y la gobernanza de los datos. 

Debido al avance tecnológico, es un campo que exige investigación constante e innovación para optimizar procesos y mantener la competitividad de la empresa a largo plazo.

La siguiente selección de libros aborda conceptos críticos tanto desde la perspectiva del negocio como de las habilidades técnicas necesarias para desempeñar este rol. El uso de los *LLMs* y la *IA generativa* ha impulsado que los cientificos de datos se alejen de los notebooks y se adentren en el desarrollo de software para crear sistemas completos. Dejaré un recurso que me abrió los ojos en su momento sobre este cambio de paradigma.


| Portada | Descripción |
| --- | --- |
| ![Data Science for Business](images/books/data-analysis/data-science-for-business.png) | **Nombre:** [Data Science for Business](https://www.oreilly.com/library/view/data-science-for/9781449374273/) <br> **Autores:** [Foster Provost](https://fosterprovost.com/) y Tom Fawcett <br><br> Este libro se centra en como extraer valor real de los datos en un entorno corporativo. Se enfoca en cómo plantear y evaluar problemas de datos desde la perspectiva del negocio y qué aporta el *data mining* (procesar grandes volumenes de información para descubrir patrones, relaciones tendencias no evidentes) sin perderse en detalles de implementación. Aunque no se centra en programación, aborda temas clásicos de ML (*aprendizaje supervisado* y *no supervisado*) desde un punto de vista conceptual. <br><br> Es un libro muy útil para comprender como estas técnicas se usan en entornos reales y como usar el *big data* como una oportunidad de negocio (casos típicos como *fuga de clientes*, *ventas*, *marketing dirigido*, etc.). Recomiendo mucho este libro como una primera introducción hacia qué es la *ciencia de datos* como disciplina. |
| ![Python Data Science Handbook](images/books/data-science/python-data-science-handbook.png) | **Nombre:** [Python Data Science Handbook, 2nd edition](https://github.com/jakevdp/PythonDataScienceHandbook) (GitHub oficial) <br> **Autores:** [Jake VanderPlas](http://vanderplas.com/) <br><br> Este libro está pensado para ser un *manual de referencia* sobre el uso de Python para Data Science. Asume que ya sabes lo básico del lenguaje por lo que salta directamente al ecosistema de ciencia de datos: *IPython*, *Numpy*, *Matplotlib*, *Pandas* y machine learning clásico usando *Scikit-learn*. <br><br> Es un recurso clásico y conciso con el que todo autodidacta de DS se ha topado. Recomendado siempre tenerlo a mano. |
| ![Data Science from Scratch](images/books/data-science/data-science-from-scratch.png) | **Nombre:** [Data Science from Scratch, 2nd edition](https://github.com/joelgrus/data-science-from-scratch) (GitHub oficial) <br> **Autor:** [Joel Grus](https://joelgrus.com/) <br><br> A diferencia del anterior, esta no es una guía de como usar las herramientas de la disciplina, sino que se enfoca en construir los algoritmos clásicos desde cero en código, abordando también la matemática necesaria. Abarca desde la recolección de datos hasta la creación de modelos de ML y una introducción a las redes neuronales, pasando por el análisis de datos y la visualización de resultados. <br><br> Es un recurso indispensable que recomiendo mucho, especialmente para aquellos que quieren comprender la 'caja negra' de los algoritmos de machine learning y como funcionan internamente. |
| ![Essential Math for Data Science](images/books/data-science/essential-math-for-ds.png) | **Nombre:** [Essential Math for Data Science](https://www.oreilly.com/library/view/essential-math-for/9781098102920/) <br> **Autor:** Thomas Nield <br><br> Una vez ya habiendo dominado la sintaxis de Python y las librerías más usadas, el libro anterior me gustó tanto que me propuse profundizar en la matemática aplicada a la ciencia de datos. Este interés fue lo que despertaría mi interés por el ML y las matemáticas aplicadas. En su momento (año 2022) quería algo simple, más que nada ligado al código en vez de a matemáticas con lápiz y papel. Fue así como me crucé con este curioso libro. <br><br> Aborda matemática fundamental como cálculo, álgebra lineal, estadística y probabilidades, algoritmos clásicos como regresiones lineal y logística y redes neuronales. Es un libro que considero fácil de seguir, que va directo al grano y con ejemplos de código en Python. Si quieres refrescar conocimiento o incursionar por primera vez en matemáticas para ML, recomiendo este libro como una referencia rápida que ligue directamente la teoría con código. Si eres como yo, puede que sea el punta pie inicial para que decidas aprender matemáticas de manera seria. |
| ![Practical Statistics for Data Scientists](images/books/data-science/practical-statistics-for-data-scientists.png) | **Nombre:** [Practical Statistics for Data Scientists, 2nd edition](https://www.oreilly.com/library/view/practical-statistics-for/9781492072935/titlepage01.html) <br> **Autores:** Peter Bruce, Andrew Bruce y Peter Gedeck <br><br> Este libro tiene por objetivo rellenar vacíos en conocimiento sobre estadística enfocada a la ciencia de datos. Aborda todo lo escencial: *estadística descriptiva*, *probabilidad*, *distribuciones de datos y métodos de muestreo*, *inferencia estadística*, *regresión*, *clasificacion* y *análisis de varianza*. También aborda *aprendizaje supervisado* y *no supervisado* en lo referente a ML clásico. <br><br> La primera edición está escrita en R, pero la segunda ya añade ejemplos usando Python. Recomiendo este libro para aquellos que quieren un entrenamiento formal en estadística y probabilidades, aunque es solo un punto de partida. |
| ![The Kaggle Book](images/books/data-science/the-kaggle-book.jpeg) | **Nombre:** [The Kaggle Book](https://www.oreilly.com/library/view/the-kaggle-book/9781835083208/) <br> **Autores:** Luca Massaron y Konrad Banachewicz <br><br> Este es otro libro curioso pero repleto de 'trucos' interesantes. Si estás interesado en ciencia de datos, seguramente has oido hablar de [Kaggle](https://www.kaggle.com/), la plataforma de competiciones de machine learning más grande del mundo. Este recurso cuenta con contribuidores activos de la plataforma y grandmasters que abordan técnicas avanzadas de análisis de datos y machine learning enfocados a competiciones. La parte central del libro expone técnicas empleadas por los competidores a la hora de *crear métricas*, *ingeniería de features* y *optimización de hiperparámetros*, etc. que te ayudar a mejorar tus habilidades al enfrentarte a datasets complejos. También aborda modelos de *boosting*, técnicas de *ensembling/stacking*, y modelado para *Computer Vision* y *NLP*. <br><br> Los testimonios de los colabodores también brindan una perspectiva distinta de como enfrentar problemas complejos que no se abordan en otros recursos. Que profesionales que se desempeñan en empresas de prestigio cuenten sus experiencias también sirve de inspiración y motivación. Es un libro que recomiendo ya avanzando en tu camino de aprendizaje y en el que puede que encuentres técnicas interesantes que te puedan servir en algún momento. |
| ![Software Engineering for Data Scientists](images/books/data-science/software-engineering-for-data-scientists.jpeg) | **Nombre:** [Software Engineering for Data Scientists](https://www.oreilly.com/library/view/software-engineering-for/9781098190873/) <br> **Autor:** Catherine Nelson <br><br> Hace ya mucho tiempo que los científicos de datos han migrado de notebooks enfocados en experimentados a aplicaciones completas. Para muchos profesionales de esta área que vienen de un background de matemáticas y estadística, el desarrollo de software es un área en la que no han incursionado. Por esto mismo, como dice la autora, esta es tu guía 'para escapar de los notebooks'. <br><br> Este pequeño y conciso libro presenta toda la información necesaria para expandir tu visión de experimentos restringidos a aplicaciones completas que generen soluciones reales, desde nociones de *qué es buen código*, hasta *manejo de errores*, *logging*. *debugging*, *programación orientada a objetos*, *refactorización de código*, *manejo de APIs*, *automatización*, *despliegue* y todo lo necesario para comprender como es el desarrollo de software real. <br><br> Fue una grata sorpresa encontrarme con este libro en su momento (2025) y no puedo recomendarlo suficiente. Cambió completamente mi perspectiva de cuales son los límites a la hora de usar el código para resolver un problema. Tanto es así que despertó mi interés por aprender de desarrollo fullstack profesional y como es que las técnicas de DS/ML son usadas en aplicaciones reales. Si ya te manejas en notebooks y tienes interés por desarrollo de software pero no sabes por donde empezar, este libro es para tí. |

## 7. Machine Learning {#7-machine-learning}

El *Machine Learning* representa un cambio de paradigma en la informática: en lugar de depender de algoritmos rígidos basados en fórmulas matemáticas predefinidas, estos sistemas tienen la capacidad de "aprender" y mejorar su precisión extrayendo patrones directamente de los datos. A diferencia de la programación tradicional, donde el humano dicta cada regla, aquí el modelo descubre la lógica subyacente por sí mismo. 

Dentro de este ecosistema, existen las *redes neuronales*, que son la base de un subconjunto más avanzado y especializado conocido como *Deep Learning*, que en un principio intentaban imitar el procesamiento de información del cerebro humano y que actualmente son usadas para resolver problemas complejos en diversas áreas como *Visión por computadora (CV)*, *Procesamiento de lenguaje natural (NLP)*, *Sistemas de recomendación*, etc.

Dentro de esta categoría, exploraremos los siguientes temas, desde las bases matemáticas hasta los fundamentos de cada área:

### 7.1 Matemáticas para Machine Learning {#71-matematicas-para-machine-learning}

Para que los modelos de ML y DL puedan aprender de los datos, se apoyan en una estructura matemática fundamental compuesta por cuatro pilares clave: 

1. *Álgebra lineal*: permite representar y manipular grandes volúmenes de datos mediante vectores y matrices.
2. *Cálculo multivariable*: es esencial para entender cómo ajustar los parámetros internos del modelo.
3. *Probabilidad y estadística*: proporcionan el marco para cuantificar la incertidumbre y realizar predicciones confiables.
4. *Optimización*: se encarga de encontrar la configuración más eficiente para minimizar errores y maximizar la precisión del sistema.

Aprender sobre estas áreas es muy valioso para entender cómo estos algoritmos funcionan internamente y como podemos optimizarlos para mejorar su rendimiento (además de para muchas otras disciplinas de ciencia y tecnología). 

La siguiente selección de libros de matemáticas está enfocada en ML en vez de en matemáticas puras ya que en mi opinión son más fáciles de asimilar y sirven a modo de introducción. Recomiendo ahondar en libros más rigurosos sobre cada área en específico cuando puedas. Están ordenados de "más fácil de seguir" a "más riguroso".
