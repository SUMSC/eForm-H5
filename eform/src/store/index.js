import Vue from 'vue'
import Vuex from 'vuex'
import actions from "./actions"
import mutations from "./mutations"
import notice from "./modules/notice"
import search from "./modules/search"

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        notice,
        search
    },
    state: {
        id: 1, // 用户 ID
        idTag: '123456', // 用户学号
        username: '测试用户', // 用户名
        userType: '学生', // 用户类型
        // id: '1', // 用户 ID
        // idTag: '1627406048', // 用户学号
        // username: '王子恒', // 用户名
        // userType: '学生', // 用户类型："学生"，"老师", "匿名用户"
        activeTab: 0,
        showLoginSheet: false,
        mainPage: true,
        myEvent: [],
        myParticipate: [],
        myQnaire: [],
        myAnswer: [],
        myAnonymousQnaire: [],
        authToken: '',
        currentInfo: {},
        currentForm: [],
        currentAnswer: {}
    },
    mutations,
    actions
})
