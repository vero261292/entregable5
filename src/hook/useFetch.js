import { useState } from "react"
import axios from 'axios'


const useFetch = (url) => {

    const [infoApi, setInfoApi] = useState()

    const getApi = () => {
    axios
    .get(url)
    .then(resp => setInfoApi(resp.data))
    .catch(err => console.error(err))
    }

 return [ infoApi, getApi ]
}


export default useFetch