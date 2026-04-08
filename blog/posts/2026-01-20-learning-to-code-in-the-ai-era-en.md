# How to learn to code in the AI era

> This guide serves as a *Hub* of posts on how to study and build programming skills. It includes resources, online courses and books I recommend. <br/> Due to the length of each section, I'll be dedicating posts to each one to dive deeper into each topic.<br/>
> I'm working on a future post to explain 'why' you might want to learn to program.

If you're here, I assume you're interested in learning to program (and/or you're curious about the concept of 'AI'). In this blog post I want to share the resources I've used to teach myself programming over the last few years. If I can spark your curiosity about how to learn this skill, I'll consider it a win. Without further ado, let's get started:

---

## Table of contents

- [1. Programming languages, which one should you choose?](#1-programming-languages-which-one-should-you-choose)
- [2. Resources to learn Python](#2-resources-to-learn-python)
    - [2.1 Theoretical resources](#21-theoretical-resources)
        - [2.1.1 Online courses](#211-online-courses)
        - [2.1.2 Technical books](#212-technical-books)
        - [2.1.3 Official documentation](#213-official-documentation)
    - [2.2 Practical exercises](#22-practical-exercises)
        - [2.2.1 Practical exercises](#221-practical-exercises)
        - [2.2.2 Personal projects](#222-personal-projects)
- [3. How to use AI without sabotaging your learning](#3-how-to-use-ai-without-sabotaging-your-learning)
    - [3.1 Technical and cognitive debt](#31-technical-and-cognitive-debt)
    - [3.2 The productivity dilemma](#32-the-productivity-dilemma)
- [4. Routines and habits of study](#4-routines-and-habits-of-study)
- [5. Common errors and how to avoid them](#5-common-errors-and-how-to-avoid-them)

---

## 1. Programming languages, which one should you choose? {1-programming-languages-which-one-should-you-choose}

This question is a bit of a trick, because the answer can be:

- very obvious (*Python*, obviously Python; if it's the language of AI, why all the mystery?), or
- not so obvious (there are many areas in tech beyond AI, dozens of programming languages, and I think it's also valuable to know at least a little about them).

When I recommend a language, I usually start by asking what you'd like to do once you're comfortable with it. In my case, I found Python almost by chance in a master's course, and almost the same chance led me to *data science* and *machine learning*. Python's syntax is very readable and easy to grasp, so my choice back then was pretty obvious.

Still, these days I recommend looking at different areas of technology and the languages people use there. For example:

- *Web development*: HTML, CSS, and JavaScript/TypeScript are the undisputed leaders.
- *Mobile app development*: Swift, Kotlin, and Flutter are the most popular options.
- *High-frequency trading*: Python and R are widely used, but this is where algorithms and lower-level knowledge really matter, so languages like C++ become essential.
- *Game development*: lower-level languages like C/C++ are common, but engines such as Unity (C#) or Godot (GDScript) are also very popular.

That's just a sketch, there are many more languages I haven't mentioned, and I encourage you to explore them.

By now I've already mentioned "low level." Does that mean "high level" exists too? What does *level* mean? I learned this much later, because at first you focus almost entirely on syntax and then on programming logic (at least that's what I did back around 2020). Today I'd recommend learning about *level* and *abstraction* early. In simple terms:

- A **high-level language** (*Python*, *JavaScript*, *Java*, *C#*, etc.) hides most of the low-level programming machinery so you can focus on your program's logic. They're a good fit for beginners because they're relatively easy to read and handle a lot "under the hood" (Python's garbage collector is one example).
- **Low-level languages** (*C*, *C++*, *Assembly*, *Rust*, etc.) sit much "closer" to the hardware (CPU, memory, and so on). They give you tight control over how the machine behaves physically. That makes them faster than typical high-level options, but also harder to read and write.

In short, the "higher" the level, the further we move from the machine and abstract away the physics of the hardware. The upside is easier reading and writing; the downside is execution speed and harder debugging (which is why many heavily used Python libraries, like NumPy, are written in C and C++ for performance, crucial in machine learning).

Beyond syntax, I strongly recommend picking up ideas like execution speed and levels of abstraction. Over time they help you make better decisions.

To answer "which one should you choose?", if I were starting from scratch today I'd suggest:

- Pick a high-level language, learn basic syntax and programming fundamentals, and use it to practice, explore, and see whether you actually enjoy programming (it's not for everyone, frustration comes with the territory).
- Treat that language as the tool you use to build and study programming as a discipline: the medium through which you create things and apply the theory you'll keep learning.

From here on, this guide focuses mainly on Python, since it's the language I've used the most. Eventually it's worth widening the set of languages you're comfortable with, but you have to start somewhere.

---

## 2. Resources to learn Python {2-resources-to-learn-python}

There are countless ways to learn Python today, so many that I like to split them into two pillars: *theoretical resources* and *practical resources*. Should you learn theory first and practice later? With AI as a coding assistant, I'd strongly recommend doing **both in parallel**. The idea is:

1. Learn Python syntax and how to work with the language. In parallel, learn core programming concepts and logic.
2. Do practical exercises to apply what you learn (personal projects). Additionally, theory drills about the language itself are also a good way to reinforce what you've learned.

### 2.1 Theoretical resources {21-theoretical-resources}

I usually break this pillar into three categories:

#### 2.1.1 Online courses {211-online-courses}

Online courses from different universities, institutions, etc. These can vary greatly in rigor and difficulty, but they serve as an *on-ramp*: they help you learn concepts, vocabulary, and give you a roadmap to follow. The best ones are available on Youtube, Coursera, Udemy, etc.

#### 2.1.2 Technical books {212-technical-books}

Technical and programming books. These vary greatly in content, but they are very valuable as structured knowledge sources (like a university course syllabus). They're great for having a semi-structured roadmap of topics to learn. I recommend many publishers like O'Reilly, Addison-Wesley, Packt and Springer.

#### 2.1.3 Official documentation {213-official-documentation}

Even in the era of AI, it's always a good idea to refer to the official documentation of a language or its libraries to learn about its usage/best practices. These tools are constantly evolving, so we always have to keep an eye out for new features or improvements. If a new version of a programming language was released, or a library added a feature requested by the community, it's our duty to find out and decide whether to update our stack or stay with the previous versions.

Each has value, and some will fit your learning style better.
In my experience, online courses, whatever their rigor or difficulty, work well as an *on-ramp*: they help you learn concepts and vocabulary and give you a roadmap to follow (*know what you know, and more importantly, know what you don't*). They're valuable, and I recommend plenty of courses from strong universities, but personally I've drawn the most knowledge, both theoretical and practical, from *technical books* and *official documentation*.

### 2.2 Practical resources {22-practical-resources}

I'll split this second pillar into two categories:

#### 2.2.1 Practical exercises {221-practical-exercises}

Practical exercises apply what you've learned. Think of it like when you were a kid and had to solve math problems without a calculator. Just pencil and paper. The idea is similar: remove unnecessary aids (AI, search the web) to solve small theoretical problems, answer a question, complete or correct syntax, or figure out what a console error means. Anything that forces you to retrieve what you know is mental practice that helps you retain it longer.

I highly recommend practical exercises whenever you can. Having AI hand you the answer instantly is useful, but it doesn't train your memory to hold information, in fact, the opposite. Today it's more important than ever to make your brain work through increasingly complex problems.

It makes even more sense to do practical exercises when referring to how to learn math for ML/AI, a topic I'll cover in its own dedicated blog.

#### 2.2.2 Personal projects {222-personal-projects}

Personal projects are a way to apply what you've learned in a real-world context. They're a good motivator to keep learning, and a way to demonstrate your skills in a portfolio that potential employers or clients can see. I recommend starting with small personal projects to apply what you've learned, whether it's small challenges or as a reminder of your learning. After that, these will evolve into increasingly complex projects, developing applications, scientific experiments of ML, etc.

Overcoming the fear of adding and adding lines of code and generating something tangible but less digestible is part of the process. I invite you to if you have ideas (for example: imagine you're a fitness person and you'd like there to be an app that can count macros and micros and estimate calories from a photo of your food) write them down and research what you need to learn to try to create it yourself. Learning how to create this type of services and getting into concepts like architecture, backend, frontend, and databases is very valuable to internalize as soon as possible. Then, it's just a matter of time before you get to work and learn on the fly.

For personal projects, I recommend learning about version control (Git) and repository management (GitHub, GitLab, etc.) as soon as possible. This is essential for collaborating with other developers and having a history of changes in your code.

> Note: personally, I consider 'learning on the fly' as exploring and learning about things/systems I don't know through all the resources I've previously exposed. It's a way to break down a very large problem into smaller, more digestible parts that I'll learn alongside working on a project. <br/> Contrary to what many people think, I don't think 'learning on the fly' implies 'not knowing what you're doing', or that it's not worth learning the fundamentals of the discipline. <br/> I'll talk more about this in the next section.

---

## 3. How to use AI without sabotaging your learning {3-how-to-use-ai-without-sabotaging-your-learning}

Using AI as a coding assistant is a powerful tool, and I find it very interesting and promising. There are some considerations I'd like to share:
1. I like to see AI as a catalyst, a multiplier of skills. If your base level is very low, using AI won't increase your level much. On the contrary, if you have a relatively high technical base level, AI will help you increase your level exponentially. The only way to increase our base level is through constant and systematic training (just like a athlete)
2. There are more and less effective ways to use AI. Like any tool, it has a learning curve, and best practices. As a new tool and that is constantly developing, these best practices are constantly changing and we should at least have an idea of how the most skilled developers use it.
3. For no reason should AI replace your brain. It's a catalyst, not a substitute. Feeding and training your brain to be able to solve increasingly complex problems is fundamental for life and for your career.

I consider there are two serious problems we should avoid:

#### 3.1 Technical and cognitive debt {31-technical-and-cognitive-debt}

AI generates a lot of code, makes very complex plans, tells you yes to everything and occasionally corrects you. This generates that projects delegated to AI grow exponentially, and as we are not the creators of this system, there is a real debt with respect to our understanding of the system.

#### 3.2 The productivity dilemma {32-the-productivity-dilemma}

A phenomenon that is happening recently is the testimony of developers who cannot 'stop working'. While many justify that as they are paying for a service, they must squeeze the maximum out of that service to make the most of that investment, I think the root of this is different: AI is an excellent way to untangle ourselves. The feeling that the answer is always at a prompt distance generates the thought of 'one more prompt and I'm done' that generates an infinite loop of prompting. The perception that was had previously of 'with AI we will work less' has resulted in the opposite. It is essential not to saturate our brain with information to not burn out and maintain a high performance the longest possible time, so rest and disconnection are fundamental.

I'll talk more about this in a future post.

---

## 4. Routines and habits of study {4-routines-and-habits-of-study}

When I train like an athlete of high performance, I perceive greater advances. Constant and systematic training is fundamental to level up. It's a somewhat controversial topic but very interesting, so I'll dedicate a full post to this topic.

---

## 5. Common errors and how to avoid them {5-common-errors-and-how-to-avoid-them}

Topics I'll cover in a future post:
- Tutorial hell
- Skipping fundamentals
- Copying without understanding
- Not reading errors
- Comparing too soon