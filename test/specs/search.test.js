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

    it('Follow a link from partial text', () => {
        // TODO: Make a test that will find a partial text and follow the first link
        // Steps:
        // 1) Open the search panel
        // 2) Type: "navigate"
        // 3) Check that the first link is: "navigateTo"
        // 3) Click on the first link
        // 4) Check that the navigateTo page is displayed
    });

    it('Check the search history', () => {
        // TODO: Make a test that will search for 3 words follow the link. The word should be in the search history.
        // Steps:
        // 1) Open the search panel
        // 2) Type: "navigate"
        // 3) Click on the first link
        // 4) Open the search panel
        // 5) Type: "forward"
        // 6) Click on the first link
        // 7) Open the search panel
        // 8) Type: "back"
        // 9) Click on the first link
        // 10) Open the search panel
        // 11) Check that "forward", "back" and "navigateTo" are the top 3 suggestions in this order 
    });

    it('Check key navigation', () => {
        // TODO: Make a test that will search for a word and navigate the menus with the keys
        // Steps:
        // 1) Open the search panel
        // 2) Type: "navigate"
        // 3) Click the down arrow 2 times
        // 3) Click enter
        // 4) Check that the navigateTo usage page is displayed
        // 5) Open the search panel
        // 6) Click the escape key
        // 7) Check that the search menu has closed
    });

    it('Check the Search by link', () => {
        // TODO: Make a test that will follow the link on the search menu
        // Steps:
        // 1) Open the search panel
        // 2) Click on the Search by link
        // 3) Check that the Algolia page has opened
    });


});


