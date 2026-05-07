import { api } from './useAxiosConfig'

export const requestHunyuanAi=(prompt)=>{
    return api({
        url:'/singlechat',
        headers:{
            'Content-Type':'application/json'
        },
        params:{
            prompt
        }
    })
}