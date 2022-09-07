# WERFEN Test Case

This project includes the resolution to the evaluation determined by Werfen. In the following README I'll detail on which packages were used and how was my way of thinking during the assembly of the project.

## Motivation

This project has the functionality of being a simulation of the Starckbucks Web App.

## Dependencies

1.  [Angular](https://angular.io/): the core Javascript framework of the app (v13.1.4).
2.  [RxJs](https://rxjs.dev/): reactive extensions library for Javascript (included in Angular CLI installation).
3.  [NgRx Component Store](https://ngrx.io/guide/component-store): stand-alone library that helps to manage local/component state (I've used it as a global store because to avoid boilerplate code with NgRx /store).
4.  [Bootstrap](https://getbootstrap.com/): UI library.
5.  [Karma](https://karma-runner.github.io/latest/index.html): Unit testing report machine.
6.  [Jasmine](https://jasmine.github.io/): TDD/BDD assertion library.
7.  [eslint](https://www.npmjs.com/package/eslint): tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
8.  [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import): tool for installing the next dependency.

<br><br>

# How to install it

## Git Installation

If you don't have Git installed on your PC, just follow [this simple guide](https://rogerdudler.github.io/git-guide/)

<br>

## Node Installation

- ### Node installation on Windows

Access into the [official Node.js website](https://nodejs.org/) and download the lastest stable installer.

- ### Node installation on Ubuntu

You can easily install nodejs and npm easily with apt install with the following commands.

     $ sudo apt install nodejs
     $ sudo apt install npm

- ### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run this command in your command line prompt:

node --version

<br>

## Project installation

You can download the .zip repository or you can use the following commands in your prompt:

$ git clone https://github.com/jvanheerdenn/wf-test
$ cd wf-test
$ npm install

<br><br>

# Discussion

## Application state management

As the project was just a simulation of the Starbuck's menu page and the complexity of the project isn't complex, to avoid boilerplate code we're using NgRx Component Store to manage the state of the application in a simple way.

<br>

## Rewards & Gift Cards

As there were no requirements for these pages, I've used an iframe to represent a way to represent the view of each page.

<br>

## Time & Application status

Actually I was not able to finish the whole application because I'm not going to be available this neither this week or the next week 'cause I'm on a travel trip.

1. The /menu section is working as expected. You should be able to go through the different menu and subemnu's
2. The /rewards and /gift-cards pages are explained in the previous section.
3. The /details page is not fully working as expected. The details data is loading as expected, but I wasn't able to fix an issue with the customization menu (basically I didn't have time to fix a display bug and also to save the customization that the user is selecting in the store).
4. All the application should be responsive (I think I haven't forgot of anything, but I didn't have time to check if everything was OK)

<br><br>

# App configuration

The app is autoconfigured for running at http://localhost:4201.

## Running the project in development

There are two ways to run the app:

1.  Just run `ng serve` in your terminal
2.  Or run `npm run start` in your terminal

<br>
