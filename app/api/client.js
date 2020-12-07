import { create } from 'apisauce'

const apiClient = create({
  baseURL: 'https://fini-backend.herokuapp.com/api'
})

export default apiClient;