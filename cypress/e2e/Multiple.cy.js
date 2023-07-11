describe('Add User', () => {

    it('Visit website', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //cy.get('input[name="username"]').type('Admin')
       // cy.get('input[name="password"]').type('admin123')
        //cy.get('.oxd-button').click()
    })




    /* it('add user', () => {

         cy.get(':nth-child(1) > .oxd-main-menu-item').click()
     }) */

    it.only('Login', () => {

        //cy.contains('Login').should('be.visible');
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('.oxd-label').contains('Username').should('be.visible')
        cy.get('.oxd-label').contains('Password').should('be.visible')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()

        
     })
})