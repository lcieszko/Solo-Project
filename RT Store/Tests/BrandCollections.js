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
        'Navigate Through Brand Collections': browser => {
            RTPage
                .click('@BrandCollections')
                .expect.element('@HeaderLogo').to.be.present.before(750)
            RTPage
                .click('@GeoffRamsey')
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage
                .click('@AchievementHunter')
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage
                .click('@Funhaus')
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage
                .click('@RWBY')
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage
                .click('@CowChop')
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage
                .click('@Cosplay')
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage
                .click('@Animation')
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage
                .click('@RoosterTeeth')
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage
                .click('@SugarPine')
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage
                .click('@LetsPlay')
                .expect.element('@ActiveTab').to.be.present.before(750)
        },
    }