<template>
    <div>
        <headers></headers>
        <mains></mains>
        <dia-login></dia-login>
        <footers></footers>
    </div>
</template>

<script>
import mains from './homeMain';
import headers from '@/components/header/header';
import diaLogin from '@/components/dialog/dia_login';
import footers from '../footer/footer';
export default {
    components:{
        headers,
        mains,
        diaLogin,
        footers
    }
}
</script>

<style>

</style>
