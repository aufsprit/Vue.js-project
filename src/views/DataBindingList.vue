<template>
    <div>
        <table>
            <thead>
                <tr>
                <th>학번</th>
                <th>이름</th>
                <th>학년</th>
                <th>성별</th>
                <th>이메일</th>
                <th>소속</th>
                <th>취미</th>
            </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(info, i) in infoList">
                    <td>{{info.id}}</td>
                    <td>{{info.name}}</td>
                    <td>{{info.grade}}</td>
                    <td>{{info.gender}}</td>
                    <td>{{info.email}}</td>
                    <td>{{info.department}}</td>
                    <td>{{info.hobby}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            infoList: [
                {
                    "id":"2023100100",
                    "name":"aufsprit",
                    "grade":1,
                    "gender":"male",
                    "email":"test@test.test",
                    "department":"computer engineering",
                    "hobby":"coding, game"
                },
                {
                    "id":"2023100122",
                    "name":"test",
                    "grade":1,
                    "gender":"female",
                    "email":"test3@test.test",
                    "department":"computer engineering",
                    "hobby":"cooking"
                },
            ]
        };
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