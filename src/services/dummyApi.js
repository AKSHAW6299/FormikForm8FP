import { axiosInstance } from "./axiosInstance";

let URL = `https://jsonplaceholder.typicode.com`


export async function createApi() {
    return await axiosInstance.post(`${URL}/posts`);
}