<template>
    <div class="app">
        <div class="nav">
            <span class="link"><router-link to="/Textarea">Textarea</router-link></span>
            <span class="link"><router-link to="/Tableresult">Result</router-link></span>
        </div>
        <div class="textarea">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    setup() {},
    methods: {
        click() {
            this.$store.dispatch('someData')
        }
    },
}
</script>

<style scoped>
.app {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgb(233, 233, 233);
}
.nav {
    position: relative;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    background-color: rgb(240, 240, 240);
}
.link {
    font-size: 1.5em;
    padding: 10px 20px 10px 20px;
}
.link > :only-child {
    text-decoration: none;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: rgb(22, 22, 22);
}
.link:hover {
    background: rgb(228, 228, 228);
}
.textarea {
    margin: 20px;
}
</style>