import axios from 'axios'

export const fUserClient = axios.create({
    baseURL: 'http://18.215.16.214:8080',
    headers:{
        'Content-Type': "application/json"
    },
    withCredentials: true
})