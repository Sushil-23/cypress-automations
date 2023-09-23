/// <reference types="Cypress" />

describe("Inspect automation test store itesm using chain of commands", () => {
    it("Click on first item using item header", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();           
    })

    it.only("Click on first item using item text", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText) {
            console.log("Selected the following header : " +itemHeaderText.text())
        });
    })

    it("Click on first item using index", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();           
    })
})