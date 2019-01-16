# Frontend Developer (f/m/d) - Spark Networks
## Candidate - Helder Santos

_Hallo!_

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The project uses [Redux](https://redux.js.org/) to manage the application state.
[Firebase Cloud Firestore](https://firebase.google.com/products/firestore/?authuser=0) and [Firebase Cloud Storage](https://firebase.google.com/products/storage/?authuser=0) were used to store data and files on a server.
Tests were not implemented in depth. I tried my best for the moment, since I'm still not experienced in doing them.

Cheers!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

___

# Original README

## Gallery Images Upload


Please provide a gallery with an image upload feature.
This exercise is mostly front end with a tiny bit of back end.
If you're stronger on the backend, you can try this one, but we'll definitely be looking strength on the front end.
Please also ensure both the client and server side is *well tested* and *clean code* and that the code works before you submit your code.

### Client side

The client side can be either web or app.
If it's web, please ensure it can be used on multiple devices.
Completely up to you what frameworks you use; on our own code we use angular 2 or react for web, and all the usual libs for android and iOS that allows MVVM, MVP, and easier testing.

##### Web Requirements
* Provide a gallery view of all previously uploaded images
* For image Upload:
    * mobile web, tablet - this will be a button which will prompt you to either access the camera and take a pic, or select from files on device
    * desktop web - will have 2 options: drag image to page to upload, or a button which allows selection of multiple files on device
* super nice to see the web-views handling rotation on devices

##### App Requirements
For the image upload please provide:
 * a gallery view of all previously uploaded images
 * a button which can either request to take a picture, or upload from camera roll
 * the ability to rotate or crop images


### Server side
The server side can be in whatever language you are strong with.  
We mainly use js, java, and a little bit of php and go, so please try to use one of them that you're stronger with.

Don't worry too much about how this stuff should be stored and served properly on the server (such as s3 buckets, and CDNs etc).
It's fine to store and serve the images locally.

If you opt for a db approach, store in whatever storage you see fit.

