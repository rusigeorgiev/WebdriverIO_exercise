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
