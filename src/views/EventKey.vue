<template>
    <div>
        <input @click.ctrl="clickCtrl" @keyup.esc="esc" />
    </div>
</template>

<script>
export default {
    methods: {
        esc() {
            alert("esc를 누르셨습니다.");
        },
        clickCtrl() {
            alert("click과 ctrl을 누르셨습니다.")
        }
    }
}
</script>