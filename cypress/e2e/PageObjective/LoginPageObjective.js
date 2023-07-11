export class LoginPage{

    visit(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    login(username, password){

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);
        cy.get('.oxd-button').click();
    }
}