import vue from 'vue';
import vuex from 'vuex';

import homeStore from './home';
vue.use(vuex)

const store = new vuex.Store({
    state:{},
    modules:{
        homeStore
    }
})

export default store 