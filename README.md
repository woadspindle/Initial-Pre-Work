# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.
 It is completely fine to reword information you have gleaned from internet sources, however, please be
 prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste,
 cite your sources (this citation doesn't need to be fancy - just state directly where you found the information
  or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily
  covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do
  some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what
  you do know and what you are stuck on.

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture
(Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

The browser calls on the domain name server to look up the IP address of the website. Using a protocol called TCP/IP
it creates a connection with the server and requests a copy of the code for website. This is called an HTTP request.
If the server approves the request it sends a message back to the client/browser saying so and then sends the files requested
to the client in the form of packets, which are specifically structured and sized chunks of information that are sent in order.
Sending the information in a multitude of smaller pieces makes it easier for multiple clients to access the same server in a
reasonably short amount of time. The browser/client side then reads the data as it is being received and assembles the code into
 the website that you see on your screen.

## From start to finish, how does data reach you to be rendered in the browser?

After a successful TCP/IP three-way handshake has established a connection between server and client, transmission of actual
data can start. The browser then sends a request for the web page informantion. This is usually either a GET or POST type
of request. Part of that request also includes a request to keep communication between client and sever open for addition
requests and transfers any cookies or other information the browser has stored for the domain. The server processes the
request, updates it's information about the client and sends back a reply in the form of the web page requested in addition to
other information and instructions related to things  like cookies, cacheing and how to process the files. The browser will
then process and render each type of code in sequence starting with HTML, then check the tags to see what further requests
it needs to make for things like CSS, image files, JavaScript and those are then rendered, as well. The static files are saved
in the cache for later use.


https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a

## What code is rendered in the browser?

The code rendered in the browser starts with HTML. This lays out the bare structure of the site. CSS is then parsed out and added
to the structure. The HTML is gone through again to place elements starting from the 0,0 point of the users screen.
JavaScript is added after all the HTML and CSS have been interpreted and the output is "painted" on the screen. When the
JavaScript code is activated this causes an addition re-rendering.

 https://www.pathinteractive.com/blog/design-development/rendering-a-webpage-with-google-webmaster-tools

## What is the server-side code’s main function?

In the client-server model, the primary function of the web server-side code is to process the client requests, check if the
client is allowed access to the information it is requesting, send that information to the client/browser in an efficient
way, maintain an open connection until all the information is sent and exchange other information with the client about
things like privacy information, cookies and how to handle files.

https://en.wikipedia.org/wiki/Client%E2%80%93server_model

## What is the client-side code’s main function?

The client-side code is primarily going to communicate with the server to request the information it needs to parse and render
the website for the user. It then runs through the data and does that, starting with HTML, adding the CSS and then incorporating JavaScript.
It also exchanges additional information with the server.

https://en.wikipedia.org/wiki/Client%E2%80%93server_model

## What is runtime?

I found a few answers to this. Runtime can be the amount of time it takes a computer to execute a program or "any library, platform or framework
that code runs on" or when a program interacts with the hardware/software/os of a computer.

https://stackoverflow.com/questions/3900549/what-is-runtime

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

(These last questions have been the hardest to research answers for. I am the least sure that these are right, but at this point I'm
just going to take a stab at them and wait for feedback.)

One, but they are usually iterated over again several times during the rendering process, depending on how many other resources are referenced
and need to be incorporated.

## How many instances of the server-side code are available at any given time?

One per successfully transmitted request.

## How many instances of the databases connected to the server application are created?

It depends on the type of database but generally one per connection.

https://friendlybit.com/css/rendering-a-web-page-step-by-step/
https://en.wikipedia.org/wiki/Database_connection
https://wpshout.com/understanding-server-side-client-side-wordpress/
