<template>
    <div>
        <textarea v-model="message"></textarea>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "test text area"
        };
    }
}
</script>