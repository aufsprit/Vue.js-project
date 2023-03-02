<template>
    <div>
        <div v-html="htmlString"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            htmlString: '<p style="color:blue;">blue</p>'
        };
    }
}
</script>