<template>
    <select v-model="selectedValue" @change="changeSelect">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    </select>
</template>

<script>
export default {
    data() {
        return {
            selectedValue: ''
        };
    },
    methods: {
        changeSelect() {
            alert(this.selectedValue);
        }
    }
}
</script>