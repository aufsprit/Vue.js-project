<template>
    <div v-bind:style="[baseStyle, addStyle]">Style Binding</div>
</template>

<script>
export default {
    data() {
        return {
            baseStyle: 'background-color:cyan;width:100%;height:200px;',
            addStyle: 'color:blue;font-weight:bold;'
        }
    }
}
</script>