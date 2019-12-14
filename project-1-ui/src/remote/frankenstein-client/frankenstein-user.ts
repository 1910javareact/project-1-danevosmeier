import { fUserClient } from "./frankenstein-user-client";



export async function frankensteinLogin(username:string, password:string){

    const credentials = {
        username,
        password
    }

    try{
        const response = await fUserClient.post('/login', credentials)
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
        let response = await fUserClient.get('/users')
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