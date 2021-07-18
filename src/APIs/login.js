import { Backend } from "../utils/Backend";
const Authentication = async(username,password,rememberme) =>{
    const userData ={}
    userData["userName"]=username
    userData["password"]=password
    userData["rememberMe"]=rememberme
    const data = JSON.stringify(userData); 
    try {
        const response = await Backend.post('/api/Auth/SignIn',data,{headers: {
        'Content-Type': 'application/json',
    }})
    if(response.status =='200')
    {
        localStorage.setItem("accessToken" , response.data.accessToken)
        return true}
    } catch (error) {
        return false
    }
     
}
export {Authentication}