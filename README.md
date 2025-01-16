# TWWHD Randomizer Tracker

This is a tracker for [The Wind Waker HD Randomizer](https://github.com/SuperDude88/TWWHD-Randomizer) based on the original Tracker from [wooferzfg](https://github.com/wooferzfg/tww-rando-tracker/)

Not all functions of the Wind Waker HD Randomizer are implemented, jet. Only locations and options like Dungeon Secrets and Obscure locations were added. Permalink is currently bitbanged together.
Will be working on getting things more and more compatible with the real deal. 

## Build Instructions

Building and running the tracker locally requires you to install [Node 20](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads).

Clone the repository by running the following in a command prompt:
```bash
git clone https://github.com/wooferzfg/tww-rando-tracker.git
```

Navigate to the `tww-rando-tracker` folder and install dependencies:
```bash
cd tww-rando-tracker && npm install
```
You can then build and serve the tracker application:
```bash
npm start -- --port 80
```
After the server starts, you can go to [localhost:8080](http://localhost:8080/) to open the tracker.

## Documentation

Code documentation is available at [wooferzfg.me/tww-rando-tracker/docs](https://www.wooferzfg.me/tww-rando-tracker/docs).
