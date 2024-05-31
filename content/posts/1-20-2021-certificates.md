---
date: 2020-01-20
title: CERTIFICATES
categories:
  - Ecommerce
image_path: /images/blog/certificates.jpg
author: Paul Byrne
---

## First Rule of SSL - We Don’t Use SSL Anymore

So, you’re asking, why did you call this article the Evolution of SSL? The answer is simple: that’s what you put into your search engine (hopefully, DuckDuckGo) to get here. I’m guessing you found a lot of articles that talk about TLS before clicking on this one.

## Some Basic Definitions to Start

Go ahead and skip over this section if you know what these actually mean.

### SSL

SSL stands for secure-socket-layer. Technically, it is a cryptographic protocol that was used in the 90s and invented by Netscape. If you’re too young to know what Netscape is, then just call me “Grandpa.”

SSL 1 was introduced in 1993 but was never used on the internet. SSL 2 launched in 1994 but it had a lot of holes. SSL 3 launched in 1996 but was rife with bugs and security gaps. So, a group of engineers got together, refactored SSL 3, and called it TLS 1.0. We’ve been using TLS since.

### Protocol
OK, you’re saying, “I’ll bite.” You used that word “protocol” as if I knew what you meant. There are all kinds of protocols out there. A protocol is a set of accepted rules for doing something in a way that others find acceptable.

A tip-off in basketball is a type of protocol: it defines the parties, where people can stand, that only one person from each team can stand next to the referee who is throwing the ball, and so forth. Without protocols, we could never start a game of basketball.

Fortunately, this is the one time that the tech community uses a dictionary definition correctly. In the case of SSL and TLS we’re talking about an agreed upon method for establishing a secure connection over the internet.

Encryption protocols include a lot of information including:

The ciphers to use (AES, AEAD, etc.)
A secret key to use
Authentication (the certificate)
Key management (the handshake)
Message integrity (tamper-proof seals)
### SSL Certificate
Wait, though, that’s all well and good but my developer keeps referring to an SSL certificate on my site.

Don’t panic, your developer is likely just using language that’s been around forever. Technically, your certificate is not dependent on your protocol, it’s actually just a security certificate. Many developers still use the term SSL when they mean TLS. Stay calm, we’re just lazy but we know what we mean and there’s nothing you need to do.

## Second Rule of SSH, err, TLS - Security Certificates
When you purchase a security certificate (again, your developer may erroneously call it a SSL certificate), you are paying (usually) for what amounts to a background check. This background checker is called a certificate authority. Most are private companies whose job is to make sure you are who you say you are.

There are two types of certificates. The simple certificate simply shows that the controller of the domain is also the owner of the certificate. The second (EV, or extended validation) actually verifies the legal identity of the organization.

Not so long ago (2018), you may remember looking up in your browser and seeing the name of the company next to the padlock icon in the URL bar.

---image---

Nowadays, it is more difficult to tell if a certificate is EV or not. Basically you have to see if the words “Issued to:” appear in the drop down when you click the little padlock icon in the URL bar. Wells Fargo, for example, has an EV certificate.

---image---

Wells Fargo’s EV Certificate

---image---

Amazon does not seem to feel it is important


---image---

The CIA uses one.

---image---

The state departmet does not.

---image---

niether does the nsa

Do you get the feeling that the whole EV thing was just BS? I do.

Basically, the internet is saying that you need to make sure the site you are on is legit. The padlock in your browser ensures that a legitimate certificate authority has at least checked out that the same entity that owns the domain owns the certificate. The rest is up to you.

## OK, TLS is the New SSL, I Get it… Why is it Different?
Honestly, it mostly comes down to what the geeks call a handshake. Rather than a handshake, it feels more like ordering food in a fine dining restaurant.

In short, your web browser greets the server (aptly named) that hosts the web site you want to visit and asks, “Nice place you have here. I’m partial to AES but allergic to TLS 1.1. What do you recommend?”

The server responds something like, “I see you have refined taste. I recommend the AES with Diffie-Hellman and a 128-bit RSA key.”

At this point, the browser is already salivating. “Does that come with SHA256? And can I get a side of Elliptical Curve?”

The server nods knowingly, and dinner - I mean, the encrypted connection - is soon on its way.

The new TLS handshake, TLS 1.3, happens really quickly now, a lot like ordering from the menu board, “I’ll have a number 2 with a diet coke and supersize it.”

The standards body that developed TLS has focused on improving the speed at which a connection can be established and it’s now down to ⅓ of a second (300ms) or less. Additionally, they have added the ability for many servers and clients to reconnect without going through the handshake process again which is critical for intermittent (mobile) connections.

## The Great Encryption Competition of 1997-2000 and The Emergence of the Rinjdael Beast
So, yeah, that was a thing. You can imagine the drama and excitement of such an evolution. It was truly a magical time (eyeroll). Seriously, it is hard to underestimate the importance of the Advanced Encryption Standard competition and its outcome.

It turns out that there are many ways to encrypt data and if your browser and server don’t use the same algorithm, then you are plum out of luck for sending data securely. The previous most common standard was called the Data Encryption Standard and lacked the potential for longevity needed for a long-term standard.

Fortunately for Amazon, the NIST (United States National Institute of Standards and Technology) was in the dumps having been voted the most boring entity of the federal government for decades and wanted to spice things up.

So, they decided on a math competition to solve the DES problem. I mean, what could be more exciting? They named it the Advanced Encryption Standard because advanced is better and everyone knows we’re encrypting data anyway.

Well, it turns out that it was actually exciting.

The competition lasted about 3 years from the firing of the start gun to the announcement of the winners. The team that won named their algorithm “Rijndael” which was a portmanteau of the names Vincent Rijmen and Joan Daemen, the inventors of Rijndael. To answer your question, I don’t know what the final “L” is all about.

The competition was stiff too. Team Rijndael was a bit of an underdog: two scrappy mathematicians fighting the likes of IBM, RSA, NTT and several teams with Nobel prize winners in them. By the way, the competition was truly international. The winners were from Belgium and Holland. It surprised a lot of people that an American team did not win given the NIST is an entity of the US government and the Clinton administration was vehemently and foolishly opposed to the export of encryption technology as if they even knew what that meant.

AES has definitely changed the world and the winners deserved all of the praise they received (though the prize money was laughable and to participate they had to forgo any patent rights).

## The End of AES and What is Next
Well, the bad news is that AES was designed to be effective for 30 years. The mathematicians assure me that this means we only have 11 years left. Despite the fact that the fastest supercomputers on earth would take trillions of years to crack AES, and quantum computing is not useful for cracking anything (yet), we will be seeing a new widely-adopted algorithm, soon.

The first question you might ask is if there will be another exciting contest. I think yes, so, yeah, party time!

I believe this because in the wake of the highly praised AES contest (really, people, even the losers, loved it), the NIST has become a contest-holding fool. They have held contests for exciting things like anonymizing personal data for research, manufacturing processes, and other no-miss events. Nowadays, there is even prize money to be had.

## TL;DR
You should read the article, it’s fun
SSL is out
TLS is in
Your certificate is probably good
Don’t get EV
The world will blow up in 11 years
 
 
 

Resources:

https://www.globalsign.com/en/blog/ssl-vs-tls-difference
https://youtu.be/0TLDTodL7Lc
https://www.pcmag.com/encyclopedia/term/tls
https://www.digicert.com/blog/how-to-know-if-a-website-is-secure/
