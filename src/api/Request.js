import baseUrl from "./BaseUrl"
import axios from "axios"
const request = (method, params, url) => {
    switch(method) {
        case "get": {
            axios
                .get(baseUrl + url, params)
                .then(
                    (res) => {
                        console.log(res);
                    },
                    (err) => {
                        console.log(err);
                    }
                )
        }
    }
}

export default request