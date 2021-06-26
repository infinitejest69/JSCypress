/// <reference types="Cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Open Local news", () => {
  it("navigate to BBC news", () => {
    cy.visit("https://www.bbc.co.uk/news");
  });
  it("click location News", () => {
    cy.get(
      ".nw-c-nav__wide-secondary > .gs-o-list-ui--top-no-border > :nth-child(3) > .nw-o-link"
    ).click();
    cy.get('span:contains("Edinburgh")').first().click();
    cy.get('span:contains("Edinburgh, Fife & East Scotland")').should(
      "have.length",
      9
    );
  });
});
