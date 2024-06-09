export const authLogin = async ({username, password}) => {
    try{

        // console.log({username, password});
        
        const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, 
            {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
            })
        
            const res = await response.json();
            // console.log(response);
            console.log(res);

            // ni kalau kita nak return ke LoginUser.jsx
            return res

    } catch(err){
        console.log(err)
    }
    
}