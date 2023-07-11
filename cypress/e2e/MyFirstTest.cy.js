/// <reference types = "cypress"/>


it('Go to Google', () => {
    cy.visit('https://www.google.com/');
    cy.get('.RNNXgb').type('Sas Creative{enter}');
    cy.contains('SAS Creative').click();
})