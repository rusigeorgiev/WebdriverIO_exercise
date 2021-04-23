const WebdriverIoMainPage = require('../pageobjects/webdriver.io.main.page');
const WebdriverIoAPIPage = require('../pageobjects/webdriver.io.api.page');

describe('My coding excercise', () => {

    it('Open the Search dialog on the WebdriverIO website (http://webdriver.io)', async () => {
        await WebdriverIoMainPage.open();
        const searchButton = await WebdriverIoAPIPage.searchButton;
        await searchButton.click();
        const searchInput = await WebdriverIoAPIPage.searchInput;
        await searchInput.addValue('Click');
        expect(searchInput).toHaveTextContaining('Click');
        browser.keys("Escape")
    });

    it('Follow a link', () => {
        
    });
});


