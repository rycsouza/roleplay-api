import User from 'App/Models/User'
import Group from 'App/Models/Group'
import Factory from '@ioc:Adonis/Lucid/Factory'

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    avatar: faker.internet.url(),
  }
}).build()

export const GroupFactory = Factory.define(Group, ({ faker }) => {
  return {
    name: faker.person.jobTitle(),
    description: faker.lorem.paragraph(),
    schedule: faker.date.weekday(),
    location: faker.internet.url(),
    chronic: faker.lorem.sentence(),
  }
}).build()
