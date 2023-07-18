describe("Thirth part of Automation Challenge", function () {
  beforeEach(() => {
    cy.visit("/");
  });

<<<<<<< HEAD
  it("Go to Austin Office", function () {
    cy.austinOffice();
=======
  it.skip("Go to Austin Office", function () {
    cy.get("body > nav > div.wrapper > div > div > a.content_logo")
      .should("be.visible")
      .should("have.text", "DecemberLabs");
    cy.get("#menu-header-main-menu").should("be.visible");
    cy.scrollTo("bottom");
    cy.get("<a href='/locations/austin' class='city' xpath='1'>Austin</a>");
>>>>>>> c44d7ae00cfac571b2ebbf70663b8fcaa8d71262
  });
});
