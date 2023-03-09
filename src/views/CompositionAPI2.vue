<template>
    <div>
        <h2>Calculator</h2>
        <div>
            <input type="text" v-model="state.num1" @keyup="plusNumbers" />
            <span> + </span>
            <input type="text" v-model="state.num2" @keyup="plusNumbers" />
            <span> = </span>
            <span>{{state.result}}</span>
        </div>
    </div>
</template>
<script>
    import {reactive, computed} from 'vue';
    export default {
        name: 'MyCalculator',
        setup() {
            let state = reactive({ // reactive를 이용하여 실시간 변경사항에 대한 반응형 적용
                num1: 0,
                num2: 0,
                result: computed(() => parseInt(state.num1) + parseInt(state.num2))
            });
            return {
                state
            }
        }
    }
</script>