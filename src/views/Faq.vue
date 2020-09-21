<template>
    <div>
        <mynav /><!-- import components mynav -->
        <information /><!-- import components information -->
        <myfooter /><!-- import components myfooter -->
    </div>
</template>

<script>
    import mynav from "../components/mynav.vue"; /* import components mynav */
    import myfooter from "../components/myfooter.vue"; /* import components myfooter */
    import information from "../components/information.vue"; /* import components information */

    export default {
        components: {
            mynav,
            myfooter,
            information,
        },
    }
</script>

<style>

</style>