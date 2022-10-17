import axios from "axios"
import { useEffect, useState } from "react"

const useRequestData = (url, headers)=>{
    const [ data, setData ] = useState([])
    const [ error, setError ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        axios.get(url, headers)
        .then((resp)=>{
            setIsLoading(false)
            setData(resp.data)
        })
        .catch((err)=>{
            setIsLoading(false)
            setError(err)
        })
    },[url])
    return [ data, error, isLoading ]
}

export default useRequestData