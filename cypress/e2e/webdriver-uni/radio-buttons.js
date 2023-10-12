/// <reference types="Cypress" />

describe("Verifying radio buttons via webdriveruni", () => {
    beforeEach(function() {
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });
    })
    it("Check specific radio button", () => {
        cy.get('#radio-buttons').find('[type="radio"]').as('radio-button');
        cy.get('@radio-button').first().check().should('be.checked')
        cy.get('@radio-button').eq(1).check().should('be.checked').and('have.value', 'blue')
        cy.get('@radio-button').first().should('not.be.checked')
    })

    it("Validate state of specific radio button", () => {
        cy.get('[value="lettuce"]').should('not.be.checked')
        cy.get('[value="pumpkin"]').should('be.checked')
        cy.get('[value="lettuce"]').check().should('be.checked')
        cy.get('[value="pumpkin"]').should('not.be.checked')
        cy.get('[value="cabbage"]').should('be.disabled')
    })
})