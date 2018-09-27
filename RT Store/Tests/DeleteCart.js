let Login = require('../Function/Login')
var RTPage = {}
module.exports = {
    beforeEach: browser => {
        RTPage = browser.page.RTPageObject();
        RTPage.navigate();
        browser.resizeWindow('1920', '1080')
        RTPage.expect.element('@Head').to.be.present.before(500)
    },
    'SignIn': browser => {
        Login(RTPage, 'devmtnlc@gmail.com', 'Dexter13')
    },
    'Delete cart': browser => {
        RTPage
            .click('@Search')
            .setValue('@SearchBar', 'Red vs Blue')
            .expect.element('@SearchBar').value.to.be.equal('Red vs Blue').before(500)
        RTPage
            .waitForElementVisible('@SearchValue', 1000)
            .click('@SearchValue')
            .expect.element('@Header').to.be.present.before(750)
        RTPage
            .click('@Item1')
            .click('@MSize')
            .clearValue('@Quantity')
            .setValue('@Quantity', '2')
            .click('@AddToCart')
            .waitForElementVisible('@DirectCart', 1000)
            .click('@DirectCart')
            .expect.element('@CartQuantity').value.to.be.equal('2').before(750)
        RTPage
            .click('@RemoveFromCart')
            .waitForElementNotPresent('@CartQuantity', 1000)
    },
    after: browser => {
        browser.end()

    },
}   