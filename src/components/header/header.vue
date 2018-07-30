<template>
    <header id="header" :style="hStyle">
        <div class="logo">
            墙er
        </div>
        <div class="tool">
            <span @click="login">登录</span> / 
            <span @click="register">注册</span>
        </div>
    </header>
</template>

<script>
export default {
    data(){
        return{
            hStyle:{
                backgroundColor:'rgba(255,255,255,0)',
                boxShadow:'0 0 12px rgba(0,0,0,0)',
            }
        }
    },
    methods:{
        ScrollInit(){
            const _this = this;
            window.addEventListener('scroll', _this.scrollFunc);  
        },
        scrollFunc(){
            const _this = this;
            const MAXH = 300;
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

            if(scrollTop >= 0 && scrollTop < MAXH){
                let ot = (scrollTop / MAXH).toFixed(1)
                if(scrollTop >= 0 && scrollTop <= 50){
                    ot = 0
                }
                if(scrollTop >= (MAXH-50)){
                    ot = 1
                }
                _this.hStyle.backgroundColor = 'rgba(255,255,255,'+ot+')'
                _this.hStyle.boxShadow = '0 2px 4px rgba(0,0,0,'+(ot/5)+')'
            }else{
                _this.hStyle.backgroundColor = 'rgba(255,255,255,1)'
                _this.hStyle.boxShadow = '0 2px 4px rgba(0,0,0,.2)'
            }
        },
        login(){
            this.$store.commit('updateDiaLoginStatus',true)
        },
        register(){
            this.$router.push('login')
        }
    },
    mounted(){
        this.ScrollInit()
    }
}
</script>

<style lang='scss'>
    #header{
        height: 60px;
        width: 100%;
        padding: 10px 15px;
        box-sizing: border-box;
        background-color: rgba(255,255,255,0);
        position: fixed;
        z-index: 9;
        >div{
            cursor: pointer;
        }
        .logo{
            float: left;
            margin-left: 5%;
        }
        .tool{
            float: right;
            margin-right: 4%;
            line-height: 40px;
            color:#777;
            >span{
                display: inline-block;
                padding: 3px 5px;
                &:hover{
                    color:#333;
                }
            }
        }
    }
</style>
