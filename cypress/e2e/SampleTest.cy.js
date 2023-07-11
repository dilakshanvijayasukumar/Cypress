import { LoginPage } from "./PageObjective/LoginPageObjective";
  
const loginpage = new LoginPage;

describe('OrangeHRM Login and Add Users', () => {
    beforeEach(() => {
      // Visit the login page before each test
      //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginpage.visit();
    });
  
    it('should log in successfully', () => {
      // Enter valid username and password
      //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
      //cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        loginpage.login('Admin', 'admin123')
      // Click on the login button
      //cy.get('.oxd-button').click();
  
      // Assert that the dashboard page is displayed after successful login
      //cy.url().should('include', '/dashboard');
      //cy.contains('Dashboard');
    });
  
    it('should add a new user', () => {
      // Login with valid credentials
      loginpage.login('Admin', 'admin123')
  
      // Navigate to the Add Employee page
      cy.contains('PIM').click();
      cy.contains('Add Employee').click();
  
      // Fill in the employee details
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('John');
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Doe');
      cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('12345');
      cy.get('.oxd-button--secondary').click();
  
      // Assert that the employee is added successfully
      cy.contains('Successfully Saved');
    });
  });