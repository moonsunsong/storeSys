<template>
    <div id="tmpl">
        <comment :id="id"></comment>
    </div>
</template>

<script>
    import common from '../../kits/common.js';
    import {Toast} from 'mint-ui';
    import comment from '../subcom/comment.vue';
    export default {
        data(){
            return {
                id:0
            }
        },
        components:{
            comment
        },
        created(){
            this.id = this.$route.params.id;
        }
    }
</script>

<style scoped>

</style>
