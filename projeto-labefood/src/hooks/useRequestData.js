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
            setData(resp.data)
            setIsLoading(false)
        })
        .catch((err)=>{setError(err)})
    },[url])
    return [ data, isLoading, error ]
}

export default useRequestData