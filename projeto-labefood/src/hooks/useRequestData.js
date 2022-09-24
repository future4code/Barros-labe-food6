import axios from "axios"
import { useEffect, useState } from "react"

const useRequestData = (url, headers)=>{
    const [ data, setData ] = useState([])
    const [ error, setError ] = useState([])
    const [ load, setLoad ] = useState(false)

    useEffect(()=>{
        setLoad(true)
        axios.get(url, headers)
        .then((resp)=>{
            setLoad(false)
            setData(resp.data)
        })
        .catch((err)=>{
            setLoad(false)
            setError(err)
        })
    },[url])
    return [ data, error, load ]
}

export default useRequestData