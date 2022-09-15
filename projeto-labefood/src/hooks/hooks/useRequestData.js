import axios from "axios"
import { useEffect, useState } from "react"

const useRequestData = (url, headers)=>{
    const [ data, setData ] = useState([])
    const [ error, setError ] = useState([])

    useEffect(()=>{
        axios.get(url, headers)
        .then((resp)=>{setData(resp.data)})
        .catch((err)=>{setError(err)})
    },[url])
    return [ data, error ]
}

export default useRequestData