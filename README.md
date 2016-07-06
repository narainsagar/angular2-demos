# angular2-demos-app

Current version: Angular 2.0 RC.4

Angular 2.0 demos/samples playground for components, directives, routes, service, https, forms, etc.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.8.

## [Project] Prerequiste's

It requires `node` >= 5.0.0, `npm` >= 3.0.0, `bower` and `angular-cli` installed on your machine.

Verify that you are running at least node `v5.x.x` and npm `3.x.x` by running `$ node -v` and `$ npm -v` in a terminal/console window. Older versions produce errors.

- Install [Node.js® and npm](https://nodejs.org/en/download/) if they are not already on your machine.

- Run the below commands to install `bower` and `angular-cli`
```
$ npm install -g bower
$ npm install -g angular-cli
```

- [Optional] Upgrade your current `angular-cli` to the latest one:
```
npm uninstall -g angular-cli
npm cache clean
npm install -g angular-cli@latest
```

## [Project] Setup and Usage

- Clone the project (codebase): 

```
$ cd <projects folder>
$ git clone https://<your-username>@bitbucket.org/narainsagar/my-resume-generator.git
```

- Install project dependencies: `$ npm install && bower install`

- Build and Run: 

```
$ ng build` # i.e., (optional)
$ ng serve
```

- Navigate to: `http://localhost:4200/`

- For runing e2e tests: `$ ng e2e`

- For runing unit tests: `$ ng test`

- For more `angular-cli` commands: `$ ng --help`


## Installation e2e Tests (i.e., tools)

For running *e2e* tests you must need [protractor](http://www.protractortest.org/) and [webdriver-manager](https://github.com/angular/webdriver-manager) globally installed on your machine.
Follow up these commands if you don't have installed yet.

```
# Install webdriver-manager
$ npm install -g webdriver-manager

# Setting up a Selenium Server (By default it will download the selenium server jar and chromedriver binary.)
$ webdriver-manager update

# Install protractor
$ npm install -g protractor
```

After then, you need to first start selenium server anf then run tests:

- Starting the Selenium Server: `$ webdriver-manager start`
i.e., By default, the selenium server will run on `http://localhost:4444/wd/hub`.

- Then, For runing e2e tests: `$ ng e2e`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/route/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
