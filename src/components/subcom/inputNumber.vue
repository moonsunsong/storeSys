<template>
    <div>
        <div class="inputnum">
            <div class="left" @click="substrict">-</div>
            <div class="center" v-text="count"></div>
            <div class="right" @click="add">+</div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                count:1
            }
        },
        methods:{
            add(){
                this.count +=1;
                this.$emit('sendtogoodsinfo',this.count);
            },
            substrict(){
                this.count -=1;
                if(this.count<=1){
                    this.count = 1;
                }
                this.$emit('sendtogoodsinfo',this.count);
            }
        }
    }
</script>

<style scoped>
.inputnum{
    width:100px;
    display: inline-block;
}
.inputnum div{
    width:25px;
    display: inline-block;
    text-align: center;

}
.inputnum .left,.inputnum .right{
    border:1px solid rgba(155, 155, 155, 0.8);
    cursor:pointer;
}

</style>
