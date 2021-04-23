/**
* This is the main page object
*/
module.exports = class Page {
    open (url) {
        return browser.url(url);
    }
}
