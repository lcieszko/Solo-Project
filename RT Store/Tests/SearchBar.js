let Login = require('../Function/Login')
var RTPage = {}
module.exports = {
    beforeEach: browser => {
        RTPage = browser.page.RTPageObject();
        RTPage.navigate();
        browser.resizeWindow('1920', '1080')
        RTPage.expect.element('@Head').to.be.present.before(500)
    },
    after: browser => {
        browser.end()
    },
    'SignIn': browser => {
        Login(RTPage, 'devmtnlc@gmail.com', 'Dexter13')
    },
    'Searh for Red vs Blue': browser => {
        RTPage
            .click('@Search')
            .setValue('@SearchBar', 'Red vs Blue')
            .expect.element('@SearchBar').value.to.be.equal('Red vs Blue').before(500)
        RTPage
            .waitForElementVisible('@SearchRvB', 1000)
            .click('@SearchRvB')
            .expect.element('@Header').to.be.present.before(750)
    },
}