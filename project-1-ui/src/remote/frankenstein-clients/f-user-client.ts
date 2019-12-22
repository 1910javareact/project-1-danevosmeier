import axios from 'axios'

export const fUserClient = axios.create({
    baseURL: 'http://localhost:1910',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})