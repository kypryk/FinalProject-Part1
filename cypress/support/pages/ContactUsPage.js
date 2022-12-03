import BasePage from "./BasePage";

//let resultCaptcha;

class ContactUsPage extends BasePage{
    visit(){
        cy.visit('/#/contact');
    }

    getCommentField(){
        cy.get('#comment');
    }

    enterValueToCommentField(testComment){
        cy.get('#comment').type(testComment);
    }

    getRatingSlider(){
        cy.get('#rating');
    }

    selectValue3OnRatingSlider(){
        cy.get('#rating').click();
    }

    calculateCaptcha(){
        cy.log('**Canculating captcha**');
        cy.get('#captcha').invoke('text').then((text) => {
            const Parser = require('expr-eval').Parser;
            const parser = new Parser();
            let expr = parser.evaluate(text);
            console.log(expr);
            cy.get('#captchaControl').type(expr);
        })
    }
    
    /*WRONGcalculateCaptcha(){ // 5*5+7 = 18!!!!!!!
        cy.get('#captcha').invoke('text').then((text) => {
            let Numbers = ["","",""]
            let Operators = ["",""]
            let NumbersCount = 0
            let OperatorsCount = 0
            let firstOperation
    
            //getting array of numbers  and operators
            for(let i=0;i<text.length;i++){
                
                if(text[i] >= "0" && text[i] <= "9"){
                    Numbers[NumbersCount] = Numbers[NumbersCount] + text[i];
                }
                else{
                    NumbersCount++
                    Operators[OperatorsCount] = Operators[OperatorsCount] + text[i];
                    OperatorsCount++
                }

            }
            //console.log(`Number are: ${Numbers}`);
            //console.log(`Operators are: ${Operators}`);

            //define the order of 2 operations
            if(Operators[1] == "*" || Operators[1] == "/"){
                //console.log("Second operation goes first")
                switch(Operators[1]){
                    case '*':
                        firstOperation = Number(Numbers[1]) * Number(Numbers[2]);
                        break;
                    case '/':
                        firstOperation = Number(Numbers[1]) / Number(Numbers[2]);
                        break;
                }
                switch(Operators[0]){
                    case '*':
                        resultCaptcha = Number(Numbers[0]) * firstOperation;
                        break;
                    case '/':
                        resultCaptcha = Number(Numbers[0]) / firstOperation;
                        break;
                    case '+':
                        resultCaptcha = Number(Numbers[0]) + firstOperation;
                        break;
                    case '-':
                        resultCaptcha = Number(Numbers[0]) - firstOperation;
                        break;
                }
            }else{
                //console.log("First operation goes first")
                switch(Operators[0]){
                    case '*':
                        firstOperation = Number(Numbers[0]) * Number(Numbers[1]);
                        break;
                    case '/':
                        firstOperation = Number(Numbers[0]) / Number(Numbers[1]);
                        break;
                    case '+':
                        firstOperation = Number(Numbers[0]) + Number(Numbers[1]);
                        break;
                    case '-':
                        firstOperation = Number(Numbers[0]) - Number(Numbers[1]);
                        break;
                }
                switch(Operators[1]){
                    case '*':
                        resultCaptcha = firstOperation * Number(Numbers[2]);
                    case '/':
                        resultCaptcha = firstOperation / Number(Numbers[2]);
                    case '+':
                        resultCaptcha = firstOperation + Number(Numbers[2]);
                    case '-':
                        resultCaptcha = firstOperation - Number(Numbers[2]);
                }
            }

            console.log(`The result is: ${resultCaptcha}`)
            cy.get('#captchaControl').type(resultCaptcha)

            //eval executes the code, big security issue
            //let resultCaptcha = eval(text);
        })
    }*/


    clickSubmitButton(){
        cy.get('#submitButton').click();
    }

    submitContactUsForm(){
        cy.log('**Submitting Contact Us Form**');
        this.enterValueToCommentField("Test Comment");
        this.selectValue3OnRatingSlider();
        this.calculateCaptcha();
        this.clickSubmitButton();
        //this.checkSubmitContactUsSuccessMessage()
        /*cy.get('#submitButton').click().then(() => {
            cy.get('.cdk-overlay-pane').should('contain', 'Thank you for your feedback.');
        })*/
    }

    checkSubmitContactUsSuccessMessage(){
        cy.log('**Checking the success message**');
        return cy.get('.cdk-overlay-pane').should('contain', 'Thank you for your feedback.');
    }
}
export default new ContactUsPage();