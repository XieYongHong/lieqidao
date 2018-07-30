<template>
    <el-dialog
    title="用户登录"
    :visible.sync="dialogVisible"
    :modal=false
    :before-close="handleClose">
        <span slot="footer" class="dialog-footer">
            <el-button @click="cancel">取 消</el-button>
            <el-button type="primary" @click="confirm">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
    data(){
        return {
            dialogVisible:false
        }
    },
    methods:{
        handleClose(){
            this.dialogVisible = false
            this.$store.commit('updateDiaLoginStatus',false)
        },
        cancel(){
            this.dialogVisible = false
            this.$store.commit('updateDiaLoginStatus',false)
        },
        confirm(){
            this.dialogVisible = false
            this.$store.commit('updateDiaLoginStatus',false)
        }
    },
    watch:{
        logintype(val){
            this.dialogVisible = val
        }
    },
    computed:{
        logintype(){
            console.log(this.$store);
            return this.$store.getters.getDiaLoginStatus
        }
    }
}
</script>

<style>

</style>
