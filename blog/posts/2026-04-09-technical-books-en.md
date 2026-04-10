# Technical books that I recommend for learning software, Data Science and ML/AI

In this post I gathered **technical books** that I've used and that have been useful for me to learn about software, Data Science and ML/AI (and a bit of other areas). It is a practical guide to orient you in books that will help you deepen your knowledge.

## Table of contents

- [1. Should I read technical books?](#1-should-i-read-technical-books)
- [2. Python Books](#2-python-books)
    - [2.1 Basic Level](#21-basic-level)
    - [2.2 Intermediate/Advanced Level](#22-intermediateadvanced-level)
- [3. Software Books](#3-software-books)
    - [3.1 Basic Level](#31-basic-level)
    - [3.2 Data Structures and Algorithms](#32-data-structures-and-algorithms)
- [4. Data Analysis Books](#4-data-analysis-books)
- [5. Data Science Books](#5-data-science-books)
- [6. Machine Learning Books](#6-machine-learning-books)
    - [6.1. Math Books for Machine Learning](#61-math-books-for-machine-learning)
    - [6.2. Deep Learning Books](#62-deep-learning-books)
    - [6.3. Reinforcement Learning Books](#63-reinforcement-learning-books)
    - [6.4. Computer Vision Books](#64-computer-vision-books)
    - [6.5. Natural Language Processing Books](#65-natural-language-processing-books)
- [7. Generative AI Books](#7-generative-ai-books)

## 1. Should I read technical books? {#1-should-i-read-technical-books}

As I mentioned in my [general guide to learning how to program](post.html?post=2026-01-20-learning-to-code-in-the-ai-era-en.md), I consider that books are excellent for giving you a structured curriculum to follow. It is often said that currently 'the industry moves much faster than books, so these quickly become outdated'. I would like to give my opinion on this: 
- It is true that, particularly in GenAI, the advance is so fast that techniques and tools are born and become 'obsolete' in a short time, I recommend taking a look at these books to understand fundamentals and the great number of sub-areas that exist in the world of AI. There are libraries and frameworks that have been adopted by the industry very quickly to take advantage of the SOTA models of that moment. And so quickly, the new models and their improvements in *tool calling* and *harness* have made them secondary actors. This fact should not make you believe that the books I recommend are not useful to you.
- On the other hand, there are disciplines that are fundamental. The **mathematics**, **statistics**, the **principles of computer science** or any science is base knowledge that does not expire. The foundations are the foundations: multivariate calculus, linear algebra, discrete mathematics or problem solving is base knowledge that does not expire, and can serve for multiple disciplines beyond software development. 

**How I choose what to recommend**: Following my criteria from my blog post on [online courses that I recommend](post.html?post=2026-04-08-online-courses-en.md), to recommend any book, I consider the following three criteria:

1. I have read them (to varying degrees) and they have been useful for me to learn.
2. They are widely recommended by the community and are written by referents in the industry.
3. They belong to prestigious publishers. If not, the author has a website and/or GitHub repo with useful content about their book.

## 2. Python Books {#2-python-books}

### 2.1 Basic Level {#21-basic-level}

| Cover | Description |
| --- | --- |
| ![Automating the boring stuff with Python](images/books/python/automating-the-boring-stuff-with-python.png) | **Title:** [Automating the Boring Stuff with Python](https://automatetheboringstuff.com/) <br> **Author:** [Al Sweigart](https://inventwithpython.com/) <br><br> This book covers the basics, from syntax, flow control, basic functions and data structures to file manipulation and web scraping. Very recommended for beginners. |
| ![Python Crash Course](images/books/python/python-crash-course.png) | **Title:** [Python Crash Course](https://www.oreilly.com/library/view/python-crash-course/9781098156664/) <br> **Author:** [Eric Matthes](https://ehmatthes.github.io/) <br><br> Same as the previous book, but with a focus on mini projects. It has a more realistic approach. It may resonate more with you if you like learning being more conscious of the practical applications instead of just theory. |
| ![Think Python](images/books/python/think-python.png) | **Title:** [Think Python](https://allendowney.github.io/ThinkPython/) <br> **Author:** [Allen B. Downey](https://www.allendowney.com/wp/) <br><br> While it is a book for beginners, it also addresses more advanced topics like *object-oriented programming* (OOP) and *list comprehensions*. I recommend starting with this if you already know a bit of Python and want to deepen its fundamental concepts. |

### 2.2 Intermediate/Advanced Level {#22-intermediateadvanced-level}

| Cover | Description |
| --- | --- |
| ![Fluent Python](images/books/python/fluent-python.png) | **Title:** [Fluent Python](https://www.fluentpython.com/) <br> **Author:** [Luciano Ramalho](https://www.linkedin.com/in/lucianoramalho/?originalSubdomain=br) <br><br> The first time I came across this book I thought it was focused on beginners. As soon as I started reading it, I realized I didn't understand anything, I looked at its table of contents and it was full of concepts I hadn't heard of. Turns out this book is actually a more advanced guide. <br> It covers topics like *dunder methods*, *context managers*, *generators*, *iterators*, *closures*, *decorators*, *object-oriented programming*, *type hints* (very used in ML/AI), *concurrency* and *metaprogramming*. <br> If you already know Python, this book is an excellent option to deepen what else this language offers besides the basics. |

## 3. Software Books {#3-software-books}

### 3.1 Basic Level {#31-basic-level}
| Cover | Description |
| --- | --- |
| ![How Computers Really Work](images/books/software/how-computers-really-work.png) | **Title:** [How Computers Really Work](https://www.amazon.com/How-Computers-Really-Work-Explained/dp/161729875X) <br> **Author:** [Matthew Justice](https://www.mattjustice.com/) <br><br> As it name says, this book covers everything about how computers work, and what allows their use in everyday life. It covers from low level (*circuits*, *binary*, *memory*) to high level (*operating systems*, *programming languages*, *how the internet works*). <br> I recommend, in addition to knowing how to *use* a computer to program, to understand how many of the things we take for granted work below. With basic knowledge of mathematics and science is enough to understand it. <br> |
| ![Clean Code](images/books/software/clean-code.jpg) | **Title:** [Clean Code](https://www.oreilly.com/library/view/clean-code-a/9780136083238/) <br> **Author:** [Robert C. Martin](https://x.com/unclebobmartin?lang=es) <br><br> This is a very famous book. It focuses on how to build software easily that is reusable and easy to maintain. I recommend giving it a look, you can take several ideas that will help you organize your code. <br> |
| ![The Pragmatic Programmer](images/books/software/thepragmaticprogrammer.png) | **Title:** [The Pragmatic Programmer: Your Journey to Mastery](https://www.oreilly.com/library/view/the-pragmatic-programmer/9780135956977/) <br> **Authors:** Andrew Hunt and Dave Thomas <br><br> This is a practical guide to improve code quality. Here the famous concept of DRY (Don't Repeat Yourself) and other best practices for writing clean, simple and maintainable code are discussed. It also talks about how to learn new tools and how to perform rigorous tests. I consider that its focus on fostering curiosity and continuous learning is critical to being able to adapt to an industry in constant change. <br> |

### 3.2 Data Structures and Algorithms {#32-data-structures-and-algorithms}
| Cover | Description |
| --- | --- |
| ![Introduction to Algorithms](images/books/software/introduction-to-algorithms.png) | **Title:** [Introduction to Algorithms](https://mitpress.mit.edu/9780262367509/introduction-to-algorithms/) <br> **Authors:** [Thomas H. Cormen](https://scholar.google.com/citations?user=V5FJ6pIAAAAJ&hl=en), Charles E. Leiserson, Ronald L. Rivest, Clifford Stein <br><br> It's an introduction, but what an introduction! Smaller in size, but of a high technical level. When you start to delve into DSA with small courses and exercises from Leetcode, at some point you will have to resort to a book if you want to understand beyond solving standard problems. This is the one I personally recommend.<br> |
| ![The Art of Computer Programming](images/books/software/the-art-of-computer-programming.jpg) | **Title:** The Art of Computer Programming <br> **Author:** [Donald E. Knuth](https://www-cs-faculty.stanford.edu/~knuth/) <br><br> This is a classic book in the field of algorithm analysis and fundamental data structures. Here the difficulty increases considerably with respect to the previous books. Its content is much more technical than the previous books, so it is more difficult to digest. <br> It is quite dense (it has 7 volumes), so it requires a lot of time commitment... several years maybe. It is a basic bible in the field of DSA, very recommended if you want to deepen them from a theoretical perspective.<br> |

