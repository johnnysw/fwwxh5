/**
 * 请求封装
 * @param url
 * @param method
 * @param data
 * @param arr
 * @returns {Promise<unknown>}
 */
import { localUrl } from "../config/default";
import { storeUtils } from "../utils/common";
import store from "../store";

export default (url,  data, method = 'GET',...arr) => {
    console.log(store.state.user.cookie, 999)
    const apiUrl = localUrl + url
    const condition = {
        url: apiUrl,
        method,
        data,
        ...arr
    };

    console.log(store.state.user.cookies, 898989)

    condition.header = {
        'Authorization':`Bearer ${storeUtils.getToken()}`,
        "Cookie": store.state.user.cookies && store.state.user.cookies.join(';')
    }

    return new Promise((resolve, reject) => {
        condition.success = (res) => {
            const { code, message
            } = res.data
            if (code === '200'){
                resolve(res)
            } else {
                uni.showToast({
                    title: message,
                    icon: 'none'
                })
                reject(res)
            }
        }
        condition.fail = () => {
            uni.showToast('请求失败!');
            reject('fail')
        }
        uni.request(condition)
    });
}