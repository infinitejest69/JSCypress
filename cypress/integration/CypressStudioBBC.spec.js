/// <reference types="Cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

// untitled.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
it("BBC news Studio Test", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://bbc.co.uk/news");
  cy.eyesOpen("BBC news", "Not My App");
  cy.get(
    ".nw-c-nav__wide-secondary > .gs-o-list-ui--top-no-border > :nth-child(3) > .nw-o-link > span"
  ).click();
  cy.get(
    ".nw-c-nav__wide-secondary > .gs-o-list-ui--top-no-border > :nth-child(4) > .nw-o-link > span"
  ).click();
  cy.get(
    ".gel-1\\/1\\@xl > .gs-c-promo > .gs-c-promo-body > :nth-child(2) > .gs-o-list-inline > :nth-child(2) > .gs-c-section-link > span"
  ).click();
  // Check the app page
  cy.eyesCheckWindow("Local news screen");
  cy.eyesClose();
  /* ==== End Cypress Studio ==== */
});

it("BBC Sports Test", () => {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://bbc.co.uk/sport");
  cy.get(":nth-child(3) > .sp-c-sport-navigation__link").click();
  cy.get(
    "#sp-nav-secondary > :nth-child(4) > .sp-c-sport-navigation__link"
  ).click();
  cy.get('[data-participant-id="PP588509"]').click();
  cy.get(
    '[data-participant-id="PP588509"] > .sp-c-abbreviation-switcher > .gs-u-vh'
  ).click();
  cy.get('[data-participant-id="PP588509"]').click();
  /* ==== End Cypress Studio ==== */
});

it("BBC Weather Test", () => {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://bbc.co.uk/weather");
  cy.get("#ls-c-search__input-label").clear();
  cy.get("#ls-c-search__input-label").type("Dunfermline{enter}");
  cy.get(".ls-c-search__submit").click();
  cy.get("#wr-location-name-id").click();
  cy.get("#daylink-0 > .wr-day__title > .wr-date").click();
  /* ==== End Cypress Studio ==== */
});
