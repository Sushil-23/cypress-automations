/// <reference types="Cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {
    it("Navigating to specific product page", () => {
        cy.visit("https://automationteststore.com/");

        //The following will fail
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup')               
        // const skinCareLink = cy.get("a[href*='product/category&path=']").contains('Skincare')
        // makeupLink.click(); 
        // skinCareLink.click();

        //The following will Pass
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup')
        // makeupLink.click();        
        // const skinCareLink = cy.get("a[href*='product/category&path=']").contains('Skincare')
        // skinCareLink.click();

        // Recommended approach
        cy.get("a[href*='product/category&path=']").contains('Makeup').click();        
        cy.get("a[href*='product/category&path=']").contains('Skincare').click();
     
    })

    it("Navigating to specific product page and assert the header", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains('Makeup').click();
        cy.get('h1 .maintext').then(function($headerText) {
            const headerText = $headerText.text()
            cy.log("Found header text: " +headerText)
            expect(headerText).to.eq("Makeup")
        })        
        cy.get("a[href*='product/category&path=']").contains('Skincare').click();
        cy.get('h1 .maintext').then(function($headerText) {
            const headerText = $headerText.text()
            cy.log("Found header text: " +headerText)
            expect(headerText).to.equal("Skincare")
        }) 
    })

})