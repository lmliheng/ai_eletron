import axios from 'axios'
export const api=axios.create({
    baseURL:'http://localhost:7000',
    timeout:60000
})

api.interceptors.request.use(
    config=>{
        return config
    },
    error=>{
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    response=>{
        return response
    },
    error=>{
        return Promise.reject(error)
    }
)

