<template>
    <v-app>
        <div id="app">
            <router-view />
        </div>
    </v-app>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style lang="scss" >
    @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

    html {
        box-sizing: border-box;
        -webkit-text-size-adjust: 100%; /* Prevent adjustments of font size after orientation changes in iOS */
        word-break: normal;
        -moz-tab-size: 4;
        tab-size: 4;
    }

    body {
        font-family: "Verdana", Geneva, Tahoma, sans-serif;
    }

    *,
    ::before,
    ::after {
        background-repeat: no-repeat; /* Set `background-repeat: no-repeat` to all elements and pseudo elements */
        box-sizing: inherit;
    }

    ::before,
    ::after {
        text-decoration: inherit; /* Inherit text-decoration and vertical align to ::before and ::after pseudo elements */
        vertical-align: inherit;
    }

    * {
        padding: 0; /* Reset `padding` and `margin` of all elements */
        margin: 0;
    }

    li {
        list-style: none;
    }
</style>
