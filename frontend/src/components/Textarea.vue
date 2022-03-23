<template>
    <div class="area">
        <textarea name="JSON" class="custom-textarea" v-model="json_message"></textarea>
        <div class="send-btn" type="button" @click="send">Send</div>
    </div>
</template>

<script>
export default {
    setup() {},
    data() {
        return {
            json_message: '[]'
        }
    },
    methods: {
        send() {
            this.$store.dispatch('sendJSON', this.json_message);
        }
    },
}
</script>

<style scoped>
.area {
    position: relative;
    height: 30em;
}
.custom-textarea {
    position: relative;
    width: 100%;
    height: 100%;
    max-height: 100%;
    max-width: 100%;
    min-height: 100%;
    min-width: 100%;
}
.send-btn {
    border: 1px solid black;
    background-color: rgb(252, 252, 252);
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    height: 40px;
    width: 100px;
    position: absolute;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
}
.send-btn:hover {
    background-color: rgb(214, 255, 221);;
}
</style>