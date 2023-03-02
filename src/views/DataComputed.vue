<template>
    <h1>name: {{fullname}}</h1>
</template>

<script>
export default {
    data() {
        return {
            first: 'John',
            last: 'Doe'
        };
    },
    computed: {
        fullname() {
            return this.first + ' ' + this.last;
        }
    }
}
</script>