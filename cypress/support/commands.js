var Chance = require('chance');
var chance = new Chance();

const email = chance.email();
const fistName = chance.first();
const lastName = chance.last();
const passWord = chance.string({ length: 7 });
const company = chance.company();
const address = chance.address();
const apartment = 'Apartment 204';
const city = chance.city();
const zipCode = chance.zip();
const information = chance.paragraph({ sentences: 1 });
const phone = chance.phone();
const mobilePhone = chance.phone();
const aliasAddress = chance.address();

Cypress.Commands.add('registrationUser', () => {
  cy.get('a.login').click();
  cy.url().should('contain', 'my-account');
  cy.get('input#email_create').should('be.visible').type(email);
  cy.get('button#SubmitCreate').click();
  cy.get('h1.page-heading').should('be.visible');
  cy.get('input#id_gender1').should('be.visible').check();
  cy.get('input#customer_firstname').should('be.visible').type(fistName);
  cy.get('input#customer_lastname').should('be.visible').type(lastName);
  cy.get('input#passwd').should('be.visible').type(passWord);
  cy.get('select#days').select('23', { force: true });
  cy.get('select#months').select('June', { force: true });
  cy.get('select#years').select('2000', { force: true });
  cy.get('input#newsletter').check();
  cy.get('input#optin').check();
  cy.get('input#company').type(company);
  cy.get('input#address1').type(address);
  cy.get('input#address2').type(apartment);
  cy.get('input#city').type(city);
  cy.get('select#id_state').select('Kansas', { force: true });
  cy.get('input#postcode').type(zipCode);
  cy.get('textarea#other').type(information);
  cy.get('input#phone').type(phone);
  cy.get('input#phone_mobile').type(mobilePhone);
  cy.get('input#alias').type(aliasAddress);
  cy.get('button#submitAccount').click();
  cy.url().should('contain', 'controller=my-account');
});

Cypress.Commands.add('login', () => {
  cy.get('a.login').click();
  cy.url().should('contain', 'my-account');
  cy.get('input#email').type(email);
  cy.get('input#passwd').type(passWord);
  cy.get('button#SubmitLogin').click();
  cy.get('p.info-account').should(
    'contain',
    'Welcome to your account. Here you can manage all of your personal information and orders.',
  );
});
