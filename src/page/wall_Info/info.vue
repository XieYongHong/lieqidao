<template>
    <a class="wall-list-info">
        <div class="pic">
            <img :src="imgUrl">
        </div>
        <p class="name">
            「{{name}}」
        </p>
        <p class="content">
            {{text}}
        </p>
        <p class="number">
                <span class="eye-number">
                    <i class="fa fa-eye"></i>
                    {{eyeNumber}}
                </span>
                <span class="house-number">
                    <i class="fa fa-heart"></i>
                    {{houseNumber}}
                </span>
        </p>
        <div class="contentcard">
            <img class="img" :src="ingUrl">
            <p class="name">
            「{{name}}」
        </p>
        <p class="content">
            {{text}}
        </p>
        </div>
    </a>
</template>

<script>
export default {
  props: ["text", "name", "eyeNumber", "houseNumber", "imgUrl"]
};
</script>

<style lang='scss'>
.wall-list-info {
  display: inline-block;
  height: 200px;
  width: 100px;
  position: relative;
  transition: all 0.5s;
  &:hover {
    .contentcard{
        opacity: 1;
        width: 200px;
        left: -50px;
    }
  }
  .contentcard{
      opacity: 0;
      transition: all .5s;
      position: absolute;
      top: 0;
      left: 50px;
      width: 0;
      height: 200px;
      background: #fff;
      overflow: hidden;
      z-index: 9;
  }
  .pic {
    width: 100%;
    height: 100px;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  .name {
    font-size: 13px;
    color: #333333;
  }
  .number {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .content {
    font-size: 11px;
    color: #666;
    text-align: left;
  }
  .eye-number,
  .house-number {
    width: 45%;
    display: inline-block;
    text-align: left;
    font-size: 11px;
    color: #444;
    > i {
      margin-right: 2px;
    }
  }

  p {
    margin: 5px 0;
  }
}
</style>
