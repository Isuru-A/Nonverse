import axios from "axios";

let url = `https://${process.env.REACT_APP_API_SERVER}/`
let token = ''

class api_base {

    async initialise() {
        await axios.get(
            `${url}sanctum/csrf-cookie`
        )
            .then(() => {
                token = document.cookie.split("; ")
                    .find(cookie => cookie.startsWith("XSRF-TOKEN="))
                    .split("=")[1]
            })
        //console.log(`2: ${token}`)
    }
}

export const api = axios.create({
    baseURL: url,
    headers: {
        Accept: 'application/json',
        'X-XSRF-TOKEN': token
    }
})

export default new api_base()