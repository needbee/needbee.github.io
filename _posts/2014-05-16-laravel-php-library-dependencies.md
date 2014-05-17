---
title: Laravel PHP Library Dependencies
layout: post
---

Earlier today on Twitter, <a href="https://twitter.com/ErikOnTheWeb">@ErikOnTheWeb</a> asked about what PHP libraries Laravel depends on. I just recently set up a new bare CentOS server to run it. Here are the PHP libraries I had to install. Note: apparently the PHP package that came installed on it was php55w, not the normal php55. So your package names may be slightly different.

* yum install php55w-mcrypt
* yum install php55w-pdo
* yum install php55w-mysql
* yum install php55w-xml (for PHPUnit)
* yum install php55w-mbstring (for payment processing)
