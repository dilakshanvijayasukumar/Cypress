export class Loginpage{

    // visitSite(){
    //     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // }

    Login(username,paswsword){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(paswsword)
        cy.get('.oxd-button').click()
    }
    
}