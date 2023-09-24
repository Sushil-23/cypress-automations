/// <reference types="Cypress" />

describe("Verify autocomplete dropdown list via webdriveruni", () => {
    it("Select specific product via auto complete list", () => {
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true });
        cy.get('#myInput').type('A');
        cy.get('.autocomplete-items > *').each(($el, index, $list) => {
            const prod = $el.text();
            const productToSelect = "Avacado";
            if (prod === productToSelect) {
                cy.wrap($el).click()
                cy.get('#myInput').should('have.value', 'Avacado')
                cy.get('#submit-button').click()
                cy.url().should('include', 'food-item=Avacado')
            }
        }).then(() => {

            cy.get("#myInput").type('G');
            cy.get('.autocomplete-items > *').each(($el, index, $list) => {
                const prod = $el.text();
                const productToSelect = "Grapes";
                if (prod === productToSelect) {
                    cy.wrap($el).click();
                    cy.get('#myInput').should('have.value', 'Grapes');
                    cy.get('#submit-button').click()
                    cy.url().should('include', 'food-item=Grapes')
                }
            })

        })

    })
})