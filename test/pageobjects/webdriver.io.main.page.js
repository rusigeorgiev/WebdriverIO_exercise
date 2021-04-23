const Page = require('./page');

/**
* This is the WebdriverIO landing page object
*/
class WebdriverIoMainPage extends Page {
    get apiButton() {
        return $('a[href=\'/docs/api\']');
    }

    async open() {
        super.open('https://webdriver.io/')
    }
}

module.exports = new WebdriverIoMainPage();