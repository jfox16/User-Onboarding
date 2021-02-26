describe('User Onboarding App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('obeys the laws of the universe', () => {
    expect(1 + 1).to.equal(2)
    expect(1 + 1).not.to.equal(3);
  });

  const nameInput = () => cy.get('input[name=name]');
  const emailInput = () => cy.get('input[name=email]');
  const passwordInput = () => cy.get('input[name=password]');
  const tosCheckbox = () => cy.get('input[name=tosAgreed]');
  const submitButton = () => cy.get('button');

  it('shows the proper form inputs', () => {
    nameInput().should('exist');
    emailInput().should('exist');
    passwordInput().should('exist');
    submitButton().should('exist');
  });

  it('can be filled and submitted', () => {
    nameInput().clear().type('example name');
    emailInput().clear().type('example@email.com');
    passwordInput().clear().type('hunterhunter');
    tosCheckbox().click();
    submitButton().click();
    cy.contains('example name');
  });

  it('shows proper error messages', () => {
    nameInput().clear();
    emailInput().clear();
    submitButton().click();
    cy.contains('Terms of Service must be agreed to');
    tosCheckbox().click();
    submitButton().click();
    passwordInput().clear().type('asdf');
    cy.contains('Password must be at least 8 characters long');
    passwordInput().clear().type('asdf111111');
    submitButton().click();
    cy.contains('Password can only contain Latin letters');
    passwordInput().clear().type('sadfasdfasdf');
    submitButton().click();
    cy.contains('No email provided');
    emailInput().clear().type('example@email.com');
    submitButton().click();
    cy.contains('No name provided');
    nameInput().clear().type('example name');
  });
});