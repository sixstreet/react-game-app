import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'fbed8743ebfd46b089f67b8d123c8aae'
    }
})