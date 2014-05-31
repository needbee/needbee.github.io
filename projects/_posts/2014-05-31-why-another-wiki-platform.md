---
title: Why Another Wiki Platform?
layout: post
---

As I'm working on rewriting [TypeLink](http://typelink.net), you may be wondering why I would bother making another wiki platform. Isn't that a solved problem? No, I think there are unique needs that TypeLink addresses. To explain, let me give you the story behind TypeLink.

In 2006, I started attending grad school part-time. As I started taking notes, I got frustrated that it was all locked up in Word documents that I'd never go back to read. I didn't care about this in undergrad, but in grad school I was really into what I was learning, and I wanted to be able to get to that information in the future.

A wiki seemed like the logical choice: no matter what class I was in, I could store my notes on a topical page for whatever was being discussed, and that way I could always get back to everything I'd learned on that topic. The problem was wiki markup: I was already furiously taking notes, and creating new pages would take even more time. I didn't think I'd have time to remember a markup language in the middle of class.

The other problem with most wikis was having to decide in advance what would be a link, either by using CamelCase or [[free links]]. This wasn't good enough for me. If I wrote a note that mentioned the emperor Constantine in one class, and then later made an entire page about Constantine, I wanted my first note to automatically link.

Then, somehow, I found out about [VoodooPad](https://plausible.coop/voodoopad/). It was a Mac app that was everything I was looking for. There was no special syntax to use, and any text would turn into a link if you had a page for it. It worked great: I was able to take notes as fast as before, and store them in a format I still use to this day.

But when the iPad came out, my expectations changed. All of a sudden just having my notes on my Mac wasn't enough; I wanted them accessible anywhere. VoodooPad released an iOS app, but it only allowed syncing in batches. There was no real-time sharing back and forth.

After waiting for a year or so and not seeing VoodooPad moving in the direction I was looking for, I started brainstorming. I was coming from a Java background but had just been introduced to [Grails](https://grails.org/), a rapid application development JVM framework. With a tool like that, quickly developing a webapp that would act as the kind of wiki I was looking for seemed feasible.

In about a month I created the webapp, with the uncreative name Personal Wiki. It was super motivating to be able to work on it an hour at a time, being able to see real progress in that time. In addition to having your data stored in the cloud, I put in a simple permissioning system. All your pages were private by default, but all you had to do was change one setting to make a page publicly available to the world. And, of course, in order to keep using my own notes, I had a VoodooPad import feature.

The web interface worked great on the Mac, but it was cumbersome on iOS, especially on the iPhone. I realized that a native app would be a much better fit, so I did some iOS tutorials and got a universal iOS app working.

I launched the app publicly on the App Store on January 1, 2011. At the time, categories in the App Store showed a list of the latest apps in the category on the front page, and, as a result, I got a huge amount of interest for such a niche app. Everyone who signed up for the first few months got an "early bird" account with permanent free unlimited access. After that, I switched to a yearly subscription model.

For the first year, I actively did a lot of updates and improvements. Eventually, though, the rapid application development approach started to show its limitations. The "linkification" algorithm runs each time a page is accessed, so the more pages you have, the slower it is to navigate around the site. The app wasn't set up for offline use. And the boilerplate user interface I had set up didn't have room for some important new features, like search and backlinks. Once any new changes required more than a rapid application development approach, I was no longer able to fit them into my schedule.

But that's all changed now that I've decided to [rewrite]({% post_url 2014-05-25-my-next-project-a-rails-backbone-ios-rewrite-in-the-open %}) both the backend and frontend. And there's still a need. TypeLink is still the only cloud-based, syntax-free, auto-linking personal wiki that I'm aware of.

If you're interested in the development process, follow me here or at [@CodingItWrong](https://twitter.com/CodingItWrong). And if you're interested in TypeLink itself, go ahead and give [the current version](http://typelink.net]) a try for free today!