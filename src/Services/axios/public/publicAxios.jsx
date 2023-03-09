import axios from "axios";
import { URL } from "Configs/url/Urls.config";


export const PublicAxios = axios.create({
    baseURL:URL.baseUrl
})

export default PublicAxios