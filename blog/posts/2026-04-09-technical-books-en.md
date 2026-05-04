# Technical books that I recommend for learning software, Data Science and ML/AI

In this post I gathered **technical books** that I've used and that have been useful for me to learn about software, Data Science and ML/AI (and a bit of other areas). It is a practical guide to orient you in books that will help you deepen your knowledge.

## Table of contents

- [1. Introduction](#1-introduction)
    - [1.1 Should I read technical books?](#11-should-i-read-technical-books)
    - [1.2 How to read technical books](#12-how-to-read-technical-books)
    - [1.3 Criteria for this guide](#13-criteria-for-this-guide)
- [2. Python](#2-python)
    - [2.1 Basic Level](#21-basic-level)
    - [2.2 Intermediate/Advanced Level](#22-intermediateadvanced-level)
- [3. Software Development](#3-software-development)
    - [3.1 Basic Level (Learning to Code)](#31-basic-level-learning-to-code)
    - [3.2 Intermediate/Advanced Level (Software Architecture and Design)](#32-intermediateadvanced-level-software-architecture-and-design)
    - [3.3 Data Structures and Algorithms](#33-data-structures-and-algorithms)
    - [3.4 Databases](#34-databases)
- [4. Data Engineering](#4-data-engineering)
- [5. Data Analysis](#5-data-analysis)
- [6. Data Science](#6-data-science)
- [7. Machine Learning](#7-machine-learning)
    - [7.1 Math for Machine Learning](#71-math-for-machine-learning)
    - [7.2 Applied Machine Learning](#72-applied-machine-learning)
    - [7.3 Deep Learning](#73-deep-learning)
    - [7.4 Reinforcement Learning](#74-reinforcement-learning)
    - [7.5 Computer Vision](#75-computer-vision)
    - [7.6 Natural Language Processing](#76-natural-language-processing)
- [8. Generative AI](#8-generative-ai)

## 1. Introduction {#1-introduction}

### 1.1 Should I read technical books? {#11-should-i-read-technical-books}

As I mentioned in my [general guide to learning how to program](post.html?post=2026-01-20-learning-to-code-in-the-ai-era-en.md), I consider that books are excellent for giving you a structured curriculum to follow. It is often said that currently 'the industry moves much faster than books, so these quickly become outdated'. I would like to give my opinion on this: 

1. It is true that, particularly in *GenAI*, the advance is so fast that techniques and tools that are very used in the industry, like *LangChain*, can become 'obsolete' in a short time due to the improvements in *tool calling* and *harnesses* of the new models. However, this obsolescence does not diminish the value of these books; on the contrary, they are essential to master the fundamentals and understand the complexity of the sub-areas of data and AI, allowing you to go beyond the trendy libraries.

2. On the other hand, there are disciplines that are fundamental. The **mathematics**, **statistics**, the **principles of computer science** or any science is base knowledge that does not expire. The foundations are the foundations: multivariate calculus, linear algebra, discrete mathematics or problem solving is base knowledge that does not expire, and can serve for multiple disciplines beyond software development. 

### 1.2 How to read technical books {#12-how-to-read-technical-books}

A technical book is not read like a novel. This is the first mistake that prevents you from extracting information efficiently and is a free source of frustration. To make the investment of time worthwhile, here are some tips:

1. **Do not read linearly**: Unlike fiction, you can skip. Read the index and introduction to understand the "map" of the book. If you already master a topic, skip it or give it a quick read (you can always find gaps in your knowledge). Focus on the chapters that solve your current questions.

2. **"Get your hands dirty"**: If the book has code or exercises, write it yourself. It is not enough to read the code block and say "oh, I understand what it does". By typing it, you will face syntax errors and understand the real logic. Change variable names, try to break the code, etc.

3. The GitHub repo is your best friend: If a book has its own documentation, it is a fundamental resource that you have to take advantage of. It is very common to have complementary notebooks for each chapter, and the 'issues' of the repo can have errata and updates.

4. Read in three passes: first a quick pass: skim the chapter, look at the diagrams, bold and summaries. Understand the "what". Then, active reading: read slowly and underline or take notes. Understand the "how". Finally, execute: Do the exercises and challenges. Understand the "why". You do not need to read a chapter completely before exercising what you have learned.

5. Create a parallel project:
Use the book as a reference to build something yourself. Example: if the book is about "Escaping the Notebooks", don't just do the book's exercises; try to convert one of your old notebooks into a real application following the author's steps. If it's about the syntax of a library, open a separate notebook, download a dataset and practice with the syntax. Any excuse is good to put into practice what you have learned.

### 1.3 Criteria for this guide {#13-criteria-for-this-guide}

Following my criteria from my blog post on [online courses that I recommend](post.html?post=2026-04-08-online-courses-en.md), to recommend any book, I consider the following three criteria:

1. I have read them (to varying degrees) and they have been useful for me to learn.

2. They are widely recommended by the community and are written by referents in the industry.

3. They belong to prestigious publishers. If not, the author has a website and/or GitHub repo with useful content about their book.

## 2. Python {#2-python}

Python is considered the ideal programming language if you are interested in *DS/ML/AI*. It is by far the most used language in this area because:

- It is a versatile language: it can be used not only for scientific computing, but also for *backend/frontend/data engineering*, etc.

- It is easy to learn and read (syntax very similar to English)

- It is a high-level language: it allows abstracting away from the machine and focusing on programming logic.

- It has a large number of libraries and frameworks that have been adopted by the industry and are very used in the day to day, both for software development and for data analysis and machine learning.

In this section we will focus only on learning Python. For this, I have divided the books into two levels:

### 2.1 Basic Level {#21-basic-level}

Resources for people without programming knowledge and who have decided to learn Python as their first programming language.

| Cover | Description |
| --- | --- |
| ![Automating the boring stuff with Python](images/books/python/automating-the-boring-stuff-with-python.png) | **Title:** [Automating the Boring Stuff with Python](https://automatetheboringstuff.com/) <br> **Author:** [Al Sweigart](https://inventwithpython.com/) <br><br> This book covers the basics, from syntax, flow control, basic functions and data structures to file manipulation and web scraping. Very recommended for beginners. |
| ![Python Crash Course](images/books/python/python-crash-course.png) | **Title:** [Python Crash Course](https://www.oreilly.com/library/view/python-crash-course/9781098156664/) <br> **Author:** [Eric Matthes](https://ehmatthes.github.io/) <br><br> Same as the previous book, but with a focus on mini projects. It has a more realistic approach. It may resonate more with you if you like learning being more conscious of the practical applications instead of just theory. |
| ![Think Python](images/books/python/think-python.png) | **Title:** [Think Python](https://allendowney.github.io/ThinkPython/) <br> **Author:** [Allen B. Downey](https://www.allendowney.com/wp/) <br><br> While it is a book for beginners, it also addresses more advanced topics like *object-oriented programming* (OOP) and *list comprehensions*. I recommend starting with this if you already know a bit of Python and want to deepen its fundamental concepts. |

### 2.2 Intermediate/Advanced Level {#22-intermediateadvanced-level}

Resources for those who already have basic knowledge of Python and want to deepen their fundamental concepts and what this language can offer.

| Cover | Description |
| --- | --- |
| ![Fluent Python](images/books/python/fluent-python.png) | **Title:** [Fluent Python](https://www.fluentpython.com/) <br> **Author:** [Luciano Ramalho](https://www.linkedin.com/in/lucianoramalho/?originalSubdomain=br) <br><br> The first time I came across this book I thought it was focused on beginners. As soon as I started reading it, I realized I didn't understand anything, I looked at its table of contents and it was full of concepts I hadn't heard of. Turns out this book is actually a more advanced guide. <br> It covers topics like *dunder methods*, *context managers*, *generators*, *iterators*, *closures*, *decorators*, *object-oriented programming*, *type hints* (very used in ML/AI), *concurrency* and *metaprogramming*. <br> If you already know Python, this book is an excellent option to deepen what else this language offers besides the basics. |

## 3. Software Development {#3-software-development}

Due to the increasingly rapid adoption of GenAI tools, areas that historically have used code mainly as a means to solve problems have incorporated software development tools to create complete systems. Ten to fifteen years ago, it was enough to have a solid foundation in mathematics, learn a little programming to be able to analyze data in isolated notebooks and present results. Today, it is expected to be able to create complete applications that incorporate advanced data analysis and ML/AI models. This opens up a wide range of possibilities to innovate, so understanding the fundamentals of *computer science* and *software engineering* is a must.

This is a huge area that addresses a lot of different topics and is constantly evolving, so continuous learning is critical. To keep it relatively simple and easy to follow, I have divided this section into books in four categories:

### 3.1 Basic Level (Learning to Code) {#31-basic-level-learning-to-code}

Fundamentals of how computers work and good practices for writing clean and maintainable code.

| Cover | Description |
| --- | --- |
| ![How Computers Really Work](images/books/software/how-computers-really-work.png) | **Title:** [How Computers Really Work](https://www.amazon.com/How-Computers-Really-Work-Explained/dp/161729875X) <br> **Author:** [Matthew Justice](https://www.mattjustice.com/) <br><br> As it name says, this book covers everything about how computers work, and what allows their use in everyday life. It covers from low level (*circuits*, *binary*, *memory*) to high level (*operating systems*, *programming languages*, *how the internet works*). <br> I recommend, in addition to knowing how to *use* a computer to program, to understand how many of the things we take for granted work below. With basic knowledge of mathematics and science is enough to understand it. <br> |
| ![Clean Code](images/books/software/clean-code.jpg) | **Title:** [Clean Code](https://www.oreilly.com/library/view/clean-code-a/9780136083238/) <br> **Author:** [Robert C. Martin](https://x.com/unclebobmartin?lang=es) <br><br> This is a very famous book, focused on how to build software that is reusable and easy to maintain. I recommend giving it a look if you are just starting to program, you can take several ideas that will help you organize your code. If you are already used to programming and reading code, chances are you already have many of those ideas more or less internalized. It is often criticized because the philosophy of this book is very rigid and dogmatic, and for many applying these principles rigidly over-complicates the code. As in everything, I recommend that you review it and form your own opinion. <br> |
| ![The Pragmatic Programmer](images/books/software/thepragmaticprogrammer.png) | **Title:** [The Pragmatic Programmer: Your Journey to Mastery](https://www.oreilly.com/library/view/the-pragmatic-programmer/9780135956977/) <br> **Authors:** Andrew Hunt and Dave Thomas <br><br> This is a practical guide to improve code quality. Here the famous concept of DRY (*Don't Repeat Yourself*) and other best practices for writing clean, simple and maintainable code are discussed. It also talks about how to learn new tools and how to perform rigorous tests. <br> I consider that its focus on fostering curiosity and continuous learning is critical to being able to adapt to an industry in constant change. It is a book that you can review again and again regardless of your seniority.<br> |

### 3.2 Intermediate/Advanced Level (Software Architecture and Design) {#32-intermediateadvanced-level-software-architecture-and-design}

After feeling like you are programming, it is time to learn how to package your code to create complex systems. This involves understanding about software architecture, design patterns, etc.

| Cover | Description |
| --- | --- |
| ![Fundamentals of Software Architecture](images/books/software/fundamentals-of-software-architecture.png) | **Title:** [Fundamentals of Software Architecture](https://www.oreilly.com/library/view/fundamentals-of-software/9781492043447/) <br> **Authors:** Mark Richards and Neal Ford <br><br> This book presents a general map of this discipline, dividing the book into two large topics. First, the **fundamentals** like *modularity* and *architectural thinking*, and second, the **patterns** of the most common design (*layered*, *monolith*, *microservices*, etc.) and their advantages and disadvantages. <br> Once you have mastered how to write code, it is necessary to understand how this is packaged and modularized. This set of modules finally generates an application, and there are many design philosophies depending on the size and complexity of the final system we want to create. <br> I recommend this book a lot when you want to introduce yourself into this area.|
| ![Software Architecture: The Hard Parts](images/books/software/software-arquitecture-the-hard-parts.png) | **Title:** [Software Architecture: The Hard Parts](https://www.oreilly.com/library/view/software-architecture-the/9781492086888/) <br> **Authors:** Neal Ford, Mark Richards, Pramod Sadalage and Zhamak Dehghani <br><br> You might think of this book as a continuation of the previous one. Made by the same group of consultants, it is a deeper analysis focused on situations where there are no clear *best practices* (it will be necessary to take the *least bad*). <br> It explains how to break a monolith and how to reunite services (*communication* and *transactionality*) and different *trade-offs* that must be considered when choosing a software architecture. The focus is interesting because the authors place themselves in the place of a fictitious company (called *Sysops Squad*) and use it to expose and justify their points. Additionally, it deepens even more in data storage and manipulation than the previous book (data architectures like *Data Mesh*). <br> I recommend this book once you have already made small projects and have experimented with different architectures, since I consider it more useful for developers with a certain degree of *seniority*.|

### 3.3 Data Structures and Algorithms {#33-data-structures-and-algorithms}

How data is stored and processed in memory and disk, and common algorithms (search and sorting, etc.). It is a fundamental area to develop problem-solving skills, algorithmic thinking and resource optimization.

| Cover | Description |
| --- | --- |
| ![Grokking Algorithms](images/books/software/grokking-algorithms.webp) | **Title:** [Grokking Algorithms](https://www.oreilly.com/library/view/grokking-algorithms/9781617292231/) <br> **Author:** Aditya Y. Bhargava <br><br> This is a guide with more than 400 illustrations centered on the most important algorithms (*search*, *sorting*, *graph algorithms*, etc.), as well as the fundamental data structures (*trees*, *hashes*, *queues*, etc.). Of course, it also includes both theoretical exercises and code examples.<br> If you don't know anything about DSA theory, I recommend this book as your first introduction because the illustrations facilitate the intuition behind these concepts. |
| ![Introduction to Algorithms](images/books/software/introduction-to-algorithms.png) | **Title:** [Introduction to Algorithms](https://mitpress.mit.edu/9780262367509/introduction-to-algorithms/) <br> **Authors:** [Thomas H. Cormen](https://scholar.google.com/citations?user=V5FJ6pIAAAAJ&hl=en), Charles E. Leiserson, Ronald L. Rivest, Clifford Stein <br><br> More than 1,000 pages of advanced material on data structures and algorithms, packed into a classic textbook. As you go deeper into DSA with courses and LeetCode-style exercises, you will eventually need a book like this if you want to understand more than how to solve standard interview problems. <br> Algorithmic thinking and problem-solving are skills that are always worth having in our toolkit, and they have to be trained deliberately as such. |
| ![The Art of Computer Programming](images/books/software/the-art-of-computer-programming.jpg) | **Title:** The Art of Computer Programming <br> **Author:** [Donald E. Knuth](https://www-cs-faculty.stanford.edu/~knuth/) <br><br> This is a series of classic books in the field of algorithm analysis and fundamental data structures. Here the difficulty increases considerably with respect to the previous books. Its content is much more technical than the previous books, so it is more difficult to digest. <br> It is quite dense (it has 7 volumes), so it requires a lot of time commitment... several years maybe. It is a basic bible in the field of DSA, very recommended if you want to deepen them from a theoretical perspective.<br> |

### 3.4 Databases {#34-databases}

Fundamentals of how information is stored in relational databases, query optimization, etc.

| Cover | Description |
| --- | --- |
| ![Database System Concepts, 6th edition](images/books/databases/databases-system-concepts.png) | **Title:** [Database System Concepts](https://www.oreilly.com/library/view/database-system-concepts/9780136086233/) <br> **Authors:** Abraham Silberschatz, Henry F. Korth and S. Sudarshan <br><br> This is a complete university textbook on database systems. It covers almost everything necessary: *relational model*, *SQL*, *design* (ER, normalization), *transactions*, *concurrency control*, *recovery*, *indexes*, *query processing and optimization*, among other topics. <br> I recommend it as a first exposure to DBMS at a conceptual and algorithmic level, although certain mathematical rigor and patience are required. It is perfect for understanding databases beyond CRUD operations and query optimization. |
| ![Database Internals: A deep-dive into how distributed data systems work](images/books/databases/database-internals.png) | **Title:** [Database Internals: A deep-dive into how distributed data systems work](https://www.amazon.com/Database-Internals-deep-dive-distributed-systems/dp/1617296566) <br> **Author:** [Alex Petrov](https://x.com/ifesdjeen) <br><br> This book focuses on the **internal workings of storage engines** and how design decisions are materialized in real systems: disk organization, index structures (**B-Trees**, **LSM** families), journaling, compaction, and, in the second part, topics on **replication, consistency and fault tolerance** in distributed environments. <br> The focus is not on learning SQL or the relational model from scratch, but on understanding **implementation and trade-offs**: why a system behaves the way it does and what implications it has for performance and reliability. <br> It is a very good book, but **I do not recommend it as a first contact** with databases, because to get the most out of it you need to understand transactions, indexes, and, for the advanced parts, have an intuition about distributed systems. |

## 4. Data Engineering {#4-data-engineering}

Data Engineering is vital because ML models are only as good as the data that feeds them. While a data scientist trains models, a data engineer builds the robust pipelines that ensure the information flow is constant, clean and scalable.

Without these foundations, DS/ML projects fail in production. Mastering data engineering allows you to handle Big Data, optimize computing costs and ensure data quality. It is the bridge that transforms an isolated experiment into a real and reliable solution within any organization.

This selection of books addresses the fundamental conceptos of this area.

| Cover | Description |
| --- | --- |
| ![Fundamentals of Data Engineering](images/books/data-engineering/fundamentals-of-data-engineering.png) | **Title:** [Fundamentals of Data Engineering](https://www.oreilly.com/library/view/fundamentals-of-data/9781098108298/) <br> **Authors:** Joe Rels and Matt Housley <br><br> This is a guide that defines and structures the field of *Data Engineering*, centering on fundamental concepts instead of specific tools. <br> The book focuses on the *data life cycle*, divided into 5 stages: *Generation*, *Storage*, *Ingestion*, *Transformation* and *Serving*, as well as what the authors call *undercurrents* (*security*, *data architecture*, *data management*, etc.), which are responsibilities and transversal disciplines to the entire life cycle. <br> I consider this a very useful guide to understand how data is managed in medium and large organizations, and to understand the limitations and processes behind the data that is consumed, improving collaboration between engineering teams. |
| ![Designing Distributed Systems](images/books/data-engineering/DDS.png) | **Title:** [Designing Distributed Systems](https://www.oreilly.com/library/view/designing-distributed-systems/9781098156343/) <br> **Author:** [Brendan Burns](https://x.com/brendandburns) <br><br> This book written by the co-founder of the Kubernetes project serves as an introduction to distributed systems. It is a small and implementation-focused book centered on *container design patterns* and how they are used to build applications in the cloud. It is ideal to get an idea of how modern services are structured. It is a relatively light read compared to other books on this topic that will help you understand the vocabulary and design patterns used in cloud-native development. <br><br> I suggest studying this book before moving on to the next recomendation. |
| ![Designing Data-Intensive Applications](images/books/data-engineering/DDIA.png) | **Title:** [Designing Data-Intensive Applications](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/) <br> **Authors:** [Martin Kleppmann](https://martin.kleppmann.com/) and Chris Riccomini <br><br> Another classic and highly recommended book in software, specifically for the area of *distributed systems* and *data architectures*. <br> It focuses on fundamental concepts and *trade-offs* when developing scalable and maintainable systems where the main challenges are volume, speed and complexity of data. It addresses topics like *data modeling*, *storage* and *recovery*, *partitioning*, *transactions* (ACID principles), *real-time data processing*, etc. <br> The first time I tried to use it as study material, the content was too dense for me because it operates at the design level of complex systems (beyond just writing code and simple software development). <br> I recommend exploring it when you have familiarity with the data flow in real environments, which will allow you to connect theory with the infrastructure challenges the book exposes. |

## 5. Data Analysis {#5-data-analysis}

The goal of *data analysis* is to translate historical data into strategic decisions. Its purpose is to transform figures into actionable *dashboards* and *insights* that replace intuition with evidence. Data analysis is supported by tools like *Excel*, *Power BI*, *Tableau* or *Looker*, but its success depends on critical skills like analytical thinking, effective communication and a deep business logic. 

When integrated with knowledge of data engineering, a professional in this area achieves total autonomy: knows how to optimize *SQL* queries and build faster workflows, creating a hybrid analysis process, efficient and high value.

This selection of books addresses both technical and soft skills to help you get started in this area. The use of *LLMs* and *generative AI* has pushed data scientists to move away from notebooks and into software development to create complete systems. I will leave a resource that opened my eyes on this paradigm shift.

| Cover | Description |
| --- | --- |
| ![Python for Data Analysis](images/books/data-analysis/python-for-data-analysis.png) | **Title:** [Python for Data Analysis, 3rd edition](https://wesmckinney.com/book/) (Official page) <br> **Author:** [Wes McKinney](https://wesmckinney.com/) <br><br> Book from the creator of *pandas* about the Python ecosystem to load, clean, transform and analyze data with current scientific tools. If you want to learn Python focused on data analysis, this is an indispensable resource that will teach you everything you need to know about manipulating data and extracting value from them. |
| ![Effective Pandas 2](images/books/data-analysis/effective-pandas.png) | **Title:** [Effective Pandas](https://store.metasnake.com/effective-pandas-book) <br> **Author:** [Matt Harrison](https://store.metasnake.com/) <br><br> Practical guide to use *pandas* with good criteria: common patterns, table manipulation and workflow in real analysis. I recommend having this book at hand to learn how to use this library efficiently and avoid common errors. The author's website also offers several Python, SQL and Pandas courses for different use cases.|
| ![Fundamentals of Data Visualization](images/books/data-analysis/fundamentals-of-data-visualization.png) | **Title:** [Fundamentals of Data Visualization](https://clauswilke.com/dataviz/) (Official website) <br> **Author:** Claus O. Wilke <br><br> Reference on visualization principles: when and how to show data so that the graph communicates clearly and without misleading the reader. Many say "the best way to deceive is to deceive with data", so good practices when visualizing and presenting your findings are not only a fundamental skill for any aspiring data analyst or data scientist, but also a fundamental skill to use responsibly. <br> I recommend taking a look at the book's website to see some of the graphs it can create beyond the most common ones. |
| ![Think Stats](images/books/data-analysis/think-stats-eda-3-edition.jpg) | **Title:** [Think Stats, 3rd edition](https://allendowney.github.io/ThinkStats/) (Official website) <br> **Author:** [Allen B. Downey](https://www.allendowney.com/wp/) <br><br> Introduction to statistics and exploratory analysis with code in Python, with emphasis on intuition and experimentation over memorized formulas. This is a fundamental resource for any person with basic knowledge of statistics and probabilities who wants to use those knowledge to develop skills when working with data. <br> The official book's website includes notebooks and theoretical exercises that make it very friendly to learn how to deal with complex datasets. <br> I recommend it personally as a first approach to statistics and probabilities if you don't have rigorous studies on this area of mathematics. |
| ![Storytelling with Data](images/books/data-analysis/storytelling-with-data.png) | **Title:** [Storytelling with Data](https://www.storytellingwithdata.com/) <br> **Author:** [Cole Nussbaumer Knaflic](https://www.linkedin.com/in/coleknaflic/) <br><br> This book focuses on the importance of presenting findings through visual storytelling: simplifying charts, directing attention, and tailoring the message to the audience. Choosing visualizations effectively, eliminating clutter, and mastering storytelling strategies (knowing *who* you are talking to, what you *want* them to know, and *how* to present it) are critical soft skills for data-driven decision-making. Highly recommended for anyone familiar with BI tools. |

## 6. Data Science {#6-data-science}

Data science acts as a strategic bridge that translates business problems into mathematical solutions through exploratory analysis, experiment design (*A/B testing*) and model creation/training of *Machine Learning*. This discipline goes beyond code; it requires a solid storytelling to communicate findings to the direction, ensuring always ethics and quality in data governance. 

Due to the constant advancement of technology, this field requires constant research and innovation to optimize processes and maintain the company's competitiveness in the long term. 

This selection of books addresses critical concepts from both the business and technical skills needed to perform this role.

| Cover | Description |
| --- | --- |
| ![Data Science for Business](images/books/data-analysis/data-science-for-business.png) | **Title:** [Data Science for Business](https://www.oreilly.com/library/view/data-science-for/9781449374273/) <br> **Authors:** [Foster Provost](https://fosterprovost.com/) and Tom Fawcett <br><br> This book focuses on how to extract real value from data in a corporate environment. It focuses on how to formulate and evaluate data problems from a business perspective and what *data mining* (processing large volumes of information to discover patterns, relationships and trends that are not obvious) adds without losing sight of implementation details. Although it does not focus on programming, it addresses classic ML topics such as *supervised* and *unsupervised* learning. <br><br> It is a very useful book to understand how these techniques are used in real environments and how to use *big data* as a business opportunity (typical cases like *customer churn*, *sales*, *targeted marketing*, etc.). I recommend this book as a first step into *data science*. |
| ![Python Data Science Handbook](images/books/data-science/python-data-science-handbook.png) | **Title:** [Python Data Science Handbook, 2nd edition](https://github.com/jakevdp/PythonDataScienceHandbook) (Official GitHub) <br> **Authors:** [Jake VanderPlas](http://vanderplas.com/) <br><br> This book is designed to be a *reference manual* for using Python for Data Science. It assumes that you already know the basics of the language so it jumps directly to the Python data science ecosystem: *IPython*, *Numpy*, *Matplotlib*, *Pandas* and classic machine learning using *Scikit-learn*. <br> This is a classic and concise resource that every self-taught DS has encountered. Recommended to always have it at hand. |
| ![Data Science from Scratch](images/books/data-science/data-science-from-scratch.png) | **Title:** [Data Science from Scratch, 2nd edition](https://github.com/joelgrus/data-science-from-scratch) (Official GitHub) <br> **Author:** [Joel Grus](https://joelgrus.com/) <br><br> Unlike the previous one, this one is not a guide on how to use the tools of the discipline, but rather focuses on building the classic algorithms from scratch in code, addressing also the necessary mathematics. It covers from data collection to creating ML models and an introduction to neural networks, passing through data analysis and visualizing results. <br><br> It is an indispensable resource that I recommend a lot, especially for those who want to understand the 'black box' of ML algorithms and how they work internally. |
| ![Essential Math for Data Science](images/books/data-science/essential-math-for-ds.png) | **Title:** [Essential Math for Data Science](https://www.oreilly.com/library/view/essential-math-for/9781098102920/) <br> **Author:** Thomas Nield <br><br> Once you have mastered the syntax of Python and the most used libraries, the previous book impressed me so much that I decided to deepen my interest in applied mathematics. This interest would spark my interest in ML and applied mathematics. At the time (2022) I wanted something simple, more than anything linked to code instead of mathematics with pencil and paper. This is how I came across this curious book. <br><br> It covers fundamental mathematics like calculus, linear algebra, statistics and probabilities, classic algorithms like linear and logistic regressions and neural networks. It is a book that I consider easy to follow, that goes straight to the point and with code examples in Python. If you want to refresh your knowledge or delve into mathematics for ML for the first time, I recommend this book as a quick reference that directly links theory with code. If you are like me, it may be the initial step to learn mathematics seriously. |
| ![Practical Statistics for Data Scientists](images/books/data-science/practical-statistics-for-data-scientists.png) | **Title:** [Practical Statistics for Data Scientists, 2nd edition](https://www.oreilly.com/library/view/practical-statistics-for/9781492072935/titlepage01.html) <br> **Authors:** Peter Bruce, Andrew Bruce and Peter Gedeck <br><br> This book aims to fill gaps in knowledge about statistics focused on data science. It covers fundamental topics like *descriptive statistics*, *probability*, *data distributions and sampling methods* *statistical inference*, *regression*, *classification* and *analysis of variance*. It also addresses *supervised* and *unsupervised* learning in the context of classic ML. <br><br> The first edition is written in R, but the second edition adds examples using Python. I recommend this book for those who want a formal training in statistics and probabilities, although it is only a starting point. |
| ![The Kaggle Book](images/books/data-science/the-kaggle-book.jpeg) | **Title:** [The Kaggle Book](https://www.oreilly.com/library/view/the-kaggle-book/9781835083208/) <br> **Authors:** Luca Massaron and Konrad Banachewicz <br><br> This is another curious but full of interesting 'tricks' book. If you are interested in data science, you have probably heard of [Kaggle](https://www.kaggle.com/), the largest machine learning competition platform in the world. This resource has active contributors from the platform and grandmasters that address advanced data analysis and machine learning techniques focused on competitions. The central part of the book exposes techniques used by competitors to *metrics creation*, *feature engineering* and *hyperparameter optimization*, etc. that will help you improve your skills when facing complex datasets. It also addresses *boosting* models, *ensembling/stacking* techniques, and model building for *Computer Vision* and *NLP*. <br><br> The testimonials of the contributors also provide a different perspective on how to tackle complex problems that are not addressed in other resources. That professionals who work in prestigious companies share their experiences also serves as inspiration and motivation. It is a book that I recommend already advancing on your learning path and in which you may find interesting techniques that can serve you at some point. |
| ![Software Engineering for Data Scientists](images/books/data-science/software-engineering-for-data-scientists.jpeg) | **Title:** [Software Engineering for Data Scientists](https://www.oreilly.com/library/view/software-engineering-for/9781098190873/) <br> **Author:** Catherine Nelson <br><br> For a long time now, data scientists have been migrating from experiment-focused notebooks to full-scale applications. For many professionals in this field coming from a mathematics or statistics background, software development is uncharted territory. Because of this, as the author puts it, this is your guide to 'escaping the notebooks.' <br><br> This short and concise book presents all the information necessary to expand your vision from restricted experiments to full applications that generate real solutions—covering everything from the notions of what good code is to error handling, logging, debugging, object-oriented programming, code refactoring, API management, automation, deployment, and everything needed to understand real-world software development. <br><br> Finding this book back in 2025 was a pleasant surprise, and I can't recommend it enough. It completely changed my perspective on the limits of using code to solve problems. So much so that it sparked my interest in learning professional full-stack development and how DS/ML techniques are used in real applications. If you're already comfortable with notebooks and are interested in software development but don't know where to start, this book is for you. |

## 7. Machine Learning {#7-machine-learning}

*Machine Learning* represents a paradigm shift in computing: instead of relying on rigid algorithms based on predefined mathematical formulas, these systems have the ability to "learn" and improve their accuracy by extracting patterns directly from data. Unlike traditional programming, where the human dictates each rule, here the model discovers the underlying logic by itself.

Within this ecosystem, there are *neural networks*, which are the basis of a more advanced and specialized subset known as *Deep Learning*, which initially aimed to mimic the human brain's information processing and are currently used to solve complex problems in various areas such as *Computer Vision (CV)*, *Natural Language Processing (NLP)*, *Recommendation Systems*, etc.

Below we will explore the following topics, from the basics mathematical concepts to the fundamentals of each area:

### 7.1 Math for Machine Learning {#71-math-for-machine-learning}

For the models of ML and DL to learn from data, they rely on a fundamental mathematical structure composed of four key pillars: 

1. *Linear Algebra*: allows representing and manipulating large volumes of data through vectors and matrices.
2. *Multivariate Calculus*: is essential to understand how to adjust the internal parameters of the model. On the other hand, 
3. *Probability and Statistics*: provide the framework to quantify uncertainty and make reliable predictions, and finally, 
4. *Optimization*: is responsible for finding the most efficient configuration to minimize errors and maximize the system's precision.

Learning about these areas is very valuable for understanding how these algorithms work internally and how we can optimize them to improve their performance (as well as for many other scientific and technological disciplines). 

The following selection of mathematics books is focused on ML instead of pure mathematics books, which in my opinion are easier to assimilate and serve as an introduction. I recommend delving into more rigorous books about each specific area when you can. They are ordered from "easier to follow" to "more rigorous".