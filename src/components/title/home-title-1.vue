<template>
    <div class="home-title">
        <div class="t-name">
            {{name}}
            <div class="t-border" :style="tStyle"></div>
        </div>
    </div>
</template>

<script>
export default {
    props:['name','bcolor'],
    data(){
        return {
            tStyle:{
                backgroundColor:this.bcolor
            }
        }
    }
}
</script>

<style lang="scss">
.home-title{
    .t-name{
        font-size: 24px;
        display: inline-block;
        position: relative;
        padding: 0 20px;
    }
    .t-border{
        width: 100%;
        height: 3px;
        position: absolute;
        bottom: -10px;
        left: 0;
    }
}
</style>
