const homeStore = {
    state:{
        diaLoginStatus:false
    },
    mutations:{
        updateDiaLoginStatus(state,data){
            state.diaLoginStatus = data
        }
    },
    getters:{
        getDiaLoginStatus(state){
            return state.diaLoginStatus
        }
    }
}

export default homeStore
