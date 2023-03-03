describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200');
    cy.get('[data-testid="link-login"]').click();
    cy.get('[data-testid="input-name"]').type('email@test.com');
    cy.get('[data-testid="input-pwd"]').type('pwd');
    cy.get('[data-testid="submit"]').click();
    cy.url().should('include', '/product/dashboard');
  })
})
