<template>
    <div>
        <input type="text" v-model="valueModel" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            valueModel: 'Form input test'
        };
    }
}
</script>