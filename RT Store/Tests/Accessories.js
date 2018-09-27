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
    'Navigate Through Accessories': browser => {
        RTPage
            .click('@Accessories')
            .expect.element('@HeaderLogo').to.be.present.before(750)
        RTPage
            .click('@Hats')
            .expect.element('@ActiveTab').to.be.present.before(750)
        RTPage
            .click('@Bags')
            .expect.element('@ActiveTab').to.be.present.before(750)
        RTPage
            .click('@SmallAccessories')
            .expect.element('@ActiveTab').to.be.present.before(750)
        RTPage
            .click('@Books')
            .expect.element('@ActiveTab').to.be.present.before(750)
        RTPage
            .click('@Socks')
            .expect.element('@ActiveTab').to.be.present.before(750)
        RTPage
            .click('@NewAccessories')
            .expect.element('@ActiveTab').to.be.present.before(750)
    },
}