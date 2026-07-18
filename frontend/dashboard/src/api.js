import axios from "axios";


const api = axios.create({

    baseURL:"http://127.0.0.1:8005"

});


export const fetchHRDashboard = () => {

    return api.get("/hr-dashboard/");

};