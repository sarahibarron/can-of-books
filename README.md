CAN OF BOOKS project
Author:
Version: 1.0.0

## Overview

<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

This application allows the user to access information about books by searching for criteria that match those stored books. The local client requests data from a server based on these criteria which turn requests data from a remote database.

## Getting Started

<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

Firstly, a server must be built to be the intermediary between the client and the database. This repository must include a 'book.JS file containing the _schema_ or model of the book object in order to combine with our _seed_ data of our books to populate the MongoDB database when run.  
Once this is done, the server can respond to requests from the client by itself requesting these objects from the database and returning these objects to the user.

## Architecture

react, express, mongodb, cors, mongoose

<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

We will be using React to construct our website from HTML, JS and CSS elements.  
We are using _Cors_ to facilitate communication between the client and the server.  
We are using _Mongodb_ to host the database.
We are using _Express_ to facilitate communication between server and database.
