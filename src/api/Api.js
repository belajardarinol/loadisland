//import axios
import axios from 'axios'

const Api = axios.create({
    //set default endpoint API
    baseURL: 'https://admin.gizipedia.com/api'
})

export default Api