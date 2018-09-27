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
        'Navigate Through Toys + Collectibles': browser => {
            RTPage
                .click('@Toys')
                .expect.element('@HeaderLogo').to.be.present.before(750)
            RTPage 
                .click('@Figures')
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage
                .click('@Plush')
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage
                .click('@TradingCards')
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage
                .click('@Games')
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage
                .click('@NewToys')
                .expect.element('@ActiveTab').to.be.present.before(750)
        },
    }