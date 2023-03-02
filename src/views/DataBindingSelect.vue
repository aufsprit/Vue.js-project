<template>
    <div>
        <select v-model="abc">
            <option value="01">A</option>
            <option value="02">B</option>
            <option value="03">C</option>
        </select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            abc: "03"
        };
    }
}
</script>