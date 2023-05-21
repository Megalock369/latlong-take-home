class latlongPage {
  
  constructor() {
    this.inputPlace = '[id="place"]'
    this.inputBtnFind = '[id="btnfind"]'
  }
  
  visit() {
      cy.visit(Cypress.env('latUrl'))
    }
  
    fillLocationName(name) {
      cy.get(this.inputPlace).clear().type(name)
    }
  
    clickFindButton() {
      cy.get(this.inputBtnFind).click()
    }
  
    assertLatitudeVisible(latitude) {
      cy.contains(latitude).should('be.visible')
    }
  
    assertLongitudeVisible(longitude) {
      cy.contains(longitude).should('be.visible')
    }
  }
  
  export default new latlongPage()