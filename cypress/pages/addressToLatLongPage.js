class AddressToLatLongPage {
    
  constructor() {
    this.inputAddress = '[class="width70"]'
    this.inputBtnFind = '[id="btnfind"]'
  }

    visit() {
      cy.visit(Cypress.env('adrUrl'))
    }
  
    fillAddress(address) {
      cy.get(this.inputAddress).clear().type(address)
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
  
  export default new AddressToLatLongPage()