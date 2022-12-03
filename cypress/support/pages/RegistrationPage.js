import BasePage from "./BasePage";
import {faker} from '@faker-js/faker';
import user from "../../fixtures/user.json"

class RegistrationPage extends BasePage{

    visit(){
        cy.log('**Open registration page**');
        cy.visit('/#/register');
    }

    getEmailField(){
        return cy.get('#emailControl');
    }

    getInvalidEmailError(){
        return cy.get('#mat-error-7');
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

    clickShowPassAdviceToggle(){
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
        cy.log('**Submitting registration form**');

        let fakerUser = {
            email: faker.internet.email(),
            password: faker.internet.password(8),
            securityAnswer: faker.music.songName()
        }

        let strUser = JSON.stringify(fakerUser)
        console.log(`My Faker user is: (${strUser})`)

        this.getEmailField().type(fakerUser.email);
        this.getPasswordField().type(fakerUser.password);
        this.getRepeatPasswordField().type(fakerUser.password);
        this.clickSecurityQuestionField();
        this.clickSecurityQuestionOption();
        this.getSecurityAnswerField().type(fakerUser.securityAnswer);
        this.clickRegisterButton();
    
        //rewrite user.json for further login
        user.email = fakerUser.email;
        user.password = fakerUser.password;
        user.securityAnswer = fakerUser.securityAnswer;

        //let strUserJson = JSON.stringify(user)
        //console.log(`My user.json is (${strUserJson})`) 
    }

    fillRegistrationFormWithInvalidEmail(){
        cy.log('**Submitting registration form with invalid email**');

        let wrongUser = {
            email: "invalid.email",
            password: faker.internet.password(8),
            securityAnswer: faker.music.songName()
        }

        let strUser = JSON.stringify(wrongUser)
        console.log(`My Faker user is: (${strUser})`)

        this.getEmailField().type(wrongUser.email);
        this.getPasswordField().type(wrongUser.password);
        this.getRepeatPasswordField().type(wrongUser.password);
        this.clickSecurityQuestionField();
        this.clickSecurityQuestionOption();
        this.getSecurityAnswerField().type(wrongUser.securityAnswer);
    }
    
}
export default new RegistrationPage();