import { fUserClient } from "./f-user-client";
import { Role } from "../../models/role";

export async function fRemoteLogin(username: string, password: string) {
    const credentails = {
        username,
        password
    }
    try {
        const response = await fUserClient.post('/login', credentails)
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: undefined
            }
        }
    } catch (e) {
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}

export const getAllUsers = async () => {
    try {
        let response = await fUserClient.get('/users')
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: undefined
            }
        }
    } catch (e) {
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}

export const getUserById = async (userId: number) => {
    try {
        let response = await fUserClient.get('/users/' + userId)
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: undefined
            }
        }
    } catch (e) {
        console.log(e)
        throw new Error('Something Went Wrong')
    }
}

export async function updateUser(userId: number, username: string, password: string, firstName: string, lastName: string, email: string, role: Role) {
    const updateFields = {
        userId,
        username,
        password,
        firstName,
        lastName,
        email,
        role
    }
    try {
        let response = await fUserClient.patch('/users', updateFields)
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: undefined
            }
        }
    } catch (e) {
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}