module.exports = (RTPage, username, password) => {
    RTPage
        .click('@Login')
        .waitForElementPresent('@Username', 1000)
        .setValue('@Username', 'devmtnlc@gmail.com')
        .expect.element('@Username').value.to.be.equal(username).before(500)
    RTPage
        .setValue('@Password', 'Dexter13')
        .expect.element('@Password').value.to.be.equal(password).before(500)
    RTPage
        .click('@Submit')
        .waitForElementPresent('@Head', 5000)
}