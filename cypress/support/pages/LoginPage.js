import BasePage from "./BasePage";
import user from '../../fixtures/user.json'

class LoginPage extends BasePage{
    visit(){
        cy.log('**Open login page**');
        cy.visit('/#/login');
    }

    getEmailField(){
        return cy.get('#email');
    }

    getPasswordField(){
        return cy.get('#password');
    }

    getLoginButton(){
        return cy.get('#loginButton');
    }

    clickLoginButton(){
        cy.get('#loginButton').click();
    }

    getRememberMeCheckbox(){
        return cy.get('#rememberMe');
    }

    clickRememberMeCheckbox(){
        cy.get('#rememberMe-input').click({force: true});
    }
    
    submitLoginForm(){
        this.getEmailField().type(user.email);
        this.getPasswordField().type(user.password);
        this.clickLoginButton();
    }

}
export default new LoginPage();