export const authRegister = async ({email,username, password}) => {
    try{

        // console.log({email,username, password});
        
        const response = await fetch(`${import.meta.env.VITE_API_URL}/register`, 
            {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                username: username,
                password: password
            })
            })
        
            const res = await response.json();
            console.log(response);
            console.log(res);

    } catch(err){
        console.log(err)
    }
    
}