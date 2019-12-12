


export async function fLogin(username:string, password:string){

    const credentials = {
        username,
        password
    }

    try{
        const response = await fetch('http://18.215.16.214:8080/login',{
            method:'POST',
            credentials:'include',
            body: JSON.stringify(credentials),
            headers:{
                'content-type':'application/json'
            }
        })
        console.log(response);
        return await response.json()
        
    }
    catch(e){
        console.log(e);
        
    }
}