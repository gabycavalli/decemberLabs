describe("Thirth part of Automation Challenge", function () {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Go to Austin Office", function () {
    cy.austinOffice();
  });
});
