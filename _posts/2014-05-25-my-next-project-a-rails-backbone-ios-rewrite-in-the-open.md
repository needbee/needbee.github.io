---
title: My Next Project, A Rails/Backbone/iOS Rewrite in the Open
layout: post
---

My first major side project was [TypeLink](http://typelink.net), a cloud-based personal wiki notepad. Part of what got me excited about the project was that it was my first project using Rapid Application Development framework--using Grails, a Java-ecosystem framework since that's what I was familiar with. It was also my first iOS app.

But now TypeLink is showing its age, and it's time for an update. It's a commercial product, but I want to go through the development process in the open in case anything I learn is helpful to others. I'll be blogging about the process here.

Here are my main goals in the rewrite:

* **Web**
  * **Reimplement in [Rails](http://rubyonrails.org).** I've done a few other projects in Rails now, and it's my favorite framework. It's time to jump ship to the big boy!
  * **Make it responsive.** That's the way we roll these days. I'll use [Foundation](http://foundation.zurb.org) for the look and feel, with maybe some minor tweaks.
  * **Less page navigation.** Editing a page or its settings takes you to another URL, and this makes using the browser back button for navigation tedious. I'll use [Backbone.js](http://backbonejs.org) for a richer client-side experience.
  * **Better navigation features,** including backlinks and search. I always wanted to add these in, but frankly the UI didn't have space for it. I'll redesign the UI from scratch to fit these features in.
* **iOS**
  * **Reimplement the UI for iOS 7.** Duh.
  * **Multiple tabs.** Don't want to make it less convenient than the web version.
  * **Offline mode.** I have [some ideas](http://need-bee.com/tablesync/) for an elegant way to do sync.
  * **Tab key.** If you do any typing on iOS, you know what I'm talking about.
* **Nonzero Marketing!** Try to find a way to actually explain to people why they'd want to use a cloud-based personal wiki notepad! That probably doesn't include the phrase "cloud-based personal wiki notepad."
* A slew of miscellaneous small improvements.

Follow me here on the blog or at [@CodingItWrong](https://twitter.com/CodingItWrong) to keep up with the progress of the project. I'm not on any specific timeline, will just be having fun with it.