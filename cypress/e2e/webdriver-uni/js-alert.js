/// <reference types="Cypress" />

describe("Handle js alert", () => {
    it("Confirm js alert contains the correct text", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})

        cy.get('#button1').click()
        cy.on('window:alert',(str) => {
            expect(str).to.eq('I am an alert box!')
        })
    })
    it("Confirm js confirm alert box works correctly when clicking ok", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})

        cy.get('#button4').click()
        cy.on('window:confirm',(str) => {
            return true;
        })
        cy.get('#confirm-alert-text').should('have.text','You pressed OK!')
    })

    it("Confirm js confirm alert box works correctly when clicking cancel", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})

        cy.get('#button4').click()
        cy.on('window:confirm',(str) => {
            return false;
        })
        cy.get('#confirm-alert-text').should('have.text','You pressed Cancel!')
    })
})