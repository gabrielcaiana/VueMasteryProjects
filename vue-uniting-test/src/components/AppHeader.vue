<template>
    <div>
        <button v-show="loggedIn"> Logout </button>
    </div>
</template>

<script>
    export default {
        data:() => ({
            loggedIn: false
        })
    }
</script>
