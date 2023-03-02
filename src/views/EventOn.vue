<template>
    <div>
        <button tpye="button" @click="count">Click</button>
        <p>click count: {{counter}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        };
    },
    methods: {
        count() {
            this.counter = this.counter + 1;
        }
    }
}
</script>