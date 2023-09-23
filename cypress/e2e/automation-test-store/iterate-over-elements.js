/// <reference types="Cypress" />

describe("Iterate over elements", () => {
    it.only("Log information of all hair care products", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
        })
    })

    it("Add specific product to basket", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();

    })

})