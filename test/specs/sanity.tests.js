const WebdriverIoMainPage = require('../pageobjects/webdriver.io.main.page');
const WebdriverIoAPIPage = require('../pageobjects/webdriver.io.api.page');

describe('My coding excercise', () => {

    it('Launches a web browser and navigate to the WebdriverIO website (http://webdriver.io)', async () => {
        await WebdriverIoMainPage.open();
    });

    it("Click on the 'API' link in the top navigation bar and load the API documentation (https://webdriver.io/docs/api)", async () => {
        const apiButton = await WebdriverIoMainPage.apiButton;
        expect(apiButton).toBeClickable();
        expect(apiButton).toHaveTextContaining('/docs/api');
        await apiButton.click();
        expect(browser).toHaveUrl('https://webdriver.io/docs/api');
    });

    it("Use the search functionality on this page to search the API documentation for the text 'Click'. Validate the correct information/page is returned.", async () => {
        const searchButton = await WebdriverIoAPIPage.searchButton;
        await searchButton.click();
        const searchInput = await WebdriverIoAPIPage.searchInput;
        await searchInput.addValue('Click');
        expect(searchInput).toHaveTextContaining('Click');
        browser.keys("Escape")
    });

    it('Expand the “Protocols” section in the left navigation bar and verify that the list under the Protocols section is correct.', async () => {
        const protocolsSection = await WebdriverIoAPIPage.protocolsSection;
        await protocolsSection.click();
        await browser.pause(1000);

        var expectedElements = ['WebDriver Protocol', 'Appium', 'Mobile JSON Wire Protocol', 'Chromium',
                                'Sauce Labs', 'Selenium Standalone', 'JSON Wire Protocol']

        let protocolsList = await $$("//a[contains(text(),'Protocols')]/following-sibling::ul");
        for (let ii=0; ii<protocolsList.length; ii++){
            let liElements = await protocolsList[ii].$$('li');
            for (let jj=0; jj<liElements.length; jj++){
                let aElement = await liElements[jj].$('a')
                const theText = await aElement.getText();
                expect(theText).toHaveText(expectedElements[jj]);
            }
        }

    });
});


