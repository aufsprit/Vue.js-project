<template>
    <div>
        <img v-bind:src="imgSrc" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgSrc: "https://avatars.githubusercontent.com/u/6128107?s=200&v=4"
        };
    }
}
</script>