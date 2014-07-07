minine-challenge
================

Story in a much short version?
Receiving a challenge when apply a job, which is basically expecting a web service to handle some JSON data post and then filter data and return with a few fields in order to fulfilling requirements?

Simple? It is always a question hard to answer at very beginning. Here (how) I start!


WHY NODE
========
I chose nodeJS for this task, with reasons. According to this challenge spec, node.js and C#.NET are more than welcome, Python and Ruby are acceptable, too. However, running a MAC always need bit more effort to vmware a Window OS, especially not easy to pick if Win7 or Win8 although I can't really tell the difference, then install Visual Studio, maybe .NET framework, and few more updates possibly, and I just give up. Python and Ruby are just acceptable and I am totally NOT familiar with. So any option left?

Better to create an repo fron github and clone it local, in this case I call it mi9-app.

Now, let's start the journey of finding NODE.
$ cd mi9-app
$ npm init
//quickly initialise an app going to work on.

$ npm install domready --save
//declare all dependencies

$ npm install express logfmt --save
//Now it’s time to install some dependencies like express and logfmt, not 100% sure, but just in case if I need them later.

Just realise that express4 need to install body parser individually, so go
$npm install body-parser

Now, some notes to take coz I gonna forget very soon:
1. fakeData is a copy of sample request JSON for local testing.. and it passed! Hoooray!
2. port for http set as 9999 since 80,8080,8888 all defined on localhost for other server
3. now time to push and test online 



WHO IS HEROKU
=============
"Keroku is based in US (the Cloud) as an application platform that provide with all tools developers need to iterate quickly, and adopt the right technologies for different projects." -- as HEROKU believes.

A free account is an essential, also need to download and wear on Hearku Toolbelt. Once these are ready, I am ready .. to switch on Terminal commandline.

$ heroku login
//led me into the sea of shade
//oh yeah, better to have a github repo created and handy for Heroku setup, I mean only we care our code and have a little sense of tracking.

$ hearku cerate
//now I know will my code will eventually go..
$ heroku apps:rename BETTERAPPNAME
//commandline will rename the app just created or simply open Apps page from heroku dashboard, much easier to modify settings

Deploy code so far by 
$ git push heroku master

