// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { homePage, austinPage, modal } from "../fixtures/austinLocators";

Cypress.Commands.add("austinOffice", () => {
  cy.get(homePage.logo)
    .should("be.visible")
    .should("have.text", homePage.logoText);
  cy.get(homePage.mainMenu).should("be.visible");
  cy.scrollTo("bottom");
  cy.get(homePage.austinLink).click();
  cy.url().should("eq", Cypress.env("austinUrl"));
  cy.get(austinPage.scheduleConsultationButton).click();
  cy.get(austinPage.austinPageTitle)
    .should("be.visible")
    .then(($title) => {
      cy.log("Title:", $title.text());
    });

  cy.get(modal.modalIframe).should("be.visible");
  cy.get(modal.modalCalendar)
    .should("have.class", "open")
    .then(($element) => {
      cy.log("Modal Opened");
    });
  cy.get(modal.modalCloseButton).then(($button) => {
    cy.wrap($button).click();
  });
});
