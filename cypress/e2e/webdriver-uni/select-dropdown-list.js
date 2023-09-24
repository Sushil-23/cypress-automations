/// <reference types="Cypress" />

describe("Interate with drop down list via webdriveruni", () => {
    it("Select specific value via dropdown list", () => {
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true});
       
        cy.get('#dropdowm-menu-1').select('c#');
        cy.get('#dropdowm-menu-2').select('TestNG');
        cy.get('#dropdowm-menu-3').select('jquery');
        cy.get('#dropdowm-menu-3').select('JavaScript').should('have.value','javascript');

        //challenge
        cy.get('#dropdowm-menu-2').select('maven').contains('Maven');
        cy.get('#dropdowm-menu-2').select('TestNG').should('have.value','testng');

    })
})