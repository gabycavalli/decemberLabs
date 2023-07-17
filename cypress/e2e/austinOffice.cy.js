const { should } = require("chai");
const { beforeEach } = require("mocha");

describe("Thirth part of Automation Challenge", function () {
  beforeEach(() => {
    cypress.visit("/");
  });

  it("Go to Austin Office", function () {
    cy.get("body > nav > div.wrapper > div > div > a.content_logo")
      .should("be.visible")
      .should("have.text", "DecemberLabs");
    cy.get("#menu-header-main-menu").should("be.visible");
    cy.scrollTo("bottom");
    cy.get("<a href='/locations/austin' class='city' xpath='1'>Austin</a>");
  });
});
