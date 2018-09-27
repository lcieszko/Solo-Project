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
        'Navigate Through Main List': browser => {
            RTPage
                .click('@BrandCollections')
                .expect.element('@BrandCollectionsActive').to.be.present.before(500)
            RTPage    
                .click('@Apparel')
                .expect.element('@ApparelActive').to.be.present.before(500)
            RTPage    
                .click('@Accessories')
                .expect.element('@AccessoriesActive').to.be.present.before(500)
            RTPage    
                .click('@Dorm')
                .expect.element('@DormActive').to.be.present.before(500)
            RTPage
                .click('@Toys')
                .expect.element('@ToysActive').to.be.present.before(500)
            RTPage
                .click('@NewTab')
                .expect.element('@NewTabActive').to.be.present.before(500)
            RTPage
                .click('@Clearance')
                .expect.element('@ClearanceActive').to.be.present.before(500)
        },
    }