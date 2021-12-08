/// <reference types="cypress" />

describe('User registration in the Thunders application', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('When I enter the data and finish, then registration must be done', () => {
    cy.registrationUser();
  });
  it('When I enter login and password, I must log into the application', () => {
    cy.login();
  });
});
