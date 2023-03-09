<template>
    <div></div>
</template>
<script>
    import ApiMixin from '../api.js';
    export default {
        mixins: [ApiMixin], //사용할 믹스인 파일을 배열로 등록
        data() {
            return {
                infoList: []
            };
        },
        async mounted() {
            this.infoList = await this.$callAPI("https://4092d5b4-b228-41da-afae-32797fbb2d5c.mock.pstmn.io/list","get");
            console.log(this.infoList);
        }
    }
</script>