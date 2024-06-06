---
date: 2020-01-09T00:22:00Z
title: What is a Stack?
categories:
  - Ecommerce
image_path: /images/blog/certificates.jpg
author: Paul Byrne
draft: false
---

## What is a Stack?

To put it simply, a “stack” is a set of technologies used to build an application.

I pity the word ‘stack’. Like other tech words (that were used for something else prior to being adopted by tech) that get adopted into mainstream use, it has been so misused that I actually feel sorry for the word itself. I think the ubiquity of the word — I’ve heard people talk about their legal stack, their sales stack, even their dating stack — has turned it into a bit of a nothingburger.

I’m usually referring to a development stack when I say ‘our stack.’ We’re a software development company, after all. Our stack is a group of technologies used together to accomplish a goal. In our case: creating multi-concurrent-user software, like a website, custom application, or a Software as a Service (Saas).

### History of stacks

Before the interwebs, software primarily ran on microcomputers (PCs), mini-computers (multiple terminals in the same location), or mainframes (you could usually connect a terminal remotely). They generally ran compiled code written in a single language, often on a batch basis (not interactively).

{{< figure src="view-retro-computer-technology.jpg" alt="Stock photo of 80s computer equipment" >}}

This all began to evolve when we started networking computers together and introduced concurrency — the ability to run more than one program at the same time — at least as far as the user could tell. Different types of software interacted with each other. For example, an operating system like DOS (Disk Operating System) previously allowed you to run applications (we called them programs) on your computer.

When you exited an application, the friendly, C:\, greeted you if you had a hard drive. These applications communicated with each other over a network that often had servers running different applications, like email.

> I first saw a company using email in the early 80s on a local network. The office had two computers on their ‘network’ — no attachments, no reply button, text only, and no external networks. When I walked into the office, the receptionist was on the phone with the salesman (in the office upstairs) and the conversation went something like this:
>
> R: “Did you get my email?”
>
> S: “Yes”
>
> R: “So you saw that Michael rescheduled?”
>
> S: “Yes, I wrote it in my planner. Why did you call?”
>
> R: “I wanted to make sure you saw the email.”
>
> S: “You could have just called me.”

Fast forward to inventor of the web, [Tim Berners Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee), and the NeXT computer and we suddenly had to deal with multiple pieces of software running on the same computer. A request came in to the server’s IP address, handled by the TCP IP Socket, which passed the information on to server software via your network. The server replied by sending either an HTML file (no images, yet) back to the Socket.

So, the original web server stack consisted primarily of the Unix operating system, a TCP IP Socket, Web Server software, and HTML files. The programs act in layers “stacked” upon each other. Each layer only communicates with the layer above and below.

- An Operating System handles communication with disks, memory, screen, keyboard, mouse, network interface card (NIC), and so forth. It loads the TCP IP connector and the Web Server.
- TCP IP Socket manages the connection to the network passing data between the NIC and the Web Server.
- The Web Server takes the information packet passed from the TCP IP connector, finds the file requested, and sends it back through the TCP IP connector.

### Modern Web Stacks

Of course, web servers are a lot more complex now mainly due to servers handling dynamic requests. Today, when you go to a web page, it rarely just finds and sends you an HTML file. Now, it uses cookies, connects to databases, and stitches together HTML, images, styling (CSS), and Javascript files, at the very least! These are all controlled by a program written in a programming language.

The programming language manages what we call the ‘business logic’ on the server.

> To confuse you even more, programmers don’t care if the program is for a business, school, church, softball team, or any other type of organization. It is still considered ‘business logic’ though you will sometimes hear other terms for it like ‘core logic,’ or ‘operational logic.’

Additionally, the server may be connecting to external information sources via Web Application Programming Interfaces (APIs) or other means.

So, our stack gets more complicated. We now have:

#### The Presentation Layer - Frontend Stack - what gets sent back to the web surfer’s browser

The presentation layer is where the magic happens for the end user. It’s all about displaying information and gathering input, whether through an app, device, or web page.

- HTML
- Cascading Style Sheets (CSS)
- Javascript
- Javascript frameworks: React, Angular, Vue, ELM, etc.

#### The API Layer - Programming Stack - the web application

The API layer is the bridge between front-end and back-end. Here, data travels back and forth between your device and the data-providing server.

- Programming language
- Database
- Language frameworks

#### The Application Layer - Hosting Stack - the web server and operating system

In the application layer, the machine works its magic. It processes data from the API or data layer, making critical decisions before sending it on its way.

- Linux - the operating system
- Nginx - the web server
- Google Cloud

#### The Data Layer - Storage Stack

Last but not least, the data layer is the unsung hero, managing the storage and movement of data. Whether it’s database interaction or external connections like APIs, this layer keeps data flowing.

- Database
- File system
- External APIs

### Post Modern Stacks

The nerds running the internet couldn’t leave well enough alone. They have now blurred the lines between the various elements of the stack.

We have cloud hosting and even ‘serverless’ hosting — a self-managed Hosting Stack that Google or AWS takes care of for us so that we don’t have to worry about the operating system, web server, and what kind of machine they run on.

### Other Stacks

Of course, this article is a gross simplification of the tools of the trade. Technology stacks are nuanced and software companies have stacks for how they deploy code updates called a Dev Ops stack, for how they work with AI models, and a host of other things.

So, in a pointed sense, a stack is a group of layered technologies used to achieve a specific purpose like delivering a service, operating a web store, making payments over the internet, or operating military equipment, among others.

Knowledge is power. Understanding what a tech stack is and how it can work in your favor is essential. It’s important to ask yourself, “What can the right tech stack do for me?” In a previous article, we help you answer that question! [Here](/posts/2023/11/16/choosing-the-right-tech-stack/), you can read up on why choosing the right tech stack is so important and how you can apply it to your organization or startup. If you’re ready to dive in to discuss your stack, [contact us for a free consultation](/contact/)!
