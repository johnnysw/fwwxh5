import {COOKIES, USER_DETAIL, USER_INFO} from "./mutation-types";

const state = {
    userInfo: {},
    userDetail: {},
    cookies: ''
}

const mutations = {
    [USER_INFO](state, userInfo) {
        state[USER_INFO] = userInfo;
    },
    [USER_DETAIL](state, detail){
        state[USER_DETAIL] = detail;
    },
    [COOKIES](state, cookies){
        state[COOKIES] = cookies;
    }
}

const actions = {}

export default {
    state,
    mutations,
    actions
}