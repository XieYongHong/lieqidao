<template>
    <a>
        <div class="pic">
            <img src="">
        </div>
        <p class="">
            {{text}}
        </p>
        <p>
            <span>
                <i></i>
                {{eyeNumber}}
            </span>
            <span>
                <i></i>
                {{houseNumber}}
            </span>
        </p>
    </a>
</template>

<script>
export default {
    props:['text','eyeNumber','houseNumber']
}
</script>

<style>

</style>
