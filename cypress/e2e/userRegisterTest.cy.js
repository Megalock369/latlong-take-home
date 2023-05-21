import userRegistrationPage from '../pages/userRegistrationPage'

const register = require('../fixtures/register')

describe('User Registration Page Tests', () => {
  beforeEach(() => {
    userRegistrationPage.visit()
  })

  it.skip('should successfully register an account with valid credentials', () => {
    const data = register.registerData()
    userRegistrationPage.fillFirstName(data.user)
    userRegistrationPage.fillSurname(data.user)
    userRegistrationPage.fillEmail(data.email)
    userRegistrationPage.fillPassword1(data.password)
    userRegistrationPage.fillPassword2(data.password)
    userRegistrationPage.clickAgreeCheckbox()
    userRegistrationPage.clickRegisterButton()
    userRegistrationPage.assertSuccessMessageVisible()
  })

  it('should display a warning when registering an account with invalid email', () => {
    const data = register.registerData()
    userRegistrationPage.fillFirstName(data.user)
    userRegistrationPage.fillSurname(data.user)
    userRegistrationPage.assertEmailValidity(false)
    userRegistrationPage.fillEmail('notanvalidemail.com')
    userRegistrationPage.fillPassword1(data.password)
    userRegistrationPage.fillPassword2(data.password)
    userRegistrationPage.clickAgreeCheckbox()
    userRegistrationPage.clickRegisterButton()
    userRegistrationPage.assertEmailValidationMessage("Please include an '@' in the email address. 'notanvalidemail.com' is missing an '@'.")
  })

  it('should validate passwords when registering an account with different passwords', () => {
    const data = register.registerData()
    userRegistrationPage.fillFirstName(data.user)
    userRegistrationPage.fillSurname(data.user)
    userRegistrationPage.fillEmail(data.email)
    userRegistrationPage.assertPassword1Validity(false)
    userRegistrationPage.fillPassword1('password')
    userRegistrationPage.fillPassword2('different')
    userRegistrationPage.assertPassword1Validity(true)
  })

  it('should display a warning when registering an account with empty fields', () => {
    const data = register.registerData()
    userRegistrationPage.assertFirstNameValidity(false)
    userRegistrationPage.fillSurname(data.user)
    userRegistrationPage.fillEmail(' ')
    userRegistrationPage.fillEmail(data.email)
    userRegistrationPage.fillPassword1(data.password)
    userRegistrationPage.fillPassword2(data.password)
    userRegistrationPage.clickAgreeCheckbox()
    userRegistrationPage.clickRegisterButton()
    userRegistrationPage.assertFirstNameValidationMessage("Please fill out this field.")
  })
})