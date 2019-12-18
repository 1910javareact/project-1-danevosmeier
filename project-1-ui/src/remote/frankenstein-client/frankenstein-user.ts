import { fClient } from "./frankenstein-client";



export async function frankensteinLogin(username:string, password:string){

    const credentials = {
        username,
        password
    }

    try{
        const response = await fClient.post('/login', credentials)
        if(response.status === 200){
            return{
                status:response.status,
                body: response.data
            }
        }
        else{
            return{
                status:response.status,
                body:undefined
            }
        }
    }
    catch(e){
        console.log(e);
        throw new Error('Login Failed')
        
    }
}

export const getAllUsers= async () => {
    try{
        let response = await fClient.get('/users')
        if(response.status === 200){
            return{
                status:response.status,
                body:response.data
            }
        }
        else{
            return{
                status:response.status,
                body:undefined
            }
        }
    }
    catch(e){
        console.log(e);
        throw new Error('Unable to get all users')
        
    }
}

export const getUserById = async(id:number)=>{
    try{
        const response = await fClient.get('/users', {params:{id}})
        if(response.status === 200){
            return{
                status: response.status,
                body: response.data
            }
        }
        else{
            return{
                status: response.status,
                body: undefined
            }
        }
    }
    catch(e){
        console.log(e);
        throw new Error('Unable to find user by id')
        
    }
}

export async function updateUser(userId: number, username:string, firstName:string, lastName:string, email:string){
    const update = {
        userId,
        username,
        firstName,
        lastName,
        email
    }
    try{
        const response = await fClient.patch('/user', update)
        if(response.status === 201){
            return{
                status: response.status,
                body: response.data
            }
        }
        else{
            return{
                status: response.status,
                body: undefined
            }
        }
    }
    catch(e){
        console.log(e);
        throw new Error('Unable to update user')
    }
}