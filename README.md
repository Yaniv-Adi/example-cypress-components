# exemple-cypress-components

This is the example project for the Cypress JavaScript tutorial. It shows how to start automating visual tests with Applitools Eyes and the Ultrafast Grid using Cypress in JavaScript.

It uses:

* [JavaScript](https://www.javascript.com/) as the programming language
* [Cypress](https://www.cypress.io/) for browser automation
* [Google Chrome](https://www.google.com/chrome/) as the local browser for testing
* [npm](https://www.npmjs.com/) for dependency management
* [Applitools Eyes](https://applitools.com/platform/eyes/) for visual testing
* [React](https://reactjs.org/)

To run this example project, you'll need:

An [Applitools account](https://auth.applitools.com/users/register), which you can register for free
[Node.js](https://nodejs.org/en/download/) version 16 or higher
A good JavaScript editor like [Visual Studio Code](https://code.visualstudio.com/docs/languages/javascript)
Up-to-date versions of the following browsers:
* [Google Chrome](https://www.google.com/chrome/)
* [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)
* [Microsoft Edge](https://www.microsoft.com/en-us/edge?exp=e00&form=MA13FJ)

To install project dependencies and set up Applitools Eyes, run:
```
npm install
npx eyes-setup
```

After running eyes-setup, make sure to follow the instractions in the terminal.

The Applitools config file is [applitools.config.js](../blob/main/applitools.config.js). The main test spec is acme-bank.spec.js.

To execute tests, set the APPLITOOLS_API_KEY environment variable to your account's API key.

Then, to open the Cypress window for launching tests, run:
```
npx cypress open --components
```
If you want to run tests directly from the command line, run this instead:
```
npx cypress run
```
