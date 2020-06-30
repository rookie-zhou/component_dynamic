import axios from "axios";
import { Message } from "element-ui";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
NProgress.configure({ showSpinner: false }); // NProgress Configuration
const service = axios.create({
    baseURL: "",
    timeout: 5000
});

service.interceptors.request.use(
    config => {
        NProgress.start();
        return config;
    },
    error => {
        NProgress.done();
        Promise.reject(error);
    }
);

service.interceptors.response.use(
    response => {
        NProgress.done();
        const res = response.data;
        if (res.status !== 0) {
            return Promise.reject("error");
        } else {
            return response.data;
        }
    },
    error => {
        NProgress.done();
        Message({
            message: error.message,
            type: "error",
            duration: 5 * 1000
        });
        return Promise.reject(error);
    }
);

export default service;
