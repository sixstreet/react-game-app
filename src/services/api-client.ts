import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '384fa75f47f74a7b9eaab99f8e2daec9'
    }
})