# sfs-front-end

## Release Notes
**Version 1.0**

**New Features:**
* Story-Viewing Mobile App
  * Secure authentication with encrypted password storage
  * Beautiful bookshelf display for story browsing
  * Advanced sorting and filtering options for story searching
  * Simple and elegant built-in story viewer, with 'last page viewed' memory
* Story Administration Website
  * Simple, functional chart display of a content creator's stories
  * View uploaded stories from the web
  * Create, edit, or delete stories

**Recent Fixes:**
* Tags and filtering have been fully implemented.
* Inconsistent request handling on the back-end has been fixed.
* Stories can now be easily edited on the website interface.

**Known Bugs and Defects:**

* At the current state of the project, the mobile app has not been published to the iOS App Store nor Android App Store.
* The back-end does not yet have a dedicated hosting service. One wishing to publish this app should choose a hosting provider and run the back-end accordingly.
* There is currently not a distinction between ordinary users and content creators. This will only become an issue if the Stories for Sustainability platform takes off in popularity.
* Book cover rendering is not fully implemented. The current interface is still fully-functional and displays book titles in place of covers.

## Install Guide
**Pre-Requisites**
For the installation and running of any component of the Stories for Sustainability project, we assume the user has installed both Git and Node.js for the command line. The rest of the dependent third-party libraries should be automatically installed and managed via NPM (packaged with Node.js).

The user will also need to install the [Expo CLI](https://docs.expo.io/versions/latest/get-started/installation/) in order to run the mobile app.

**Installation:**

To install the mobile app, run the following:
```
git clone https://github.com/gt-team-blue/sfs-front-end.git
```

To install the website, run the following:
```
git clone https://github.com/gt-team-blue/sfs-website.git
```

To install the back-end, run the following:
```
git clone https://github.com/gt-team-blue/sfs-back-end.git
```

**Running the Mobile App:**
1. Open the directory of the mobile app installation
2. Run in terminal:
```
cd ios
pod install
cd ../Stories-For-Sustainability
npm install
expo start
```
3. Open the `stories-for-sustainability.xcworkspace` project in Xcode and click the "play" button

**Running the Website:**
1. Open the directory of the website installation
2. Run in terminal:
```
npm install
npm start
```
3. The website will be live at
**Running the Web Server:**
1. Open the directory of the back-end installation
2. Run in terminal:
```
npm install
npm start
```

**Running Everything Together:**

It is useful to run the back-end and front-end components together to test functionality when making changes. To do so, follow the process below:
1. Run the web server (as explained above)
2. For the mobile app, change the SERVER_URL variable (located [here](https://github.com/gt-team-blue/sfs-front-end/blob/a8bb42ffca157dd04690f9630bf3b50d4d6c0145/Stories-For-Sustainability/constants/Network.js#L1)) from 'server.aidancbrady.com:5000' to 'localhost:5000'
3. For the website, change the SERVER_URL variable (located [here](https://github.com/gt-team-blue/sfs-website/blob/aa06e94d7fa068270b13a50acd0320a425e78d66/StoriesForSustainability/src/app/constants/Network.ts#L1)) from 'server.aidancbrady.com:5000' to 'localhost:5000'
4. Run the mobile app and/or web server in separate command line instances (as explained above)
