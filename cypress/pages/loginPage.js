class loginPage {
    
  constructor() {
    this.inputEmail = '[id="email"]'
    this.inputPassword1 = '[id="password1"]'
    this.inputBtnLogin = '[title="Login"]'
  }
  
    visit() {
      cy.visit(Cypress.env('logUrl'))
    }
  
    fillEmail(email) {
      cy.get(this.inputEmail).clear().type(email)
    }
  
    fillPassword(password) {
      cy.get(this.inputPassword1).clear().type(password)
    }
  
    clickLoginButton() {
      cy.get(this.inputBtnLogin).click()
    }
  
    assertMessageVisible(message) {
      cy.contains(message).should('be.visible')
    }
  }
  
  export default new loginPage()