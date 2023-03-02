<template>
    <div v-bind:style="styleObject">Style Binding</div>
</template>

<script>
export default {
    data() {
        return {
            styleObject: {
                color: 'blue',
                fontsize: '14px'
            }
        };
    }
}
</script>