/// <reference types="Cypress" />

describe("Test contact us form via webdriver uni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type("Joe");
        cy.get('[name="last_name"]').type("blogs");
        cy.get('[name="email"]').type("joe_blogs222@gmail.com")
        cy.get('textarea.feedback-input').type("How can I learn cypress?")
        cy.get('[type="submit"]').click()

        cy.get('h1').then(function($successMessage)
        {
            const successMessage=$successMessage.text()
            expect(successMessage).to.eq("Thank You for your Message!")
        })
    })

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Tom");
        cy.get('[name="last_name"]').type("blogs");
        cy.get('textarea.feedback-input').type("How can I learn cypress?")
        cy.get('[type="submit"]').click()

        cy.get('body').then(function($errorMessage)
        {
            const errorMessage=$errorMessage.text()
            expect(errorMessage).to.include("Error: all fields are required")

        })
    })
})