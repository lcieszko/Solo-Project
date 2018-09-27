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
        'Navigate Through Home + Dorm': browser => {
            RTPage
                  .click('@Dorm')
                .expect.element('@HeaderLogo').to.be.present.before(750)
            RTPage
                .click('@HomeDecor')
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage
                .click('@Drinkware')
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage
                .click('@Media')
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage
                .click('@Books')
                .expect.element('@ActiveTab').to.be.present.before(750)
        },
    }