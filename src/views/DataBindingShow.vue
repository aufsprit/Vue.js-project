<template>
    <div>
        <h1 v-show="Show">Show가 true일 경우에 블록이 보임</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            Show: false
        };
    }
}
</script>