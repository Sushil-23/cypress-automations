/// <reference types="Cypress" />

describe("Verifying checkboxes via webdriveruni", () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true});
    })
    it("Check and validate checkbox", () => {
        cy.get('[value="option-1"]').as('option-1')
        cy.get('@option-1').check().should('be.checked');
    })

    it("Uncheck and validate checkbox", () => {
        cy.get('[value="option-3"]').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked');
    })

    it("Check and validate multiple checkbox", () => {
        cy.get('[type="checkbox"]').as('checkbox')
        cy.get('@checkbox').check(['option-1','option-2','option-3','option-4']).should('be.checked');
        cy.get('@checkbox').uncheck(['option-1','option-2']).should('not.be.checked');
    })
})