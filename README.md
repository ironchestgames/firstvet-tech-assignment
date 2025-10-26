# Fredrik Järnbröst's tech assignment for FirstVet

This is Fredrik Järnbröst's submission to FirstVet for the technical assignment, October -25.

## What it contains

- a _very_ bare bones node server that just serves a static json of one survey
- a React Native app as the front-end of the survey

### Overview of features

At start-up of the app you will first be presented with the "My surveys" overview. It's meant as a hub for if you have more than one survey to reply to. There's only one survey available now as per the requirements. Press it to continue to the survey.

The survey format contains steps which in turn contains elements. The app renders each step according to the elements in the data.

When the survey is done there is a review screen to see an overview of the steps and your replies to the steps. In this overview you will see if you skipped any step that was necessary. You can press each step to navigate to it, to change your answers.

The checkbox, radio button, and text input are all pretty standard (except the paw print). The rating component is slightly unconventional with its drag-and-drop interaction. Since most ratings can be done with regular radio buttons, I made the design choice to add something more eye-catching. Maybe it's not the most reusable component, at least it was fun to make.

## Prerequisites

- Everything needed to run an expo app in iOS Simulator
  - xcode (CLT, Simulators, etc.)
  - npm

## How to run

0. Install

   1. Clone the repo
   2. `npm install`

1. Start server, `npm run start-server`

2. Start app

   1. `npm start`
   2. press 'i' to start in iOS Simulator

### Tests

Run the automated tests with `npm test`.

There are two test suites.

1. The survey slice. This is a more traditional unit test as it tests the reducer function per se.

2. The Step component. This is a small UI test to see that next buttons show up. There is logic to hide it when navigating to a step from the review, so we just want to make sure it's always visible by default.

## TODO

Here I've listed things I thought would be good next steps to continue with this project.

### Continued feature work

- add different animals that the survey is about (to not favor dog-owners with the paw print and bowl + bones)
- add accessibility for more things (now it's basically only checkbox and radio button)
- solve accessibility for rating component (drag n drop)
- add fun animation when submitting (confetti rain, or some 8-bit coin plinglings)
- add localization (both for FE and BE)
- get a designer to replace all the programmers art
- build out the overview with more than one survey
- add notifications for when new surveys are available
- add dark theme (there's some half-baked code in `components/Theme/internals/ThemeProvider.tsx`)
- add some nice custom app icon and splash screen

### Technical improvements

- test on android
- bug: navigating to a step from step review should populate the step with the reply
- bug: paw renders at 0,0 when pressing the actual checkbox/radio button
- fix text input flickering
- maybe do something more conventional with the theme tokens (both spacing and colors have slightly wonky concepts)
- might need scrollview for all steps for real content / smaller devices
- fix type naming: Step (type) vs Step (component)
- add better asset handling instead of sprinkled requires to static files everywhere
- move types into separate type files for reused types (e.g. reply types etc.)
- add custom styling to the navigation header (e.g. fix the ugly offset of the menu icon)
- clear up hidden restriction of only one reply type per step
- add navigation header text to response (maybe you want to customize instead of "step 1/5")
- add lint rule against importing from `/internals/`
- fix inline styling in some places that have it
- clean up the assets folder from expo defaults
- clean up unused deps in the package.json

_Note: I got carried away and apologize if the size of this repo is on the larger size._
