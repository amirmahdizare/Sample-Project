import { Backend } from "../utils/Backend";
const getAllCurrentTenantPlan = async(params) =>{
    const response = Backend.get("/api/Planning/GetAllCurrentTenantPlan",{
         params:params,
         headers:{
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`}
    })
    return  (await response).data
}
export {getAllCurrentTenantPlan}