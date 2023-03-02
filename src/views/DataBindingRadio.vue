<template>
    <div>
        <label><input type="radio" v-bind:value="radio1" v-model="picked">A</label>
        <label><input type="radio" v-bind:value="radio2" v-model="picked">B</label>
        <label><input type="radio" v-bind:value="radio3" v-model="picked">C</label>
        <br>
        <span>선택 : {{picked}}</span>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                picked: '',
                radio1: 'A',
                radio2: 'B',
                radio3: 'C',
            };
        }
    }
</script>