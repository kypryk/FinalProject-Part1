import BasePage from "./BasePage";
import {faker} from '@faker-js/faker';
import userJson from "../../fixtures/user.json"

class RegistrationPage extends BasePage{

    visit(){
        cy.log('**Open registration page**');
        cy.visit('/#/register');
    }

    getEmailField(){
        return cy.get('#emailControl');
    }

    getPasswordField(){
        return cy.get('#passwordControl');
    }

    getRepeatPasswordField(){
        return cy.get('#repeatPasswordControl');
    }

    getShowPassAdviceToggle(){
        return cy.get('#mat-slide-toggle-1-input');
    }

    getShowPassAdviceToggle(){
        cy.get('#mat-slide-toggle-1-input').click();
    }

    getSecurityQuestionField(){
        return cy.get('#mat-select-value-3');
    }

    clickSecurityQuestionField(){
        cy.get('#mat-select-value-3').click();
    }

    clickSecurityQuestionOption(){
        cy.log('**Selecting "Your favorite book?" option**');
        cy.get('#mat-option-13').click();
    }
    
    getSecurityAnswerField(){
        return cy.get('#securityAnswerControl');
    }
    
    getRegisterButton(){
        return cy.get('#registerButton');
    }

    clickRegisterButton(){
        cy.get('#registerButton').click();
    }

    submitRegistrationForm(){

        let user = {
            email: faker.internet.email(),
            password: faker.internet.password(8), // <- create pass requirements
            securityAnswer: faker.music.songName()
        }
        console.log(user)

        this.getEmailField().type(user.email);
        this.getPasswordField().type(user.password);
        this.getRepeatPasswordField().type(user.password);
        this.clickSecurityQuestionField();
        this.clickSecurityQuestionOption();
        this.getSecurityAnswerField().type(user.securityAnswer);
        this.clickRegisterButton();

        //rewrite user.json for further login
        userJson.email = user.email;
        userJson.password = user.password;
        userJson.securityAnswer = user.securityAnswer;

        //does it work?? no
        //userJson.token = window.localStorage.getItem('token');
        //userJson.bid = window.sessionStorage.getItem('bid');
    }
    
}
export default new RegistrationPage();