import React, { useEffect, useState } from 'react'
import { API_URL } from '../utils/constants'
import { BankObject } from '../interfaces/BankObject.interface'

export const useFetchBanks = () => {
    const [data,setData] = useState<BankObject[]>([]);
    const [isLoading, setIsLoading] =  useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false)

    useEffect(()=>{
        fetchBanks()
    },[]);

    const fetchBanks = async()  => {
        setIsLoading(true)
        try{
            const resp = await fetch(API_URL,{
                method:'GET'
            })

            if(resp.status!== 200) throw new Error('Banks can not be fetch.')
            
            const data:BankObject[] = await resp.json()

            setData(data);
            setIsLoading(false);
            
        }catch(error:unknown){
            setIsError(true)
        }
    }

    return {
        data,
        isLoading,
        isError
    }
}
