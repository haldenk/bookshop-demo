---
date: 2024-06-24
title: top 10 security mistakes magento users make
categories:
  - Ecommerce
image_path: images/blog/top-10-mistakes-magento.jpg
author: Paul Byrne
---

# TOP 10 SECURITY MISTAKES MAGENTO 2 MERCHANTS MAKE

Online security is certainly a critical priority for online merchants. Security breaches can deliver a death knell to your business by tarnishing your reputation, damaging relationships with customers, causing you to lose your payment processor, increasing insurance costs and inflicting untold harm to your business.

At the same time, the whole topic seems to be awash in buzzwords, technical terms and opaque experts. The constant stream of news articles exposing hacks and ransomware attacks of noteworthy companies leaves some merchants wondering if they are next.

Because Magento (AKA Adobe Commerce) is the most widely used open source ecommerce platform, you are already a target. Tools are available online that specialize in hacking Magento sites. It’s simple math: lots of sites on Magento X lots of credit cards and personal information on each site = attractive target.

Hackers going after mid-tier companies are generally not looking for a challenge, they are looking for soft targets. It’s about return-on-investment-of-effort, most just want to gain the low-hanging fruit. While it is impossible to make your site completely bulletproof, you can make your site unattractive to most kinds of attacks.

## Here are the top 10 most common mistakes we’ve seen Magento merchants make when it comes to security.

### 10. Using /admin as the path to your admin panel

The admin panel is like the back door to your online store. From the admin panel you can change configurations including which bank account collects the money from payment. In the old days, the admin login path defaulted to https://www./admin. In Magento, they have wisely updated that to a randomly-generated path like …/adminoxkw89d. This keeps hackers guessing. If they can’t find the back door, they cannot get in.

### 9. Entrusting your security to MacAfee or Norton

This actually applies to all of the server-security ‘apps’ that can be installed. In some cases, your payment process may require you to have one that reports to them and you’re required to have one. In most cases, they will not degrade server or site performance. Only in rare cases, do they actually help you detect or avert hacks.

However, these apps are not a comprehensive solution, but are one small piece of a much larger puzzle.

And in the event you do use one of those solutions, DO NOT, by any means, display their badge on your site. That just tells hackers, who may have a hack for your security solution, which set of vulnerabilities to look for. It’s a bit like people who post the name of their security system on their window. It’s like telling the potential intruder what needs to be disabled so they can break in undetected.

### 8. Magento admins using weak passwords

Not so long ago, we had to worry about Rainbow Tables on the dark web being resources for passwords. If a hacker were able to access the encrypted password table in your database, they could download the hashes and reverse engineer them with a Rainbow Table. With salting by default in Magento 2, this type of hack has become far less commonplace.

However, let’s say you use a common password like your home address, a name, the number combo 123456 or just a simple “Password,”. Hackers are just hoping you use one of the most common passwords.

### 7. Not rotating passwords often enough

You should think of your passwords like produce. If someone were to discover your password today, and it were to make it to a marketplace on the dark web, it would take some time before that password is used. Ideally, you would change your passwords to all sites every few days though that may be impractical. Changing your password monthly and having all of your admins do the same helps close the window of opportunity for hackers. You should also consider requiring this of your customers on a quarterly basis.

### 6. Using your Magento 2 admin password and user id on other websites

Using different passwords on every website you access should be standard practice for everyone. Billions and billions of password/username combinations are posted on the dark web every year as you can see from this notice from Lifelock. You wouldn’t want someone getting your GeoPets account info and using it on your web store.

### 5. Failing to apply security updates in a timely manner

Can I be frank with you for a moment? If you are still on Magento 1, [https://www.razoyo.com/magent-a-gheddon-magento-1-end-of-support-guide/](you are in trouble). While there are some (options for security patches)[https://mage-one.com/], they require more effort to find and apply these days. Because security vulnerabilities related to all open-source software pop up on a daily basis, having your developer apply security patches as soon as they become available should be a top priority.

### 4. Giving 3rd parties access to your server and admin panel

I wish I had a dime for every time a merchant’s site was hacked only to find out they had offered SSH access to that 3rd party SEO company in Belarus, or given their admin password to their sister-in-law so she could take a look at something. If an SEO company asks for root access to your server, run away! If your sister-in-law is brushing up your product descriptions, create an account for her and limit permissions to catalog information.

### 3. Not locking down staging or development sites

Thankfully, the old days when developers updated web sites by uploading to an ftp site are long gone! Developers like Razoyo spin up servers for reviewing code by our QA team and have a permanent staging server for clients to test on. Those sites should not be available to the open web! Using strict permissions based on an IP address and/or security keys is a must.

### 2. Not locking down your production server

There should only be one way to deploy code to your production server and nobody should have access to modify files outside of your deployment system.

### 1 . Lack of version control

Version control is a core security component. Most hacks require malicious code to be placed on the production server without review.
A version control system that includes a secure, change-logged repository ensures that changes to code pass through a review. A trusted, senior developer compares the current production code base with the proposed changes. Deployments of new code will completely overwrite any changes that could have happened on the production server by an unauthorized actor.
If malicious code does make it into your repository (e.g., via a 3rd party extension install), your developer can identify when it was added (the commit), roll it back and apply other, subsequent commits to rapidly ‘rip out the cancer.’

## Other Vulnerabilities

This article is by no means exhaustive, but catalogs common issues the Razoyo team encounters when working with Magento merchants. If your heart is racing or you have questions after reading this list, then you should take advantage of our Technical Site Review service and sign up for a free consultation so we can fortify your site and your customers' information!
As always, if you found this helpful, or if you have noticed any other common security blunders that we left out, please comment below!

Razoyo Named Top Web Design and Development Agency in Dallas by Design Rush
