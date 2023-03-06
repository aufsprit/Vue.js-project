<template>
    <div>
        <table>
            <thead>
                <tr>
                <th>학번</th>
                <th>이름</th>
                <th>나이</th>
                <th>성별</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(info, i) in infoList">
                    <td>{{info.id}}</td>
                    <td>{{info.name}}</td>
                    <td>{{info.age}}</td>
                    <td>{{info.gender}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                infoList: []
            };
        },
        created() {
            this.getList();
        },
        methods: {
            async getList() {
                this.infoList = await this.$api("https://4092d5b4-b228-41da-afae-32797fbb2d5c.mock.pstmn.io/list","get");
            }
        }
    }
</script>
<style scoped>
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
</style>