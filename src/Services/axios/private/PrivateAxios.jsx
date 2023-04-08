import axios from "axios";
import { URL } from "Configs/url/Urls.config";
import ErrorSchema from "utils/ErrorSchema/ErrorSchema";
import PublicAxios from "../public/publicAxios";

const callApi = () => {
    const PrivateApi = axios.create({
      baseURL: URL.baseUrl,
      withCredentials:true,
    });
  
    PrivateApi.interceptors.request.use(async (req) => {
      // set access_token from localStorage
  
      // let access_token = localStorage.getItem("access_token")
      //   ? localStorage.getItem("access_token")
      //   : null;
      //  let refresh_token = localStorage.getItem("refresh_token")
      //   ? localStorage.getItem("refresh_token")
      //   : null;
  
  
      //set authToken as authorization header in req structure
  
      // req.headers["Authorization"] = [`Bearer ${access_token}`];
      // req.headers["Access-Control-Allow-Origin"] =true
  
      // set expiration lifeCycle
      // if (access_token === null || access_token === undefined) return req;
  
      return req;
    });
  
    PrivateApi.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
   
        if (error?.response?.status === 401) {
          console.log('logout')
          localStorage.removeItem("userIn")
            // localStorage.removeItem("access_token");
            // const response = await PublicAxios
            //   .post(
            //     "/refresh",
            //     {},
            //     {
            //       withCredentials: true,
            //     }
            //   )
            //   .then((res) => {
            //     localStorage.setItem("access_token", res?.data?.access_token);
            //   })
            //   .catch((err) => {
            //     if (err?.response?.status === 401) {
            //       localStorage.removeItem("access_token");
            //     }
            // });
        }
        // if(error.response?.status === 500){
        //   store.dispatch(setStatus({type:'error',message:'متاسفانه خطایی رخ داده است'}))
        // }
  
        return Promise.reject(error);
      }
    );
  
    return PrivateApi;
  };

export default callApi