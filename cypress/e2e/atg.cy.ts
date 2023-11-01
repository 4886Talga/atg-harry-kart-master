describe("template spec", () => {
  it("passes", () => {
    cy.visit("");
    cy.get(".App").contains("ATG");
  });
});
