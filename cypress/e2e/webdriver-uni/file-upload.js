/// <reference types="Cypress" />

describe("Test File Upload via webdriver uni", () => {
    it("Upload a file...", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#myFile').selectFile('cypress/fixtures/laptop.png')
        cy.get('#submit-button').click()
        cy.on('window:alert', (str) => {
            //return true;
            expect(str).to.eq('Your file has now been uploaded!')
        })
    })

    it("Upload No File...", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#submit-button').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('You need to select a file to upload!')
        })

    })

})