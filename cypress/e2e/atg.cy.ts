describe("template spec", () => {
  beforeEach(() => {
    cy.visit('')
  })
  it("render select component and be able to click and expand dropdown", () => {
    cy.contains('Select a bet type').click()
    cy.contains('GS75').should('exist')
  });
  it("able to chose bet type", () => {
    cy.contains('Select a bet type').click()
    cy.get('[data-testid="options"] > :nth-child(1)').click()//('V75')
    cy.contains('V75').should('exist')
    cy.contains('GS75').should('not.exist')
  });
});
