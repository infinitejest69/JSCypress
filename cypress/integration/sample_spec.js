/// <reference types="Cypress" />

//Describe comes from mocha
//https://mochajs.org/

describe("My First Test", () => {
  it('finds the content "type"', () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();
    //Assertion comes from Chai
    //https://www.chaijs.com/
    cy.url().should("include", "commands/actions");

    cy.get(".action-email")
      .type("Test@test.com")
      //.should('include','Test@test.com')
      .should("have.value", "Test@test.com");
    //.should.be.equal('Test@test.com')
  });
});
