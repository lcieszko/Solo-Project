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
        'Navigate Through Apparel': browser => {
            RTPage
                .click('@Apparel')
                .expect.element('@HeaderLogo').to.be.present.before(750)
            RTPage
                .click('@Shirts')
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage
                .click('@BaseballJerseys')
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage
                .click('@Outerwear')
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage
                .click('@Bottoms')
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage
                .click('@Pajamas')
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage
                .click('@WomenApparel')
                .expect.element('@ActiveTab').to.be.present.before(750)
        },
    }