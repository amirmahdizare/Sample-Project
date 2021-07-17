import { Base_URL } from "../configs/variables";
import axios from "axios";
const Backend=axios.create({
    baseURL:Base_URL
})
export {Backend}