import { faker } from '@faker-js/faker'

module.exports = 
{
    registerData: () =>
    {
    const user = faker.internet.userName()
    const email = faker.internet.email()
    const password = faker.internet.password()
    
    return {user, email, password}
    }
}