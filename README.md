# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## Steps required to successfully run the application
1.  Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2.  Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3.  Review the functionality of the application within your browser.
4.  Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
5.  Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
6.  Run test to ensure that all feeds (allFeeds) has been defined and that is not empty.
7.  Test each feed to ensure it has **name** and **URL** defined and not empty.
8.  Test if **the menu** is hidden by default and toggles between _hide_ and _show_ when clicked.
9.  Test to ensure that on load, there are initial entries.
10. Test to ensure there is actually a change in new selection of feed(s).
11. Test error handling for undefined variables and out-of-bounds array access