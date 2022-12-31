# image_processingAPI
### Image Processing API - Udacity Full Stack JavaScript Developer Nanodegree Program first project

This project resizes and serves up images based on specified dimensions as needed by a web application.



##### The following NPM scripts are provided:

`lint` Runs eslint for code formatting

`prettier` Runs prettier code formatting

`build` Converts Typescript into JavaScript code

`test` Runs build and Jasmine to perform tests

`jasmine` Run jasmine test

`start` Runs the application in Node



##### Usage:

The server will listen on port 3000:
To use the Image Processor API, send a request to the endpoint with the following query parameters:

**filename** : The filename of the image file to process as stored under assets

**width** : The intended width of the image file to be returned

**height** : The intended height of the image file to be returned

###### Example - http://localhost:3000/api/image?filename=encenadaport&width=100&height=100

Expected query arguments are:

filename: Available filenames are:
    encenadaport
    fjord
    icelandwaterfall
    palmtunnel
    santamonica
width: numerical pixel value > 0
height: numerical pixel value > 0




##### Error messages:

___400 Bad Request___:  query parameters are missing, invalid or cannot be determined

___404 Not Found___:  image file could not be found or does not exist under assets
