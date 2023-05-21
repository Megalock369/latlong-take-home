# NewFire Latlong Task
# Cypress Project
## About
This project refers to automated interface tests (end-2-end) that uses Cypress as a framework. This repository contains test cases for latlong.net page.

## Frameworks and Plugins
 - [Cypress](https://www.cypress.io/)
 - [Cypress-Grep (Tags)](https://github.com/cypress-io/cypress/tree/develop/npm/grep)
 - [Cypress-mochawesome-report-generator](https://github.com/adamgruber/mochawesome-report-generator)

---

## Versions
 - Node v18.15.0
 - Cypress 12.8.1

---

## Cypress and plugins installation

## Installation
Make sure you have Node.js and npm installed.  
- Cypress must be version 12 or higher. You can update your cypress version by running this command in cypress folder  
npm install --save-dev cypress  

To install the project, first clone the repository from GitHub:
1. git clone https://github.com/Megalock369/newFire-Take-Home

2. Run the following command to install the project dependencies:  
npm install

3. To install the plugins run following commands:  
npm i -D @cypress/grep  
npm install --save-dev mochawesome
npm install @faker-js/faker --save-dev

---

## Running the Tests
There are diferent commands to use in your terminal for each type of test:  
- To run the tests with the browser open:  
npm run cy:open

- To run the tests with the browser open with Width=410 and Height=860:  
npm run cy:open:mobile

- To run the tests headlessly:  
npm run test

- To run the tests headlessly with Width=410 and Height=860:  
npm run test:mobile

- To run tests with reports:  
npx cypress run --reporter mochawesome