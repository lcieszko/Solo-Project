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
        'Navigate Through New': browser => {
            RTPage                
                .click('@NewTab')
                .expect.element('@HeaderLogo').to.be.present.before(750)
            RTPage
                .click('@NewAchievementHunter')               
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage    
                .click('@NewRWBY')                
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage   
                .click('@NewCowChop')               
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage    
                .click('@NewFunhaus')
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage    
                .click('@NewRoosterTeeth')
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage    
                .click('@NewCampCamp')         
                .expect.element('@ActiveTab').to.be.present.before(750)
            RTPage    
                .click('@NewRvB')
                .expect.element('@ActiveTab').to.be.present.before(750)
        },
    }