# WebdriverIO_exercise
How to run:
git clone https://github.com/rusigeorgiev/WebdriverIO_exercise.git
cd .\WebdriverIO_exercise\
npm install @wdio/cli
npx wdio config
The poject should work with the default values:
	? Where is your automation backend located? On my local machine
	? Which framework do you want to use? mocha
	? Are you using a compiler? No!
	? Where are your test specs located? ./test/specs/**/*.js
	? Do you want WebdriverIO to autogenerate some test files? No
	? Which reporter do you want to use? spec
	? Do you want to add a service to your test setup? chromedriver
	? What is the base url? http://localhost
	
Depending on your chrome installation you may need to change the chromedriver located here:
..\WebdriverIOTest\node_modules\chromedriver\lib\chromedriver
npx wdio run wdio.conf.js

------------------------------------------------------------------------------------------------
Future work:
1) Implement the structure of the framework - navigation, assertions, 
   connections with database and ticketing system - for example Jira
2) Implement good reporting (including test coverage)
3) Implement screenshots
4) Extend the tests to use different browsers
5) Put the tests in a container so that we can run them easily on different systems
6) Integrate the tests with an automation server - for example Jenkins
7) Add performance tests
8) Implement BDD

Good practices: 
1) To make the tests run in parallel they should not rely on each other
2) Resources should be exported in a resource file
3) Tests should be readable and concise
4) Tests should be code reviewed
5) Make tests for the features that are most often used
6) Make tests for features that had reoccuring issues
