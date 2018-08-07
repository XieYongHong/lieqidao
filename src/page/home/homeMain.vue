<template>
    <div class="homeMain">
        <div class="home-banner" id="banner">
            <div class="icon-down" @click="scrollDown">
                <i class="fa fa-arrow-down"></i> Learn more
            </div>
        </div>
        <div class="bar home-hot-wall">
            <titles :name="name.hotWall" :bcolor="color.green"></titles>
            <div class="wall-list">
                <div v-for="item in wallList" :key="item.id+'1'">
                    <info 
                        :text='item.text' 
                        :eyeNumber='item.eyeNumber' 
                        :houseNumber='item.houseNumber' 
                        :imgUrl='item.imgUrl'
                        :name='item.name'
                    ></info>
                </div>
            </div>
        </div>
        <div class="bar home-query-wall">
            <titles :name="name.queryWall" :bcolor="color.yellow"></titles>
            <div class="wall-list">
                <div v-for="item in wallList" :key="item.id+'2'">
                    <info 
                        :text='item.text' 
                        :eyeNumber='item.eyeNumber' 
                        :houseNumber='item.houseNumber' 
                        :imgUrl='item.imgUrl'
                        :name='item.name'
                    ></info>
                </div>
            </div>
        </div>
        <div class="bar home-new-wall">
            <titles :name="name.newWall" :bcolor="color.blue"></titles>
            <div class="wall-list">
                <div v-for="item in wallList" :key="item.id+'3'">
                    <info 
                        :text='item.text' 
                        :eyeNumber='item.eyeNumber' 
                        :houseNumber='item.houseNumber' 
                        :imgUrl='item.imgUrl'
                        :name='item.name'
                    ></info>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import titles from '@/components/title/home-title-1';
import info from '@/page/wall_info/info';
export default {
    components:{
        titles,
        info
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
            wallList:[{id:10001,text:'测试内容,测试内容,测试内容,测试内容,测试内容',eyeNumber:10,houseNumber:6,imgUrl:require('../../assets/image/login1.jpg'),name:'测试名称'},
                    {id:10002,text:'测试内容,测试内容,测试内容,测试内容,测试内容',eyeNumber:10,houseNumber:6,imgUrl:require('../../assets/image/login1.jpg'),name:'测试名称'},
                    {id:10003,text:'测试内容,测试内容,测试内容,测试内容',eyeNumber:10,houseNumber:6,imgUrl:require('../../assets/image/login1.jpg'),name:'测试名称'},
                    {id:10004,text:'测试内容,测试内容,测试内容',eyeNumber:10,houseNumber:6,imgUrl:require('../../assets/image/login1.jpg'),name:'测试名称'},
                    {id:10005,text:'测试内容,测试内容',eyeNumber:10,houseNumber:6,imgUrl:require('../../assets/image/login1.jpg'),name:'测试名称'},
                    {id:10006,text:'测试内容,测试内容',eyeNumber:10,houseNumber:6,imgUrl:require('../../assets/image/login1.jpg'),name:'测试名称'},
                    ],
            name:{
                hotWall:'TOP榜',
                newWall:'萌新墙',
                queryWall:'热搜墙'
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
@import '../../assets/css/media.scss';
$bar_width:(
    null:80%,
    1200px:80%,
    1400px:75%,
    1900px:65%
);
.homeMain{
    .home-banner{
        width: 100%;
        background-color: $gray;
        position: relative;
        .icon-down{
            position: absolute;
            bottom: 30px;
            font-size: 16px;
            left: 0;
            right: 0;
            width: 109px;
            margin: 0 auto;
            z-index:3;
            cursor: pointer;
            >i{
                font-size: 18px;
            }
        }
    }
    .bar{
        @include getMediaAttr($bar_width,width);
    }
    .bar{
        margin: 60px auto;
        .wall-list{
            display: flex;
            margin-top: 55px;
            flex-wrap: wrap;
            justify-content:center;
            position: relative;
            >div{
                margin: 15px 2%;
            }
        }
    }
    .home-hot-wall{
        
    }
    .home-ploy{
    }
    .home-hot-tab{
    }
    .home-query-wall{
    }
    .home-new-wall{
    }
}
</style>
