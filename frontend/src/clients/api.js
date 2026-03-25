import axios from 'axios'

export const userClient = axios.create({

    baseURL: 'http//localhostL3000/api/users'

})