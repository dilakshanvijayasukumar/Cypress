import  {Loginpage} from "./pageobject/loginpage"

const login = new Loginpage()

it('loginTest' , () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    login.Login('Admin', 'admin123')

})