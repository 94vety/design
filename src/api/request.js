import axios from "axios";

export function request(config) {
    const instance = axios.create({
        baseURL: "http://111.111.111.111:8000/aaa/aa",
        timeout: 5000
    })

    instance.interceptors.response.use(
        res => {
            return res.data;
        },
        err => console.log(err)
    );
    
    instance.interceptors.request.use(
        config => {
            config.headers.Authorization = window.sessionStorage.getItem(
                "token"
            );
    
            return config;
        },
        err => console.log(err)
    )

    return instance(config);
}


