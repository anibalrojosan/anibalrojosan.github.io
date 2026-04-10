# Libros técnicos que recomiendo para aprender software, Data Science y ML/AI

En este post he reunido **libros técnicos** que he usado y que me han sido útiles para aprender sobre software, Data Science y ML/AI (y un poco de otras áreas). Es una guía práctica para orientarte en libros que te ayudarán a profundizar en tus conocimientos.

## Tabla de contenidos

- [1. ¿Vale la pena leer libros técnicos?](#1-vale-la-pena-leer-libros-tecnicos)
- [2. Libros para aprender a programar con Python](#2-libros-para-aprender-a-programar-con-python)
    - [2.1 Nivel básico](#21-nivel-basico)
    - [2.2 Nivel intermedio/avanzado](#22-nivel-intermedioavanzado)
- [3. Libros de software](#3-libros-de-software)
- [4. Libros de Data Analysis](#4-libros-de-data-analysis)
- [5. Libros de Data Science](#5-libros-de-data-science)
- [6. Libros de Machine Learning](#6-libros-de-machine-learning)
    - [6.1. Libros de matemáticas para Machine Learning](#61-libros-de-matematicas-para-machine-learning)
    - [6.2. Libros de Deep Learning](#62-libros-de-deep-learning)
    - [6.3. Libros de Reinforcement Learning](#63-libros-de-reinforcement-learning)
    - [6.4. Libros de Computer Vision](#64-libros-de-computer-vision)
    - [6.5. Libros de Natural Language Processing](#65-libros-de-natural-language-processing)
- [7. Libros de Generative AI](#7-libros-de-generative-ai)

## 1. ¿Vale la pena leer libros técnicos? {#1-vale-la-pena-leer-libros-tecnicos}

Como mencioné en mi [guía general para aprender a programar](post.html?post=2026-01-20-learning-to-code-in-the-ai-era-es.md), considero que los libros son excelentes para brindarte un curriculum estructurado el cual seguir. Se habla mucho de que actualmente 'la industria se mueve mucho más rápido que los libros, por lo que estos quedan anticuados muy rápido'. Me gustaría dar mi opinión sobre esto: 
- Es cierto que, en particular en GenAI, el avance es tan rápido que técnicas y herramientas nacen y quedan 'obsoletas' en poco tiempo, recomiendo echarle un ojo a estos libros para comprender fundamentos y la gran cantidad de subáreas que existen en el mundo de la IA. Hay librerías y frameworks que han sido adoptados de una manera muy rápida por la industria para sacarle provecho a los modelos SOTA de ese momento. Y así de rápido, los nuevos modelos y sus mejoras en *tool calling* y *harness* las han convertido en actores secundarios. Este hecho no te debe hacer creer que los libros que recomendaré no te puedan ser útiles.
- Por otro lado, hay disciplinas que son fundamentales. Las **matemáticas**, **estadística**, los **principios de la informática** o de cualquier ciencia es conocimiento base que no expira. Los fundamentos son los fundamentos: el cálculo multivariable, álgebra lineal, matemáticas discretas o resolución de problemas es conocimiento base que no expira, y te pueden servir para múltiples disciplinas más alla del desarrollo de software. 

**Cómo elijo qué recomiendo**: Siguiendo mis criterios de mi blog de [cursos online que recomiendo](post.html?post=2026-04-08-online-courses-es.md), para recomendar algún libro, considero tres criterios principales:

1. Los he leído (en mayor o menor medida) y me han sido útiles para aprender.
2. Son libros ampliamente recomendados por la comunidad y son escritos por referentes en la industria.
3. Pertenecen a editoriales de prestigio. Si no es así, el autor tiene una página web y/o repo de GitHub con contenido útil sobre su libro.

## 2. Libros para aprender a programar con Python {#2-libros-para-aprender-a-programar-con-python}

### 2.1 Nivel básico {#21-nivel-basico}

| Portada | Descripción |
| --- | --- |
| ![Automating the boring stuff with Python](images/books/python/automating-the-boring-stuff-with-python.png) | **Nombre:** [Automating the Boring Stuff with Python](https://automatetheboringstuff.com/) <br> **Autor:** [Al Sweigart](https://inventwithpython.com/) <br><br> Este libro cubre todo lo básico, desde sintáxis, control de flujo, funciones y estructuras de datos básicas hasta manipulación de archivos y web scraping. Muy recomendado para principiantes.|
| ![Python Crash Course](images/books/python/python-crash-course.png) | **Nombre:** [Python Crash Course](https://www.oreilly.com/library/view/python-crash-course/9781098156664/) <br> **Autor:** [Eric Matthes](https://ehmatthes.github.io/) <br><br> Igual que el libro anterior, pero con un enfoque más práctico y ejemplos más realistas. |
| ![Think Python](images/books/python/think-python.png) | **Nombre:** [Think Python](https://allendowney.github.io/ThinkPython/) <br> **Autor:** [Allen B. Downey](https://www.allendowney.com/wp/) <br><br> Si bien es un libro para principiantes, aborda también más avanzados como *programación orientada a objetos* (OOP) y *list comprehensions*. Recomiendo comenzar con este si ya conoces un poco de Python y quieres profundizar en sus conceptos fundamentales. |

### 2.2 Nivel intermedio/avanzado {#22-nivel-intermedioavanzado}

| Portada | Descripción |
| --- | --- |
| ![Fluent Python](images/books/python/fluent-python.png) | **Nombre:** [Fluent Python](https://www.fluentpython.com/) <br> **Autor:** [Luciano Ramalho](https://www.linkedin.com/in/lucianoramalho/?originalSubdomain=br) <br><br> La primera vez que me crucé con este libro creí que estaba enfocado en principiantes. Tan pronto comencé a leerlo, me di cuenta que no entendía nada, vi su índice y estaba lleno de conceptos de los que no había escuchado. Resulta que este libro en realidad es una guía más avanzada. <br> Toca temas como *dunder methods*, *context managers*, *generadores*, *iteradores*, *closures*, *decoradores*, *programación orientada a objetos*, *type hints* (muy usados en ML/AI), *concurrencia* y *metaprogramación*. <br> Si ya tienes conocimientos de Python, este libro es una excelente opción para profundizar en qué más ofrece este lenguaje además de lo básico. |