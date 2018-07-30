<template>
    <div class="homeMain">
        <div class="home-banner" id="banner">
            <div class="icon-down" @click="scrollDown">
                <i class="el-icon-arrow-down"></i>
                <br>
                Learn more
            </div>
        </div>
        <div class="bar home-hot-wall">
            <titles :name="name.hotWall" :bcolor="color.blue"></titles>
        </div>
        <div class="bar home-ploy">
            <titles :name="name.hotWall" :bcolor="color.green"></titles>
        </div>
        <div class="bar home-hot-tab">
            <titles :name="name.hotWall" :bcolor="color.yellow"></titles>
        </div>
        <div class="bar home-all-tab">
            <titles :name="name.hotWall" :bcolor="color.red"></titles>
        </div>
        
    </div>
</template>

<script>
import titles from '@/components/title/home-title-1';
export default {
    components:{
        titles
    },
    data(){
        return {
            color:{
                red:       '#cc3d2c',
                yellow:    '#dec862',
                green:     '#55d3a4',
                gray:      '#a5c3cd',
                blue:      '#6066b2',
                purple:    '#7d63a2',
                milkyellow: '#ddd6c6'
            },
            name:{
                hotWall:'最热墙'
            },
            downHeight:0,
            number:0,
            dLoginType:false
        }
    },
    methods:{
        setBannerH(){
            const _this = this
            window.onresize = function(){
                _this.getBannerHeight()
            }
        },
        getBannerHeight(){
            console.log('缩放');
            var banner = document.getElementById('banner');
            this.downHeight = document.body.clientHeight
            if(banner){
                banner.style.height = document.body.clientHeight + 'px';
            }
        },
        scrollDown(){
        }
    },
    mounted(){
        this.setBannerH()
        this.getBannerHeight()
    }
}
</script>

<style lang="scss">
@import '../../assets/css/color.sass';
.homeMain{
    .home-banner{
        width: 100%;
        background-color: $gray;
        position: relative;
        .icon-down{
            position: absolute;
            bottom: 30px;
            font-size: 16px;
            left: 50%;
            margin-left: -44px;
            z-index:3;
            cursor: pointer;
            >i{
                font-size: 25px;
            }
        }
    }
    .bar{
        width: 60%;
        height: 300px;
        margin: 0 auto;
        margin-top: 60px;
    }
    .home-hot-wall{
        
    }
    .home-ploy{
    }
    .home-hot-tab{
    }
    .home-all-tab{
    }
}
</style>
