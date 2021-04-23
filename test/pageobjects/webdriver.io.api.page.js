const Page = require('./page');

/**
* This is the WebdriverIO API page object
*/
class WebdriverIoAPIPage extends Page {
    url = 'https://webdriver.io/docs/api';
    
    get searchInput() {
        return $('.DocSearch-Input');
    }

    get searchButton() {
        return $('span.DocSearch-Button-Placeholder');
    }

    get protocolsSection() {
        return $("//a[contains(text(),'Protocols')]");
    }

    get protocolsList() {
        // return $$("//a[contains(text(),'Protocols')]/following-sibling::ul/li/a");
        return $$("//a[contains(text(),'Protocols')]/following-sibling::ul/li");
    }

    get expectedUrl() {
        return this.url;
    }

    async open() {
        super.open('https://webdriver.io/docs/api');
    }
}

module.exports = new WebdriverIoAPIPage();