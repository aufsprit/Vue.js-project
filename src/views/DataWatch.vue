<template>
    <h1>name: {{fullname}}</h1>
    <button type="button" @click="changeName">Click</button>
</template>

<script>
export default {
    data() {
        return {
            first: 'John',
            last: 'Doe',
            fullname: ''
        };
    },
    watch: {
        first() {
            this.fullname = this.first + ' ' + this.last;
        },
        last() {
            this.fullname = this.first + ' ' + this.last;
        }
    },
    methods: {
        changeName() {
            this.first = 'Jane';
            this.last = 'Smith';
        }
    }
}
</script>