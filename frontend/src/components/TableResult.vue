<template>
    <div class="content">
        <table>
            <!-- <tr><th>Имя</th><th>Фамилия</th><th>Положение</th></tr> -->
        </table>
    </div>
</template>

<script>
export default {
    setup() {},
}
</script>

<style scoped>
table {
    width: 70%;
    border-collapse: collapse;
}
td, th {
    border: 1px solid #C2C2FF;
    padding: 3px 7px 2px 7px;
}
th {
    text-align: left;
    padding: 5px;
    background-color: #9999FF;
    color: #fff;
}
tr:hover { background-color: #E0E0FF; }
</style>
