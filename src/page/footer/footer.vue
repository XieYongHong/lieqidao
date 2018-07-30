<template>
    <footer>
        <div class="content">

        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
@import '../../assets/css/color.sass';
@import '../../assets/css/media.scss';
$f_Content_width:(
    1200px : 600px,
    1400px : 800px,
    1900px : 1000px  
);

footer{
    height: 300px;
    width: 100%;
    padding: 30px 0;
    box-sizing: border-box;
    background-color: $blue;
    .content{
        @include getMediaAttr($f_Content_width,width);
    }
    .content{
        height: 100%;
        margin: 0 auto;
    }
}
</style>
