/// <reference types="Cypress" />

describe("Test contact us form via automation test store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href$='content/contact']").click();
        cy.get('#ContactUsFrm_first_name').type("Joe");
        cy.get('#ContactUsFrm_email').type("joe_blogs555@gmail.com");
        cy.get('#ContactUsFrm_enquiry').type("Do you  provide additional discount on bulk orders?");
        cy.get('button[title="Submit"]').click();

        cy.get('.mb40 > :nth-child(3)').then(function($successMessage)
        {
            const successMessage=$successMessage.text();
            expect(successMessage).to.eq("Your enquiry has been successfully sent to the store owner!")
        })

        
    })
})