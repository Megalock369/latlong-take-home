import loginPage from '../pages/loginPage.js'

describe('User Login Page Tests', () => {
  beforeEach(() => {
    loginPage.visit()
  })

  it('should successfully log in with valid credentials', () => {
    cy.fixture('login').then((data) => {
      data.users.forEach((user) => {
        loginPage.fillEmail(user.email)
        loginPage.fillPassword(user.password)
        loginPage.clickLoginButton()
        loginPage.assertMessageVisible(user.message)
      })
    })
  })

  it('should deny log in for invalid user name', () => {
    cy.fixture('login').then((data) => {
      data.invUsers.forEach((user) => {
        loginPage.fillEmail(user.email)
        loginPage.fillPassword(user.password)
        loginPage.clickLoginButton()
        loginPage.assertMessageVisible(user.message)
      })
    })
  })
})