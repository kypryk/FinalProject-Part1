import user from "../fixtures/user.json"

let requestBody = {
    "email": user.email,
    "password": user.password
}

export function loginViaApi(){
    cy.request('POST', 'http://juice-shop-sanitarskyi.herokuapp.com/rest/user/login', requestBody).then((response) => {
        user.token = response.body.authentication.token;
        user.bid = response.body.authentication.bid;
    
        console.log(user)

        cy.setCookie('token', user.token);
        window.localStorage.setItem('token', user.token);
        window.localStorage.setItem('email', user.email);
        window.sessionStorage.setItem('bid', user.bid);
    })
}

export function searchProductOnMainPage(productName){

}