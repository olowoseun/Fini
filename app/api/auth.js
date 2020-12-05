import client from './client'

const signin = (email, password) => client.post('/auth', {email, password});

export default {
  signin
}