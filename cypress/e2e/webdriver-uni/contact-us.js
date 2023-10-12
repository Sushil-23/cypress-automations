/// <reference types="Cypress" />

describe("Test contact us form via webdriver uni", () => {
    before(function() {
        cy.fixture('example').then(function(data) {
            globalThis.data = data;
        })
    })
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("http://webdriveruniversity.com/")
        cy.get('#contact-us').invoke('removeAttr','target').click({force:true})
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('eq', 'WebDriver | Contact Us')
        cy.url().should('include', 'Contact-Us/contactus')
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type(data.first_name);
        cy.get('[name="last_name"]').type(data.last_name);
        cy.get('[name="email"]').type(data.email)
        cy.get('textarea.feedback-input').type("How can I learn cypress?")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!');
        cy.get('h1').then(function($successMessage)
        {
            const successMessage=$successMessage.text()
            expect(successMessage).to.eq("Thank You for your Message!")
        })
    })

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit("http://webdriveruniversity.com/")
        cy.get('#contact-us').invoke('removeAttr','target').click({force:true})
        cy.get('[name="first_name"]').type(data.first_name);
        cy.get('[name="last_name"]').type(data.last_name);
        cy.get('textarea.feedback-input').type("How can I learn cypress?")
        cy.get('[type="submit"]').click()

        cy.get('body').contains('Error: Invalid email address');
        cy.get('body').then(function($errorMessage)
        {
            const errorMessage=$errorMessage.text()
            expect(errorMessage).to.include("Error: all fields are required")
        })
    })
})