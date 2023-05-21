class userRegistrationPage {
  
  constructor() {
    this.inputFirstName = '[id="firstname"]'
    this.inputSurname = '[id="surname"]'
    this.inputEmail = '[id="email"]'
    this.inputPassword1 = '[id="password1"]'
    this.inputPassword2 = '[id="password2"]'
    this.checkboxAgree = '[id="cbAgr"]'
    this.buttonRegister = '[title="Register"]'
    this.successMessage = '[class="message success"]'
  }
    
    visit() {
      cy.visit(Cypress.env('regUrl'))
    }
  
    fillFirstName(firstName) {
      cy.get(this.inputFirstName).type(firstName)
    }
  
    fillSurname(surname) {
      cy.get(this.inputSurname).type(surname)
    }
  
    fillEmail(email) {
      cy.get(this.inputEmail).type(email)
    }
  
    fillPassword1(password) {
      cy.get(this.inputPassword1).type(password)
    }
  
    fillPassword2(password) {
      cy.get(this.inputPassword2).type(password)
    }
  
    clickAgreeCheckbox() {
      cy.get(this.checkboxAgree).click()
    }
  
    clickRegisterButton() {
      cy.get(this.buttonRegister).click()
    }
  
    assertSuccessMessageVisible() {
      cy.get(this.successMessage).should('be.visible')
    }
  
    assertEmailValidationMessage(expectedMessage) {
      cy.get(this.inputEmail).invoke('prop', 'validationMessage').should('equal', expectedMessage)
    }
  
    assertPassword1Validity(expectedValidity) {
      cy.get(this.inputPassword1).then(($el) => {
        expect($el[0].checkValidity()).to.equal(expectedValidity)
      })
    }

    assertEmailValidity(expectedEmailValidity){
      cy.get(this.inputEmail).then(($el) => {
        expect($el[0].checkValidity()).to.equal(expectedEmailValidity)
        })
    }

    assertFirstNameValidity(expectedFirstNameValidity){
      cy.get(this.inputFirstName).then(($el) => {
        expect($el[0].checkValidity()).to.equal(expectedFirstNameValidity)
        })
    }
      
    assertFirstNameValidationMessage(expectedMessage) {
      cy.get(this.inputFirstName).invoke('prop', 'validationMessage').should('equal', expectedMessage)
    }
  }
  
  export default new userRegistrationPage()